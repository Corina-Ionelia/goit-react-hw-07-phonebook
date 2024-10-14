import React from 'react';
import ReactDOM from 'react-dom/client'; // pentru React 18
import { Provider } from 'react-redux';
import store from './redux/store'; // importăm store-ul
import App from './App'; // componenta principală

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( <
    Provider store = { store } >
    <
    App / >
    <
    /Provider>
);