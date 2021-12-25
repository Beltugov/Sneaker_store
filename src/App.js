import './App.css';
import React from "react";
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import {useDispatch, useSelector} from "react-redux";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";

function App() {
    const dispatch = useDispatch()
    const {user, isLogIn} = useSelector(({authReducer}) => {
        return {
            user: authReducer.user,
            isLogIn: authReducer.isLogIn
        }
    })

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header isLogIn={isLogIn} user={isLogIn ? user.name : ""}/>
                <main className="content">
                    <AppRouter isLogIn={isLogIn}/>
                </main>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}


export default App
