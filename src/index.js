import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//example.js is our live clss example
//import App from './examples.js'

//App.js is default app it has nothing
//import App from './App';

//UseState.js got example of useState
import App from './UseState';

//todoState.js got example of useState in TODO App
//import App from './todoState';

//Use-Effect.js got example of UseEffect
//import App from './Use-Effect';

//below is the example of useContext
//import App from './UseContext-Components/NoteApp'

//the below app got example of custome hook we made to get Mouse position
//import App from './custom-hooks/mousePosition'


import reportWebVitals from './reportWebVitals';



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
