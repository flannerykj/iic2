import React, { Component } from 'react';
import actions from '../actions';
import {connect} from 'react-redux';
import ResultList from '../components/ResultList';
import check from '../utilities/checks';

class ResultsContainer extends Component {
  render() {
    const checks = check(this.props.ingredients.items);
    var isChowder = true;
    Object.keys(checks).map((key, i) => {
      if (checks[key].value == false) {
        isChowder = false;
      }
      return;
    });
    return(
      <div>
        <h1>Results</h1>
        {this.props.result.isActive==true?
            <div>
              <div className={`message ${isChowder==true?'is-success':'is-danger'}`}>
                <div className='message-header'>
                  {isChowder==true?'Its a Chowder!':'Not a chowder'}<button className="delete" onClick={this.props.resetCheck} aria-label="delete"></button>
                </div>
              </div>
              <ResultList checks={checks}/>
            </div>
            :
            <div>
              <div className='message is-info'>
                <div className="message-body">
                  Click "Run Check" to show results.

              <button className='button is-success' onClick={this.props.runCheck}>Run Check</button>
                </div>
              </div>
            </div>
            }
    </div>
    )
  }
}
var mapStateToProps = function(store) {
  return {
    result: store.result,
    ingredients: store.ingredients
  }
}
var mapDispatchToProps = function(dispatch){
  return {
    runCheck: function(){dispatch(actions.runCheck());},
    resetCheck: function(){dispatch(actions.resetCheck())}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsContainer);
