import React from 'react';
import Card from "../../components/card/Card";
import "./Shop.scss"
import {useLocation} from "react-router-dom";
import {SNEAKERS_ROUTE, CLOTHES_ROUTE, ACCESSORIES_ROUTE} from "../../utils/constants";

const Shop = (props) => {
    const location = useLocation()
    return (
        <div className="shop">
            {location.pathname === SNEAKERS_ROUTE ? props.sneakers.map((item) => {
                return (
                    <Card item={item}/>
                )
            }) : location.pathname === CLOTHES_ROUTE ? props.clothes.map((item) => {
                return (
                    <Card item={item}/>
                )
            }) : location.pathname === ACCESSORIES_ROUTE ? props.accessories.map((item) => {
                return (
                    <Card item={item}/>
                )
            }) : ""}
        </div>
    );
};

export default Shop;