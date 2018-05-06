import React from 'react';

class MainLeft extends React.Component {
  render (){
    return (
      <div className="main__left">
          <p className="main__left--date">07 JULY 2018</p>
          <h1 className="main__left--title">IRIDIUM NEXT 5 LAUNCH</h1>
          <p className="main__left--timer">20 DAYS 11 HRS 34 MINS to START</p>
          <img className="main__left--patch" src="https://images2.imgbox.com/f3/cd/Ub2z4QHa_o.png" alt="mission patch"/>
      </div>
    )
  }
}

export default MainLeft;
