import React, { Component } from 'react'

 class ToDo extends Component {

    

    constructor(props){
        super(props);




        this.state=  {
            toDoList:[],
            newTask:""
        }

        console.log("constructor is called");
        
    }
    
    handleChange = (event) => {
        this.setState({
            newTask:event.target.value
        })
    }

    handleSubmit = (event) => {
        //then I have to add the  newTask to the list 
        this.setState({
            toDoList:[...this.state.toDoList , this.state.newTask],
            newTask:""
        })
    }

    deleteThatTask = (index , event) => {

        let filteredArray = this.state.toDoList.filter((currentTask , currentIndex) => {
            if(currentIndex === index){
                //then I have to remove that element from the list 
                return false;
            }
            else{
                return true;
            }
        });

        // now update the state 
        this.setState({
            toDoList:filteredArray
        })

    }


    componentDidMount(){
        console.log("Component Mounted");
        
    }

    componentDidUpdate(prevProps, prevState){
        console.log("Component  Updated");
        
    }

    
    componentWillUnmount(){
        console.log("component un-mounted");
        
    }




  render() {

    let {count , setCount} = this.props;


    console.log("render method is called")

    console.log(this.state.toDoList);
    return (
      <div>
        <input type="text" 
            value={this.state.newTask}
            onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>Submit</button>

        <div>
            <ul>
            {this.state.toDoList.map((currentTask , index) => {
                return (
                    <li key={index}>
                        {currentTask}
                        <button onClick={() => {
                            this.deleteThatTask(index)
                            setCount(count - 1);
                        }}>Delete</button>
                    </li>
                )
            })}
            </ul>
        </div>
    </div>

    )
  }
}


export default ToDo
