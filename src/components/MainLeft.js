import React from 'react';
import launch from'../assets/launch.json';
import {format, distanceInWordsToNow} from 'date-fns';

class MainLeft extends React.Component {
  render (){
    let launch_date_utc = format(launch.launch_date_utc, 'DD MMMM YYYY');
    return (
      <div className="main__left">
          <p className="main__left--date">{launch_date_utc}</p>
          <h1 className="main__left--title">IRIDIUM NEXT 5 LAUNCH</h1>
          <p className="main__left--timer">20 DAYS 11 HRS 34 MINS to START</p>
          <img className="main__left--patch" src={launch.links.mission_patch_small} alt="mission patch"/>
      </div>
    )
  }
}

export default MainLeft;
