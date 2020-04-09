import React from 'react';

const Welcome = ({ name, entries }) => {
    const hours = new Date().getHours()
    let msg;
    if (hours < 12 && hours >= 4) {
        msg = "Good morning"
    } else if (hours >= 12 && hours <= 18) {
        msg = "Good afternoon"
    } else {
        msg = "Good evening"
    }
    return (
        <div className=" white f3 tc">
            <div>  <p>{`${msg}, ${name}! You have submited`}</p>
            </div>
            <p> {`${entries} times.`}</p>
        </div>

    )
}
export default Welcome;