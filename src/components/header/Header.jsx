import React from 'react';
import {NavLink} from "react-router-dom";
import {LOGIN_ROUTE, SHOP_ROUTE, BASKET_ROUTE, FAVORITE_ROUTE} from "../../utils/constants";

import './Header.scss';

import logoImg from '../../assets/img/logo-2.jpg';
import favoriteIcon from '../../assets/img/favorite-icon.jpg'
import basketIcon from '../../assets/img/basket-icon.png'
import loginIcon from '../../assets/img/login-icon.png'


const Header = () => {
    return (
        <header className="header">
                <div className="header__navbar">
                    <div className="header__logo">
                        <a className="header__logo-link"    href="/" title="Sneaker shop">
                            <img src={logoImg} alt="logo" width={60}/>
                        </a>
                    </div>
                    <nav className="header__menu">
                        <ul className="header__menu-list">
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Новинки</NavLink></li>
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Бренд</NavLink></li>
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Обувь</NavLink></li>
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Одежда</NavLink></li>
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Аксессуары</NavLink></li>
                            <li className="header__menu-list__item"><NavLink to={SHOP_ROUTE}>Распродажа</NavLink></li>
                        </ul>
                    </nav>
                    <div className="header__buttons">
                        <ul className="header__buttons-list">
                            <li className="header__buttons-list__item"><NavLink to={FAVORITE_ROUTE}><img src={favoriteIcon} alt="favorite" width={30}/></NavLink></li>
                            <li className="header__buttons-list__item"><NavLink to={BASKET_ROUTE}>  <img src={basketIcon} alt="basket" width={30}/>
                            <span className="quantity-badge">0</span></NavLink></li>
                            <li className="header__buttons-list__item"><NavLink to={LOGIN_ROUTE}><img src={loginIcon} alt="login" width={30}/></NavLink></li>
                        </ul>
                    </div>
                </div>
        </header>
    );
};

export default Header;