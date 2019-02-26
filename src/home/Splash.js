import React from 'react';
import CelestialIndex from '../celestial/CelestialIndex';

const Splash = (props) => {
    return (
        <div className ="SplashDiv">
            <CelestialIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;