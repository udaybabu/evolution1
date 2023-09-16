import React,{Component} from 'react'

class ButtonClick extends Component {
    constructor() {
       super();
      // this.myAction = this.myAction.bind(this);
    }
    myAction() {
        console.log(`It's clicked action`);
    }

    myAction1 = () => {
        console.log(`It's clicked action1`);
    }
    
    render() {
        return (
            <div>
              {/* <button onClick={this.myAction}>Action</button> */}
              <button onClick={() => this.myAction()}>Action</button>
            </div>
          ) 
    }
}

export default ButtonClick
