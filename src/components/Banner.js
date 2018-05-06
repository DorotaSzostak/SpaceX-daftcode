import React from 'react';

class Banner extends React.Component {
  render (){
    return(
      <section className="banner">
      <img className="banner__image" src="rocket.png" alt="launching rocket"/>
      <h3 className="banner__title">MISSION LINKS</h3>
      <div className="banner__button">
          <button className="banner__button--item">REDDIT CAMPAIGN</button>
          <button className="banner__button--item">PRESSKIT</button>
          <button className="banner__button--item">MISSION VIDEO</button>
      </div>
      </section>
    )
  }
}

export default Banner;
