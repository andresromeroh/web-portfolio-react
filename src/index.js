import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './assets/fonts/ionicons.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import dotenv from 'dotenv';

dotenv.config();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
