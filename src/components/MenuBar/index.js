import React from 'react';

class MenuBar extends React.Component{
render(){
  return(
    <dl>
      <dt><a href ="#">HomePage</a></dt>
      <dd>Landing Page</dd>
      <hr/>
      <dt><a href ="#">Listen Audio</a></dt>
      <dd>Of Others</dd>
      <hr/>
      <dt><a href ="#">Parter Audio</a></dt>
      <dd>Can hear Now</dd>
    </dl>
  );
}
}
export default MenuBar;
