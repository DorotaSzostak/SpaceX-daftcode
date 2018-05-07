import React from 'react';

class MainRight extends React.Component {
  render(){
    return (
      <div className="main__right">
          <div className="main__details">
          <h4 className="main__details--title">DETAILS</h4>
          <p className="main__details--text">Deserunt adipisci te qui. Te soleat omnium fuisset vim. Clita aperiam his in. Libris pertinax nec et, diam veritus ponderum ut eam, et meliore interesset sit. Pri nibh errem an, ea eos conceptam dissentiet, everti nostrud sea et. Nam stet similique complectitur id, qui meis persecuti no, numquam argumentum cu nec. Populo nostrud posidonium eam cu, fuisset apeirian philosophia has eu, ex cum oblique accumsan similique.</p>
          </div>
          <div className="main__details">
          <h4 className="main__details--title">ROCKET</h4>
          <div className="column">
          <ul className="column__list">
          <li className="column__list--item">NAME:</li>
          <li className="column__list--item">COMPANY:</li>
          <li className="column__list--item">HEIGHT:</li>
          <li className="column__list--item">DIAMETER:</li>
          <li className="column__list--item">MASS:</li>
          </ul>
          <ul className="column__list">
          <li className="column__list--item">FIRST FLIGHT:</li>
          <li className="column__list--item">COUNTRY:</li>
          <li className="column__list--item">SUCCESS RATE:</li>
          <li className="column__list--item">COST PER LAUNCH:</li>
          </ul>
          </div>
          <p className="main__details--text">Deserunt adipisci te qui. Te soleat omnium fuisset vim. Clita aperiam his in. Libris pertinax nec et, diam veritus ponderum ut eam, et meliore interesset sit. Pri nibh errem an, ea eos conceptam dissentiet, everti nostrud sea et.</p>
          </div>
          <div className="main__details">
          <h4 className="main__details--title">LAUNCH PAD</h4>
          <div className="column">
          <ul className="column__list">
          <li className="column__list--item">NAME:</li>
          </ul>
          <ul className="column__list">
          <li className="column__list--item">LOCATION:</li>
          </ul>
          </div>
          <p className="main__details--text">Deserunt adipisci te qui. Te soleat omnium fuisset vim. Clita aperiam his in. Libris pertinax nec et, diam veritus ponderum ut eam, et meliore interesset sit.</p>
          </div>
      </div>
    )
  }
}

export default MainRight;
