import React from 'react';

class Banner extends React.Component {
  render (){
    return(
      <section className="banner">
      <h3 className="banner__title">MISSION LINKS</h3>
          <button className="banner__button">REDDIT CAMPAIGN</button>
          <button className="banner__button">PRESSKIT</button>
          <button className="banner__button">MISSION VIDEO</button>
      </section>
    )
  }
}

export default Banner;
