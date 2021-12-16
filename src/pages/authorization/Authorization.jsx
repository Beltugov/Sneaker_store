import React from 'react';
import './Authorization.scss';

const Authorization = () => {
    return (
        <main className="container">
            <form className="login__form" method="POST" onSubmit="formSubmit(event)">
                <div className="login__form-email input-wrapper">
                    <label className="input-label" htmlFor="email">Email</label>
                    <input
                        className="form-input"
                        type="email"
                        id="email"
                        placeholder="Введите почту"
                    />
                </div>
                <div className="login__form-password input-wrapper">
                    <label className="input-label" htmlFor="password">Пароль</label>
                    <input
                        className="form-input"
                        type="password"
                        id="password"
                        placeholder="Введите пароль"
                    />
                </div>
                <div className="checkbox-wrapper">
                    <label className="checkbox-label" htmlFor="checkbox">
                        <input className="form-checkbox" type="checkbox" id="checkbox"/>
                        <div className="checkbox-mark"></div>
                        Я согласен с <a className="checkbox-referral" href="#">Правилами пользования
                        приложением</a></label>
                </div>
                <button className="login__form-button form-button" type="submit" id="button">Войти</button>
            </form>
        </main>

    );
};

export default Authorization;