import React from 'react';
import heroLogo from '../assets/space_x_logo_bw_centered.png';
import heroMoon from '../assets/moon.png';
import Button from './Button';
import launches from '../assets/launches.json';


class Hero extends React.Component {

    render() {

        return (

                <div className="hero">
                  <div className="hero__item">
                        <img className="hero__item--moon" src={heroMoon} alt="moon"/>
                        <img className="hero__item--logo"src={heroLogo} alt="SpaceX logo"/>
                        <h4 className="hero__item--text">Launches 2018</h4>
                        <div className="button__wrapper">
                            <Button buttonText="All rockets"/>
                            <Button buttonText="Falcon 9"/>
                            <Button buttonText="Falcon Heavy"/>
                            <Button buttonText="Dragon"/>
                        </div>
                    </div>
                </div>

        )
    }

}

export default Hero;
