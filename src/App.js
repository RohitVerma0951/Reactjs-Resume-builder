import React, { Component } from 'react';
import './App.css';
import LeftForm from './containers/LeftForm/LeftForm';
import RightForm from './containers/RightResume/RightResume'

class App extends Component {

  state={
    name:null, 
    email:null,
    add1:null,
    mobile:null,
    zip:null,
    add2:null,
    ddlValue:null
  }

  selectHandler = (event,type) =>{
    this.setState({ddlValue:event.target.value});
  }

  tbClickHandler = (event,type) => {
    console.log(type);
    if(type === "name")
    this.setState({name:event.target.value});

    else if(type === "email")
    this.setState({email:event.target.value});
    
    else if(type === "address1")
    this.setState({add1:event.target.value});

    else if(type === "mobile")
    this.setState({mobile:event.target.value});
    
    else if(type === "zip")
    this.setState({zip:event.target.value});

    else if(type === "address2")
    this.setState({add2:event.target.value});
  }

  render() {
    return (
      <div>
        <LeftForm tbClickHandler={this.tbClickHandler} select={this.selectHandler}/>
        <RightForm 
          name={this.state.name} 
          email={this.state.email}
          mobile={this.state.mobile} 
          zip={this.state.zip}
          ddlValue={this.state.ddlValue}
          add1={this.state.add1}
          add2={this.state.add2}/>
      </div>
    );
  }
}

export default App;
