import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store';
import './index.css';
import { App } from './App';

const theme = createTheme({
    palette: {
        primary: {
            main: '#A5A58D',
        },
        secondary: {
            main: '#F9F2E8',
        },
    },
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <SnackbarProvider maxSnack={3}>
                        <PersistGate loading={null} persistor={persistor}>
                            <App />
                        </PersistGate>
                    </SnackbarProvider>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.Fragment>
);
