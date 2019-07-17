import React from 'react';
import './index.css'
class Header extends React.Component{
render(){
  return(
    <nav class="nav-bar">
      <a href ="#"  class= "image1" ><img style ={{width:30}} src= "./assests/images/home.PNG" alt="home"/></a>
      <a href ="#" class= "image2" ><img style ={{width:30}} src= "./assests/images/network.png" alt="contact"/></a>
    </nav>
  );
}
}
export default Header;
