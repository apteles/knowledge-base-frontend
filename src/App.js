import React from 'react';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/global';
import './config/reactotron';
import Routes from './routes';
import { store } from './store';

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyles />
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
