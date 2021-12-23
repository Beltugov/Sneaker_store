import React from 'react';
import "./Card.scss"
import {NavLink} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/constants";

const Card = ({item}) => {
    return (
        <div className="card__block">
            <NavLink className="card__block-link" to={PRODUCT_ROUTE + "/" + item.id}>
                <div className="card__block-image">
                    <img src={item.imageUrl} alt="product" width={250}/>
                </div>
                <span className="card__block-title">{item.brand} {item.name}</span>
                <span className="card__block-price">Цена: {item.price} руб.</span>
            </NavLink>
            <button className="card__block-button">В корзину</button>
        </div>
    );
};

export default Card;