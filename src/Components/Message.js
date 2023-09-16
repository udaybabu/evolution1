import React, { Component } from 'react'

export class Message extends Component {
    constructor(props){
        super(props);
        this.state = {
            msg: 'Hello naveen'
        }
        this.state = {
            count: 0
        }
    }

     clickHandler = () =>{
        this.setState ({
         msg: 'Bye Naveen!'
        },() => {
         console.log('Data after is:', this.state.msg);
        });
        console.log('Data before is:', this.state.msg);
     }

     increment = () => {
        this.setState((preState,props) =>{
        return   {count: preState.count+1 }
        },() =>{
            console.log('Value is',this.state.count);
        })
     }

     increment5times = () => {
      this.increment();
      this.increment();
      this.increment();
      this.increment();
      this.increment();
     }

  render() {
    const {name,place} = this.props;

    return (
      <div>
        <h2>Hello {name} from {place}</h2>
        <h2>{this.state.msg}</h2>
        <button onClick={this.clickHandler}>Change Name</button>
        <h2>{this.state.count}</h2>
        <button onClick={this.increment5times}>ClickToIncrese</button>
      </div>
    )
  }
}

export default Message
