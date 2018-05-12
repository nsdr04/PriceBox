import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Pricebox from './Pricebox';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Pricebox/>, document.getElementById('root'));
registerServiceWorker();
