import React from 'react';
import './Footer.scss'
import vk from "../../assets/img/vk.png"
import facebook from "../../assets/img/facebook.png"
import twitter from "../../assets/img/twitter.png"
import instagram from "../../assets/img/instagram.png"
import telegram from "../../assets/img/telegram.png"

const Footer = () => {
    return (

        <footer className="footer">
            <div className="footer__contacts">
                <ul className="footer__contacts-list">
                    <li className="footer__contacts-list__item">Контакты</li>
                    <li className="footer__contacts-list__item">Доставка</li>
                    <li className="footer__contacts-list__item">Возврат</li>
                    <li className="footer__contacts-list__item">Вопрос-ответ</li>
                    <li className="footer__contacts-list__item">О нас</li>
                </ul>
            </div>
            <div className="footer__social">
                <ul className="footer__social-list">
                    <li className="footer__social-list__item"><a href="https://vk.com"><img src={vk} alt="vk" width={20}/></a></li>
                    <li className="footer__social-list__item"><a href="https://facebook.com"><img src={facebook} alt="facebook" width={20}/></a></li>
                    <li className="footer__social-list__item"><a href="https://twitter.com"><img src={twitter} alt="twitter" width={20}/></a></li>
                    <li className="footer__social-list__item"><a href="https://instagram.com"><img src={instagram} alt="instagram" width={20}/></a></li>
                    <li className="footer__social-list__item"><a href="https://telegram.com"><img src={telegram} alt="telegram" width={20}/></a></li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;