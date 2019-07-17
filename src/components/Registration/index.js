import React from 'react';
import './index.css';
import InputTextBox from '../InputTextBox';
import {Switch,Router} from 'react-router-dom';
class Registration extends React.Component{
  constructor(props){
  super(props);
  this.state={
    name:'',
    username:'',
    password:'',
    describtion:''
  };
}
  registrationFormInputChange= (name,e) =>{

    this.setState({[name]: e.target.value});
    console.log("printing....");
    console.log(this.state);
  }
  onSubmitStateValue=(e)=>{
    /*e.preventDefault();
    this.props.router.push('/List');*/

  }
setName=(name)=>{
  this.setState({
    name:name
  });
}


  render(){
    return(
      <>

      <form class="form-border form-fonts-style" onSubmit={this.onSubmitStateValue}>
        <h4>Register Now</h4>
        <InputTextBox level="Name" type="text" valueChange={this.setName}/>
        User Id: <input type="text" value={this.state.username} onChange={(e)=>this.registrationFormInputChange("username",e)}/><br/>
        Password : <input type ="password" value={this.state.password} onChange={(e)=>this.registrationFormInputChange("password",e)}/><br/>
        Describtion:<textarea row="3" cols="3" value={this.state.describtion} onChange={(e)=>this.registrationFormInputChange("describtion",e)}></textarea><br/>
        Upload Introduction:<input type="file"/><br/>
        Gender :Male<input type ="radio" name="btn"/><br/>
        Female<input type ="radio" name="btn"/><br/>
        Others<input type ="radio" name="btn"/><br/>
        DeviceId: <input type="text"/><br/>
        Location Range:<input type="range"/><br/>
        <input type="Submit" onChange={this.registrationFormInputChange}/>
      </form>
      </>
    );
  }
}
export default Registration
