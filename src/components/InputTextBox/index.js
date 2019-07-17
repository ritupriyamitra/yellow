import React from 'react';
class InputTextBox extends React.Component{
  constructor(props){
    super(props);
    this.state={
      value:this.props.value?this.props.value:''
    };
  }


  handleChange = (event) =>{
    this.setState({
      value:event.target.value
    },()=>{
      this.props.valueChange(this.state.value);
    });


  }

  render(){
    return(

    <div>{this.props.level}:<input type={this.props.type} onChange={this.handleChange}/></div>

    );
  }

}
export default InputTextBox;
