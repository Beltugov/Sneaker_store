import Admin from "./pages/admin/Admin";
import Basket from './pages/basket/Basket'
import Authorization from './pages/authorization/Authorization'
import Main from './pages/main/Main'
import Product from './pages/product/Product'
import Shop from './pages/shop/Shop'
import Favorites from "./pages/favorites/Favorites";
import {
    ADMIN_ROUTE,
    BASKET_ROUTE,
    LOGIN_ROUTE,
    MAIN_ROUTE,
    PRODUCT_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE,
    FAVORITE_ROUTE,
} from "./utils/constants";

export const  authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: FAVORITE_ROUTE,
        Component: Favorites
    },
]

export const  publicRoutes = [
    {
        path: SHOP_ROUTE,
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
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    },
    {
        path: MAIN_ROUTE,
        Component: Main
    },
]