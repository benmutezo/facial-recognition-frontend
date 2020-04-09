import React from 'react';
import "./FaceReco.css"
const FaceReco = ({ imageURL, box }) => {
    const style = {
        top: box.topRow,
        right: box.rightCol,
        bottom: box.bottomRow,
        left: box.leftCol

    }
    return (
        <div className="center ma">
            <div className="absolute pt3">
                <img id="inputImage" alt="pic" width="500px" height="auto" src={imageURL} />
                <div className="bounding-box" style={style}></div>
            </div>
        </div>

    )
}
export default FaceReco;