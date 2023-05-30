import React from 'react';
import reactDom from 'react-dom/client';
// import App from './App';
import IncDec from './IncDec';

const container = document.getElementById('root');

const root = reactDom.createRoot(container);

root.render(
    <React.StrictMode>
        <IncDec />
    </React.StrictMode>
);