import React from 'react';



class Header extends React.Component {
  render (){
    return (
      <header className="header">
<nav className="navigation">
<img className="navigation__arrow" src="arrow_pointer.png" alt="arrow"/>
<a className ="nagivation__link" href="#">GO BACK</a>
</nav>
<img className="header__logo" src="space_x_logo_bw_centered.png" alt="spacex logo"/>
</header>
    )
  }
}

export default Header;
