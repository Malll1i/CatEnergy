import React from "react";
import Map from "../../pic/location.svg"
import FooterLogo from "../../pic/footer-logo 2.svg"
import FooterLinks from "../../pic/social_icons.svg"

function Footer (){
    return(
        <div className="footer">
            <div className="map">
                <img src={Map}></img>
            </div>

            <div className="footer-links">
                <img src={FooterLogo}></img>
                <img src={FooterLinks}></img>
            </div>
        </div>
    )
}

export default Footer