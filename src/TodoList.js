import React, { Component, Fragment } from 'react'

class ToodList extends Component {

  constructor(prop) {
    super(prop)
    this.state = {
      inputValue: '',
      list: []
    }
  }


  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>送出</button>
        </div>
        <ul value={this.state.list} >
          <li>吃飯</li>
          <li>睡覺</li>
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }


}

export default ToodList
