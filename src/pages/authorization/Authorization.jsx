import React, {useState} from 'react';
import {users} from "../../database/users";
import {useDispatch} from "react-redux";
import {logIn} from "../../redux/action/actionLogin";
import {useNavigate, useLocation, NavLink} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/constants";
import './Authorization.scss';


const Authorization = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()
    const pathLogin = location.pathname === LOGIN_ROUTE

    const singIn = (e) => {
        e.preventDefault()
        const getUser = users.find((item) => item.name === name)
        if (getUser && getUser.password === password) {
            dispatch(logIn(getUser))
            navigate(MAIN_ROUTE)
        }
    }

    const singUp = (e) => {
        e.preventDefault()
        const newUser = {name, email, password}
        users.push(newUser)
        setName('')
        setEmail('')
        setPassword('')
        navigate(LOGIN_ROUTE)
    }

    return (
        <div className="container-auth">
            <div className="auth">
                <h1 className="auth__title">{pathLogin ? "Войти" : "Регистрация"}</h1>
                <form className="auth__form form" method="POST" onSubmit={pathLogin ? singIn : singUp}>
                    {}
                    <input className="form__input" type="text" placeholder="Имя" required value={name}
                           onChange={event => setName(event.target.value)}/>
                    {pathLogin ? "" :
                        <input className="form__input" type="email" placeholder="Электронная почта" required
                               value={email}
                               onChange={event => setEmail(event.target.value)}/>}
                    <input className="form__input" type="password" placeholder="Пароль" required value={password}
                           onChange={event => setPassword(event.target.value)}/>
                    <button className="form__button"
                            type="submit">{pathLogin ? "Войти" : "Зарегистрироваться"}</button>
                    {pathLogin ?
                        <span className="form__question">Нет аккаунта?<NavLink className="form__question-link"
                                                                               to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink></span> :
                        <span className="form__question">Есть аккаунт?<NavLink className="form__question-link" to={LOGIN_ROUTE}>Войти</NavLink></span>}
                </form>
            </div>
        </div>

    );
};

export default Authorization;