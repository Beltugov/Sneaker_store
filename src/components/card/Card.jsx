import React from 'react';
import "./Card.scss"
import {NavLink, useLocation} from "react-router-dom";
import {PRODUCT_ROUTE} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, setCount, setPrice} from "../../redux/action/actionBasket";

const Card = ({item}) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const {count, price} = useSelector(({basketReducer}) => {
        return {
            count: basketReducer.totalCount,
            price: basketReducer.totalPrice,
        }
    })

    function addInBasket () {
        dispatch(addProduct(item))
        dispatch(setCount(count))
        dispatch(setPrice(price + item.price))
    }

    return (
        <div className="card__block">
            <NavLink className="card__block-link" to={location.pathname + PRODUCT_ROUTE + "/" + item.id}>
                <div className="card__block-image">
                    <img src={item.imageUrl} alt="product" width={250}/>
                </div>
                <span className="card__block-title">{item.brand} {item.name}</span>
                <span className="card__block-price">Цена: {item.price} руб.</span>
            </NavLink>
            <button className="card__block-button" onClick={addInBasket}>В корзину</button>
        </div>
    );
};

export default Card;