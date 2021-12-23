import React from 'react';
import Card from "../../components/card/Card";
import {sneakers} from "../../database/products";
import "./Shop.scss"


const Shop = () => {
    return (
        <div className="container-shop">
            {sneakers.map((item) => {
                return (
                        <Card item = {item}/>
                )
            })}
        </div>
    );
};

export default Shop;