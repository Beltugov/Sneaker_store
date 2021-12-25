import React from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import {MAIN_ROUTE} from "../utils/constants";
import {sneakers, accessories, clothes} from "../database/products";

const AppRouter = (props) => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component sneakers = {sneakers} accessories ={accessories} clothes = {clothes}/>}/>
            )}
            {props.isLogIn && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component sneakers = {sneakers} accessories ={accessories} clothes = {clothes}/>}/>
            )}
            <Route path='/*' element={<Navigate to={MAIN_ROUTE}/>}/>
        </Routes>
    );
};

export default AppRouter;