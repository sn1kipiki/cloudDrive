import React from 'react';
import ReactDOM from 'react-dom/client';
import {ColorSchemeScript, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import './assets/styles/global.scss';
import App from './App';
import {Provider} from "react-redux";
import {store} from "./reducers/index.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <MantineProvider >
            <App />
        </MantineProvider>
    </Provider>
);

