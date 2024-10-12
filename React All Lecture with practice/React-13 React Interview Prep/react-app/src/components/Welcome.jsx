import React, { Component } from 'react'

class Welcome extends Component {

    //declaring the state in class based component using state property directlly 

    // state = {
    //     count : 0
    // }

    constructor(props){
        super(props);

        //Access the props directlly with name props 
        console.log("props from the constructor " , props);
        

        //second way to declare the state in the class based component 
        this.state = {
            count : 0
        }
    }


    handleIncrement = () => {
        this.setState({
            count:this.state.count+1
        })
    }

    handleDecrement = () => { 
        this.setState({
            count:this.state.count-1
        })
    }

  render() {

    // but if I want to access the props inside the render method then I have to use this.props 
    // this represent the current component that is Welcome

    console.log("props from render method " , this.props);
    


    return (
      <div>
        <h2>Count : {this.state.count}</h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    )
  }
}


export default Welcome
