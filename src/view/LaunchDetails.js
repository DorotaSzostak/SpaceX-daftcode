import React from 'react';
import Header from 'components/Header';
import Footer from 'components/Footer';
import MainLeft from 'components/MainLeft';
import MainRight from 'components/MainRight';
import Banner from 'components/Banner';

import './Home.sass';



class LaunchDetails extends React.Component {
  render (){
    return(
    <div className="container">
      <Header />
<section className="main">
<MainLeft />
<MainRight/>
</section>
<Banner />
<Footer />
</div>
);
  }

}

export default LaunchDetails;
