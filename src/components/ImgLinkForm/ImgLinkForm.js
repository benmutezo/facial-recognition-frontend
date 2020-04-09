import React from 'react';
import "./ImgLinkForm.css"
const ImgLinkForm = ({ onInPutChange, onPicsubmit }) => {

    return (
        <div>
            <div>
                <p className="f3 tc">{"Facial recognition app paste a url and see what happends..."}
                </p>
            </div>
            <div className="center">
                <div className="pa4 br3 shadow-5 form center">
                    <input onChange={onInPutChange} className="f4 pa2 w-70 " type="text" />
                    <button onClick={onPicsubmit} className="w-30 grow f4 link ph3 pv2 white bg-light-green btn">Detect</button>
                </div>
            </div>

        </div>
    )
}
export default ImgLinkForm;