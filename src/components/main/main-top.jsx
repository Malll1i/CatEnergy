import React from "react";
import Group1 from "../../pic/Group 1.svg"
import Group2 from "../../pic/Group 2.svg"
import Group3 from "../../pic/Group 3.svg"
import Group4 from "../../pic/Group 4.svg"

function MainTop (){
    return(
        <div className="main-top">
            <h1>Как это работает</h1>
            <div className="containers">
                <div className="containers item1">
                    <img src={Group1}></img>
                    <p>Функциональное питание
                    содержит только полезные
                    питательные вещества.</p>
                </div>

                <div className="containers item2">
                    <img src={Group2}></img>
                    <p>Выпускается в виде порошка, 
                    который нужно лишь залить 
                    кипятком и готово.</p>
                </div>

                <div className="containers item3">
                    <img src={Group3}></img>
                    <p>Замените один-два приема 
                    обычной еды на наше 
                    функциональное питание.</p>
                </div>

                <div className="containers item4">
                    <img src={Group4}></img>
                    <p>Уже через месяц наслаждайтесь 
                    изменениями к лучшему 
                    вашего питомца!</p>
                </div>
            </div>
        </div>
)
}

export default MainTop