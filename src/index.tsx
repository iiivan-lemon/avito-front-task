import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import Main from './Main';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Routes from "./Routes";
import './fonts/DrukTextWide-Bold.woff';
import './fonts/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2';
import './fonts/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2'

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(<Provider store={store}><Routes /></Provider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
