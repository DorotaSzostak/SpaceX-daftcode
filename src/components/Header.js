import React from 'react';



class Header extends React.Component {
  render (){
    return (
      <header className="header">
        <div className="header__arrow">
        <img className="header__arrow--pointer" src="arrow_pointer.png" alt="arrow"/>
        <span className="header__arrow--line"></span>
        <a className ="header__arrow--text" href="#">GO BACK</a>
        </div>
        <img className="header__logo" src="space_x_logo_bw_centered.png" alt="spacex logo"/>
      </header>
    )
  }
}

export default Header;
