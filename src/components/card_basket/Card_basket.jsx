import React from 'react';
import './Card_basket.scss'
import {useDispatch, useSelector} from "react-redux";
import {removeCount, removeProduct, setPrice} from "../../redux/action/actionBasket";

const CardBasket = ({item, num}) => {
    const dispatch = useDispatch()
    const {count, price} = useSelector(({basketReducer}) => {
        return {
            count: basketReducer.totalCount,
            price: basketReducer.totalPrice
        }
    })

    function removeItem() {
        dispatch(removeCount(count))
        dispatch(setPrice(price - item.price))
        dispatch(removeProduct(num))
    }

    return (
        <div className="card-basket">
            <div className="card-basket__number">{num}</div>
            <div className="card-basket__image">
                <img src={item.imageUrl} alt="product" width={150}/>
            </div>
            <div className="card-basket__title">{item.gender ? item.gender + " " + item.type
                : item.type} {item.brand} {item.name} Цена: {item.price} руб.</div>
            <button className="card-basket__button" onClick={removeItem}>Убрать</button>
        </div>
    );
};

export default CardBasket;