import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './State_Management/store';

import './styles/index.css';
import App from './components/App';

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

