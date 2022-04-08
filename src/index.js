import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "@mui/material/styles";
import {CONSTANTS} from "./constants/constants";
import {THEMES} from "./themes/themes";
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import {LocalizationProvider} from "@mui/lab";
import {CssBaseline} from "@mui/material";


const themeVariant =
    localStorage.getItem(CONSTANTS.AIDEN_TRUST_CLIENT_THEME_VARIANT_KEY) ?
        JSON.parse(localStorage.getItem(CONSTANTS.AIDEN_TRUST_CLIENT_THEME_VARIANT_KEY)) : 'dark';

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={themeVariant === 'light' ? THEMES.lightTheme : THEMES.darkTheme}>
                    <CssBaseline/>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <App/>
                    </LocalizationProvider>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
