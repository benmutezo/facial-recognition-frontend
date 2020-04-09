import React from 'react';
import Tilt from "react-parallax-tilt"
import "./Logo.css"
import Sword from "./sword.png"
const Logo = () => {
    return (
        <div>
            <Tilt className="br4 shadow-5 tilt ma2" style={{ height: '150px', width: "150px" }}>
                <div >
                    <img className="pt4" alt="sword" src={Sword}></img>
                </div>
            </Tilt>
        </div>

    )
}
export default Logo;