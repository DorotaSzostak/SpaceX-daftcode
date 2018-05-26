import React from 'react';
import LaunchItem from './LaunchItem';
import launches from '../assets/launches.json';



class MainList extends React.Component {

    render() {

        return (
            <div className="launchItem__wrapper">
               <LaunchItem />
               <LaunchItem />
               <LaunchItem />
               <LaunchItem />
               <LaunchItem />
               <LaunchItem />
            </div>
        )
    }

}

export default MainList;
