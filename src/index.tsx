import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './App/App';

/**
 * Since I haven't provided a template for the html-webpack-plugin, the root element must be injected manually as the first child
 * of the body. It needs to be the first child so that the react script has a hook to grab onto when using document.getElementById().
 */
const rootElement = () => {
    const root = document.createElement("div");
    root.id = "root";
    return root;
};

document.body.insertBefore(rootElement(), document.body.firstChild);

ReactDom.render(<App />, document.getElementById("root"));