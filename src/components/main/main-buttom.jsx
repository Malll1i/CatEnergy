import React from "react";
import Module0 from "../../pic/module.svg"
import Module1 from "../../pic/module1.svg"

function MainButtom () {
    return(
        <div className="main-buttom">
            <h1 className="main-buttom text">Живой пример</h1>
            <div className="main-buttom-wrapper">
                <div className="main-buttom-info">
                    <h2>Борис сбросил 5 кг за 2 месяца, просто заменив свой
                    обычный корм на Cat Energy Slim. Отличный результат 
                    без изнуряющих тренировок! При этом он не менял своих 
                    привычек и по-прежнему спит по 16 часов в день. </h2>

                    <div className="main-buttom-info-stats">
                        <img src={Module1}></img>
                        <img src={Module0} className="main-buttom-info-stats second"></img>
                    </div>
                    <div className="main-buttom-info-cost">
                        <h1>Затраты на питание:</h1>
                        <span>sasaas</span>
                        <h1>15 000 РУБ.</h1>
                    </div>
                </div>

                <div className="img-big-cat"><input type="range" min="1" max="100" value="50" class="slider" id="myRange"></input></div>
            </div>
        </div>
    )
}

export default MainButtom