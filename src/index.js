import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

const root = document.createElement('root');
document.body.appendChild(root);
ReactDOM.createRoot(root).render(<App />);
