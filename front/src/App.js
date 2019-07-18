import React from 'react';
// import logo from './logo.svg';
import './App.css';
class App extends React.Component {
  constructor(props){
  super(props)
  this.state={
    list:[]
  }
  }
   async componentWillMount(){
     try{
    const response = await fetch('http://localhost:8080/contacts/list')
    const text = await response.json()
    this.setState({list:text})
    console.log("we got a response!!",this.state.list)
     }
     catch(err){
       
     }
   }
   render(){
     return(<div>

     </div>)
   }
    
}
export default App;
