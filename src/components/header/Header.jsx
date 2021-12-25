import './Header.scss';
import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";
import {LOGIN_ROUTE, BASKET_ROUTE, MAIN_ROUTE, SNEAKERS_ROUTE, CLOTHES_ROUTE, ACCESSORIES_ROUTE} from "../../utils/constants";
import logoImg from '../../assets/img/logo-2.jpg';
import basketIcon from '../../assets/img/basket-icon.png'
import {logOut} from "../../redux/action/actionLogin";
import {useDispatch, useSelector} from "react-redux";

const Header = (item) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {count} = useSelector(({basketReducer}) => {
        return {
            count: basketReducer.totalCount
        }
    })

    function loginLogout() {
        if (item.isLogIn) {
            dispatch(logOut())
        } else {
            navigate(LOGIN_ROUTE)
        }
    }
    return (
        <header className="header">
            <div className="header__navbar">
                <div className="header__logo">
                    <NavLink to={MAIN_ROUTE}>
                        <img src={logoImg} alt="logo" width={60}/>
                    </NavLink>
                </div>
                <nav className="header__menu">
                    <ul className="header__menu-list">
                        <li className="header__menu-list__item"><NavLink to={SNEAKERS_ROUTE}>Обувь</NavLink></li>
                        <li className="header__menu-list__item"><NavLink to={CLOTHES_ROUTE}>Одежда</NavLink></li>
                        <li className="header__menu-list__item"><NavLink to={ACCESSORIES_ROUTE}>Аксессуары</NavLink></li>
                    </ul>
                </nav>
                <div className="header__user">
                    {item.isLogIn ?
                        <div className="header__user-basket"><NavLink to={BASKET_ROUTE}>
                            <img src={basketIcon}
                                 alt="basket"
                                 width={28}/>
                            <span className="basket-count">{count}</span></NavLink></div> : ""}
                    {item.isLogIn ? <div className="header__user-name">{item.user}</div> : ""}
                    <button className="header__user-button login-button"
                            onClick={loginLogout}>{item.isLogIn ? "Выйти" : "Войти"}</button>
                </div>
            </div>
        </header>
    );
}

export default Header;