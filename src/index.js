// import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {
//     Navbar,
//     NavbarBrand,
// } from 'reactstrap';


// ReactDOM.render(<App />, document.getElementById('root'));

// class SiteBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {};
//     }

//     render() {
//         return (
//             <div>
//                 <Navbar color="faded" light expand="md">
//                     <NavbarBrand href="/">Celestial App</NavbarBrand>
//                 </Navbar>
//             </div>
//         );
//     }
// }

// export default SiteBar


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import './App.css'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
