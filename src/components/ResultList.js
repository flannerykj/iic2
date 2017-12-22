import React, { Component } from 'react';

class ResultList extends Component {
  render() {
    console.log(this.props.checks);
    const list = Object.keys(this.props.checks).map((key, i) => {
      const check = this.props.checks[key];
      return <div key={i} className={`message ${check.value==true?'is-success':'is-danger'}`}><div className='message-body'>{check.msg}</div></div>
    });
    return(
      <div>
        {list}
      </div>
    )
  }
}

export default ResultList;
