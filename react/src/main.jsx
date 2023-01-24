import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Bar from './Bar';
import './index.css';

ReactDOM.createRoot(document.body).render(
	<React.StrictMode>
		<Bar />
		<App />
	</React.StrictMode>
);
