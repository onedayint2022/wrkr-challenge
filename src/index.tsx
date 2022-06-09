import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMClient from 'react-dom/client';
import './global.css';
import { Provider } from 'react-redux';
import store from './Store/stateManager';
import MainLayout from './Layout/MainLayout';

// get root ele
const rootEle = document.getElementById('root');

// render
const rootContainer = (
    <React.StrictMode>
        <Provider store={store}>
            <MainLayout />
        </Provider>
    </React.StrictMode>
);
if (rootEle == null) {
    ReactDOM.render(rootContainer, document.getElementById('root'));
} else {
    const root = ReactDOMClient.createRoot(rootEle);
    root.render(rootContainer);
}
