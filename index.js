import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// 2. render your new App component from index.js
//3. create a property of your choosing on App in index.js. The value for that property should be a string. Pass in your props to App and replace your original <h1> text with the property value you just passed in to the component. 
ReactDOM.render(
    <App name= "Bart" city= "Springfield" text= "Eat my shorts"/>, document.getElementById('root')
);