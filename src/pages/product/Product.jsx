import React from 'react';
import "./Product.scss"
import {useLocation, useParams} from "react-router-dom";
import {ACCESSORIES_ROUTE, CLOTHES_ROUTE, SNEAKERS_ROUTE} from "../../utils/constants";
import {useDispatch, useSelector} from "react-redux";
import {addProduct, setCount, setPrice} from "../../redux/action/actionBasket";


const Product = (props) => {
    const location = useLocation()
    const {id} = useParams()
    const dispatch = useDispatch()
    const product = location.pathname.includes(SNEAKERS_ROUTE) ? props.sneakers.find((item) => item.id === Number(id))
        : location.pathname.includes(ACCESSORIES_ROUTE) ? props.accessories.find((item) => item.id === Number(id))
            : location.pathname.includes(CLOTHES_ROUTE) ? props.clothes.find((item) => item.id === Number(id)) : ''
    const {item, count, price} = useSelector(({basketReducer}) => {
        return {
            item: basketReducer.item,
            count: basketReducer.totalCount,
            price: basketReducer.totalPrice,
        }
    })
    console.log(item)
    console.log(product)
    function addInBasket () {
        dispatch(addProduct(product))
        dispatch(setCount(count))
        dispatch(setPrice(price + product.price))
    }

    return (
        <div className="product">
            <div className="product__image">
                <img src={product.imageUrl} alt="product-image" width={450}/>
            </div>
            <div className="product__block">
                <h1 className="product__block-title">{product.gender ? product.gender + " " + product.type
                    : product.type} {product.brand} {product.name}</h1>
                <span className="product__block-price">Цена: {product.price} руб.</span>
                <span
                    className="product__block-size">{product.sizes ? "Размер: " + product.sizes.join(" | ") : ""}</span>
                <p className="product__block-description">Описание: {product.description}</p>
                <button className="product__block-button" onClick={addInBasket}>В корзину</button>
            </div>

        </div>
    );
};

export default Product;