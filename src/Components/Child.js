import React, { Component } from 'react'

export class Child extends Component {
  constructor(props) {
    super(props)
  }

  childEventClick = (data) => {
    this.props.parentAction(data)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.childEventClick('ChildClick')}>ChildAction</button>
      </div>
    )
  }
}

export default Child
