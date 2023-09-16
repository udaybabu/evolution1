import React, { Component } from 'react'
import Child from './Child'
export class ParentData extends Component {
  constructor() {
    super()
  }
   childDataHandler = (data) => {
    console.log('This data is comming from child:',data);
  }  
  render() {
    return (
      <div>
        <Child  parentAction={(data) => this.childDataHandler(data)} />
      </div>
    )
  }
}

export default ParentData
