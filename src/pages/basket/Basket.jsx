import React from 'react';
import {useSelector} from "react-redux";
import Card_basket from "../../components/card_basket/Card_basket";
import "./Basket.scss"

const Basket = (props) => {
    const {product, totalPrice, length} = useSelector(({basketReducer}) => {
        return {
            product: basketReducer.item,
            totalPrice: basketReducer.totalPrice,
            length: basketReducer.item.length
        }
    })
    let num = 0

    function addOrder() {
        alert("Заказ оформлен")
    }

    return (
        <div className="basket">
            {length === 0 ?
                <div className="basket__message">
                    <span>"Пока пусто"</span>
                </div> :
                <div className="basket__list">
                    {product.map((item) => {
                        num += 1
                        return (
                            <Card_basket item={item} num={num}/>
                        )
                    })}
                    <div className="basket__list-total">
                        <span className="basket__list-total__price">Итого: {totalPrice} руб.</span>
                        <button className="basket__list-total__button" onClick={addOrder}>Оформить заказ</button>
                    </div>
                </div>}

        </div>

    );
};

export default Basket;