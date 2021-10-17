import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PageLoader from './Components/PageLoader'

ReactDOM.render(
    <React.StrictMode>
        <>
            <PageLoader />
            <App />
        </>
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals();
