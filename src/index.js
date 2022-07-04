import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux'
import { rootReducer } from './Reducer';
import { composeWithDevTools } from "redux-devtools-extension";
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';




// QR data ..................................................
const course_name = localStorage.getItem("course_name")
const department_name = localStorage.getItem("department_name")
const first_name = localStorage.getItem("first_name")
const last_name = localStorage.getItem("last_name")
const email = localStorage.getItem("email")
const name = first_name  + " " + last_name

// Making store persist ................................................
const persistConfig = {
  key: "root",
  storage : storage
};
const persist_r = persistReducer(persistConfig,rootReducer );
const store = createStore(persist_r, composeWithDevTools() );
const persist_s = persistStore(store)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persist_s}>
    <App  text = {JSON.stringify({
              name: name,
              email: email,
              course_name: course_name,
              department_name: department_name,

              Date: new Date().toLocaleString(),
              

              
            
            })} />
            </PersistGate>
</Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();