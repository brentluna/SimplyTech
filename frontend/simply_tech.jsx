import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  Modal.setAppElement(document.body);
  if (window.currentUser) {
    const initialState = {session: {currentUser: window.currentUser, errors: []}};
    store = configureStore(initialState);
  } else {
    store = configureStore();
  }

  const rootEl = document.getElementById('root');
  window.store = store;


  ReactDOM.render(<Root store={store}/>, rootEl);
});
