import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import './styles/css/animate.css';
import './styles/css/basic.css';
import './styles/css/blogs.css';
import './styles/css/layout.css';
import './styles/css/theme-colors/orange.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
