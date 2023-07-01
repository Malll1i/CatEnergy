import React from "react";
import Cat from "../../pic/cat_back.svg";
import Puma from "../../pic/cat_back (1).svg";

function HeaderButtom (){
    return(
        <div className="header-buttom">

            <div className="header-buttom-left">
                <div className="header-buttom-info">
                    <div className="header-buttom-row">
                        <img src={Cat}></img>
                        <h1>ПОХУЙДЕНИЕ</h1>
                    </div>
                    <p>Ваш кот весит больше собаки и почти утратил способность 
                        лазить по деревьям? Пора на диету! Cat Energy Slim поможет 
                        вашему питомцу сбросить лишний вес.</p>
                    <h2>КАТАЛОГ SLIM  →</h2>
                </div>
            </div>

            <div className="header-buttom-right">
                <div className="header-buttom-info">
                    <div className="header-buttom-row">
                        <img src={Puma}></img>
                        <h1>НАБОР МАССЫ</h1>
                    </div>
                    <p>Заработать авторитет среди дворовых котов и даже собак?
                        Серия Cat Energy Pro поможет вашему коту нарастить 
                        необходимые мышцы!</p>
                    <h2>КАТАЛОГ SLIM  →</h2>
                </div>
            </div>
        </div>
    )
}

export default HeaderButtom