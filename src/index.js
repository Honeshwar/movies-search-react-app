import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './State_Management/store';

import './styles/index.css';
import App from './components/App';

// 
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOnbyFa69DY8Lif84uT_8CDjSDLW_XSYA",
  authDomain: "movie-hunt-653c0.firebaseapp.com",
  projectId: "movie-hunt-653c0",
  storageBucket: "movie-hunt-653c0.appspot.com",
  messagingSenderId: "326616170383",
  appId: "1:326616170383:web:7501f67553f9c35ab155fa",
  measurementId: "G-WC0VB9QPCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// 
function P(props){
  console.log(props.children);
  return <Provider store={props.store} dispatch={props.store.dispatch}> 
           {props.children}
         </Provider>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Provider store={store}> {/*optimal way than props passing,avoid props drilling,directly use any components */}
      {/* <App />
    </Provider> */}
    <P store={store}>
      <App/>
    </P>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

