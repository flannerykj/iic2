import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

import Navbar from './components/Navbar';
import IngredientsContainer from './containers/IngredientsContainer';
import ResultsContainer from './containers/ResultsContainer';


import './sass/main.scss';

export class App extends React.Component {


render() {
    return (
      <Provider store={store}>
        <div className='app-container'>
          <div className='wrapper'>
            <Navbar />
            <div className='columns page-content'>
              <div className='column'>

                <IngredientsContainer />
              </div>
              <div className='column'>
                <ResultsContainer />
              </div>
            </div>
          </div>
        </div>
      </Provider>
        );
    }
};

ReactDOM.render(<App/>, document.getElementById("root"))
