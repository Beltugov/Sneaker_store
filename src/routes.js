import Basket from './pages/basket/Basket'
import Authorization from './pages/authorization/Authorization'
import Main from './pages/main/Main'
import Product from './pages/product/Product'
import Shop from './pages/shop/Shop'

import {
    BASKET_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SNEAKERS_ROUTE,
    ACCESSORIES_ROUTE,
    CLOTHES_ROUTE,
} from "./utils/constants";

export const  authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
]

export const  publicRoutes = [
    {
        path: SNEAKERS_ROUTE,
        Component: Shop
    },
    {
        path: ACCESSORIES_ROUTE,
        Component: Shop
    },
    {
        path: CLOTHES_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Authorization
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Authorization
    },
    {
        path: SNEAKERS_ROUTE + PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: ACCESSORIES_ROUTE + PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: CLOTHES_ROUTE + PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
]