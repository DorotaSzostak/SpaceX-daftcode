import React from 'react';
import Footer from 'components/Footer';
import Hero from 'components/Hero';
import MainList from 'components/MainList';

class LaunchesList extends React.Component {
  render (){
    return(
      <div>
      <Hero/>
      <MainList/>
      <Footer/>
      </div>
    )
}
}
export default LaunchesList;
