import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <>
    <div className="preloader">
                <div>
                    <div className="preloader-body">
                        <div className="loader"><span className="block-1"></span><span className="block-2"></span><span
                            className="block-3"></span><span className="block-4"></span><span className="block-5"></span><span
                                className="block-6"></span><span className="block-7"></span><span className="block-8"></span><span
                                    className="block-9"></span><span className="block-10"></span><span className="block-11"></span><span
                                        className="block-12"></span><span className="block-13"></span><span className="block-14"></span><span
                                            className="block-15"></span><span className="block-16"></span></div>
                    </div>
                </div>
            </div>
    <App />
    </>
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();
