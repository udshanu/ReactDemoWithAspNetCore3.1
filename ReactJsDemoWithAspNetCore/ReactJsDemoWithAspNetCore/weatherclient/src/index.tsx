import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>,
//  document.getElementById('root')
//);

//// If you want your app to work offline and load faster, you can change
//// unregister() to register() below. Note this comes with some pitfalls.
//// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

//Create element using JSX.
//const element = <h1 className="testClass">Welcome to element episode of reactjs tutorial.</h1>;

//ReactDOM.render(element, document.getElementById("root"));

//const newElement = <h1 className="testClass">Render multiple elements</h1>;

//ReactDOM.render(newElement, document.getElementById("app"));

//const element = (
//    <div className="testClass">
//        <h1>Welcome to element episode of reactjs tutorial.</h1>
//        <h1>Render multiple elements in single root container</h1>
//    </div>
//);

//ReactDOM.render(element, document.getElementById("root"));


//Create element without using JSX.
//const element = React.createElement("h1", null, "Welcome to element episode of reactjs tutorial.");
//ReactDOM.render(element, document.getElementById("root"));

const element = React.createElement("div", { className: "testClass" },
    React.createElement("h1", null, "Welcome to element episode of reactjs tutorial."),
    React.createElement("h1", null, "Render multiple elements in single root container Using 'React.createElement()'"),
);

ReactDOM.render(element, document.getElementById("root"));

////////////////----------Note---------------///
//When we create element using JSX we need buble compliler to compile html code. 
//But if we create element without using JSX we do not need any complier.
//JSX code converted to JS code using buble compiler.
