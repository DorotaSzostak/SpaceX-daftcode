import React from 'react';
import Arrow from '../assets/arrow_pointer.png';
import launches from '../assets/launches.json'

class LaunchItem extends React.Component {

    render() {

        return (

                <div className="launchItem__block">
                    <div className="launchItem__dot"></div>
                        <div className="launchItem__content">
                            <div className="launchItem__date">12 May 2018</div>
                            <span className="launchItem__separator">
                                <img className="launchItem__separator__arrow" src={Arrow} />
                            </span>
                            <div className="launchItem__rocket">
                                <span className="launchItame__rocket__feature">Name:</span>
                                <span className="launchItem__rocket__value">Falcon 9 | </span>
                                <span className="launchItem__rocket__feature">Launch site:</span>
                                <span className="launchItem__rocket__value">Lorem ipsum</span>
                            </div>
                    </div>
                </div>

        )
    }

}

export default LaunchItem;
