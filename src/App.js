import React, { Component } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { loadMovies } from './actionCreators';

import Header from './components/Header';

import './App.css';

store.dispatch(loadMovies());

class App extends Component {

  render() {
		const { children } = this.props;
    return (
      <Provider store={store}>
          <div className="App">
            <Header />
            <div>
              {children}
            </div>
          </div>
      </Provider>
    );
  }
}

export default App;