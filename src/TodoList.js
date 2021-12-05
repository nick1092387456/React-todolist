import React, { Component, Fragment } from 'react'

class ToodList extends Component {

  constructor(prop) {
    super(prop)
    this.state = {
      inputValue: '',
      list: [1, 2, 3]
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
          <button
            onClick={this.handleBtnClick.bind(this)}
          >送出</button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return <li>{item}</li>
            })
          }
        </ul>
      </Fragment>
    )
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    })
  }

}

export default ToodList
