import React from 'react';

class Footer extends React.Component {
  render (){
    return (
      <footer className="footer">
      <ul className="footer__nav">
      <li className="footer__nav--item">FOLLOW SPACEX |</li>
      <li className="footer__nav--item"><a href="#" className="footer__nav--link">TWITTER</a></li>
      <li className="footer__nav--item"><a href="#" className="footer__nav--link">YOUTUBE</a></li>
      <li className="footer__nav--item"><a href="#" className="footer__nav--link">FLICKR</a></li>
      <li className="footer__nav--item"><a href="#" className="footer__nav--link">INSTAGRAM</a></li>
      </ul>
      <ul className="footer__nav">
      <li className="footer__nav--item">2018 SPACE EXPLORATION TECHNOLOGIES CORP.</li>
      </ul>
      </footer>

    )
  }
}

export default Footer;
