import React from 'react';
import CelestialIndex from '../celestial/CelestialIndex';

const Splash = (props) => {
    return (
        <div>
            <CelestialIndex token={props.sessionToken} />
        </div>
    )
}

export default Splash;