import React from 'react';
import Particles from 'react-particles-js';

const particles = () => {
    return (
        <Particles className="Particles"
            params={{
                "particles": {
                    "number": {
                        "value": 30,
                        "density": {
                            enable: true,
                            value_area: 80
                        }
                    },

                    "size": {
                        "value": 2
                    },
                    "color": {
                        value: "#6196b3"
                    },
                },
                "interactivity": {
                    "events": {
                        "onhover": {
                            "enable": true,
                            "mode": "repulse"
                        }
                    }
                }
            }} />
    );

}

export default particles;