import React, { Component } from 'react';

class TextInput extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ''
    }
  }
  handleInputChange= (e) => {
    this.setState({
        input: e.target.value
      });
  }
  handleKeyUp = (e) => {
    if (e.keyCode == 13) {
      console.log(e.keyCode);
      this.props.onSubmit({text: this.state.input});
      this.setState({
        input: ''
      });
    }
  }
  render() {
    return(
      <div className='field'>
        <div className='control'>
          <input type='text' className='input' placeholder="Add ingredient and press enter" onKeyUp={this.handleKeyUp} onChange={this.handleInputChange} value={this.state.input}/>
        </div>
      </div>
    )
  }
}

export default TextInput;
