import React from 'react';
import './Main.scss'
import {NavLink} from "react-router-dom";
import {SNEAKERS_ROUTE} from "../../utils/constants";


const Main = (props) => {

    return (
        <div className="main-page">
            <h1 className="main-page__title">
                Новогодние скидки и акции
            </h1>
            <div className="main-page__ads">
                <NavLink to={SNEAKERS_ROUTE}>
                    <img src="https://www.hotevents.ru/img/m/hoff/2017-12-11_ngprice1.jpg" alt="ads_image"/>
                </NavLink>
            </div>
        </div>
    );
};

export default Main;