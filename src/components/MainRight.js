import React from 'react';
import launch from'../assets/launch.json';
import rocket from '../assets/rocket.json';
import launchSite from '../assets/launch_site.json';

class MainRight extends React.Component {
  render(){
    return (
      <div className="main__right">
          <div className="main__details">
          <h4 className="main__details--title">DETAILS</h4>
          <p className="main__details--text">{launch.details}</p>
          </div>
          <div className="main__details">
          <h4 className="main__details--title">ROCKET</h4>
          <div className="column">
          <ul className="column__list">
          <li className="column__list--item">NAME: <span className="column__list--itemDetails">{rocket.name}</span></li>
          <li className="column__list--item">COMPANY: <span className="column__list--itemDetails">{rocket.company}</span></li>
          <li className="column__list--item">HEIGHT: <span className="column__list--itemDetails">{rocket.height.meters} m</span></li>
          <li className="column__list--item">DIAMETER: <span className="column__list--itemDetails">{rocket.diameter.meters} m</span></li>
          <li className="column__list--item">MASS: <span className="column__list--itemDetails">{rocket.mass.kg} kg</span></li>
          </ul>
          <ul className="column__list">
          <li className="column__list--item">FIRST FLIGHT: <span className="column__list--itemDetails">{rocket.first_flight}</span></li>
          <li className="column__list--item">COUNTRY: <span className="column__list--itemDetails">{rocket.country}</span></li>
          <li className="column__list--item">SUCCESS RATE: <span className="column__list--itemDetails">{rocket.success_rate_pct}</span></li>
          <li className="column__list--item">COST PER LAUNCH: <span className="column__list--itemDetails">{rocket.cost_per_launch}</span></li>
          </ul>
          </div>
          <p className="main__details--text">{rocket.description}</p>
          </div>
          <div className="main__details">
          <h4 className="main__details--title">LAUNCH PAD</h4>
          <div className="column">
          <ul className="column__list">
          <li className="column__list--item">NAME: <span className="column__list--itemDetails">{launchSite.full_name}</span></li>
          </ul>
          <ul className="column__list">
          <li className="column__list--item">LOCATION: <span className="column__list--itemDetails">{launchSite.location.name}, {launchSite.location.region}</span></li>
          </ul>
          </div>
          <p className="main__details--text">{launchSite.details}</p>
          </div>
      </div>
    )
  }
}

export default MainRight;
