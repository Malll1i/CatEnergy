import React from "react";
import logo from "../../pic/logo-desktop.svg"
import basket from "../../pic/index-can.svg"

function Headertop (){
    return(
        <div className="header-top">
            <div className="header-top-left-page">
                <img src={logo}></img>
                <div className="header-top-left-page-text">
                    <h1>Функциональное<br></br>
                    питание для котов</h1>
                    <h4>Занялся собой? Займись котом!</h4>
                    <button>ПОДОБРАТЬ ПРОГРАММУ</button>
                </div>
            </div>
            <div className="header-top-right-page">
                <div className="header-top-right-page-links">
                    <a>ГЛАВНАЯ</a>
                    <a>КАТАЛОГ ПРОДУКЦИИ</a>
                    <a>ПОДБОР ПРОГРАММЫ</a>
                </div>
            <img src={basket}></img>
            </div>
        </div>
    )
}


export default Headertop