import React from 'react';
import Image from '../assets/Sarah-King.png'

function Goals(props) {

    return (
        <div>
            <div>
                <img className="logo" src={Image} alt="Logo" />
            </div>
            <div className="buttons">
                <div className="violet">
                    Journal Entry
                </div>
                <div className="indigo">
                    Meditation
                </div>
                <div className="blue">
                    Reach Out to a Human
                </div>
                <div className="green">
                    Do Something Kind for Someone
                </div>
                <div className="yellow">
                    Sleep
                </div>
                <div className="orange">
                    Movement
                </div>
                <div className="red">
                    Budget
                </div>
            </div>
        </div>
    )
}

export default Goals;