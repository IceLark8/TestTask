import React from 'react';
import { Button } from 'antd';
import { Provider } from 'react-redux';
import store from './configureStore';
import './App.css';
import SearchForm from './components/Form/Form'


const App = () => (
  <Provider store={store}>
    <div className="App">
      <SearchForm/>
    </div>
  </Provider>
);

export default App;