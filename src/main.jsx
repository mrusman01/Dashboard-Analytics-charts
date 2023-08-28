import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

import App from './App';
import ContextAPI from './utils/ContextAPI';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <ContextAPI>
                <App />
            </ContextAPI>
        </BrowserRouter>
    </React.StrictMode>,
);
