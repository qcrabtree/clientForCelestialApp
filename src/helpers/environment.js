let APIURL = '';

switch (window.location.hostname) {
    case 'localhost' || '127.0.0.1':
        APIURL = 'http://localhost:3000/';
        break;
    case 'celestial-client.herokuapp.com':
        APIURL = 'https://celestial-server.herokuapp.com/';
        break;
    default:
}

export default APIURL

// let APIURL = '';

// switch (window.location.hostname) {
//     // this is the local host name of your react app
//     case 'localhost' || '127.0.0.1':
//         // this is the local host name of your API
//         APIURL = 'http://localhost:3000/';
//         break;
//     // this is the deployed react application
//     case 'celestial-client.herokuapp.com':
//         // this is the full url of your deployed API
//         APIURL = 'https://celestial-server.herokuapp.com/';
//         break;
//     default:
// }
