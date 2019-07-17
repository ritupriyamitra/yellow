import React from 'react';
import Header from '../Header';
import Body from '../Body';
import List from '../List';
import Footer from '../Footer';
import MenuBar from '../MenuBar';
import {Switch,Route} from 'react-router-dom';
import Main from '../Main';
import './index.css';
class DashBoard extends React.Component{
  render(){

    return(
      <>
      <header class="header-display">
        <Header/>
      </header>
      <advert class="menu-display">
        <nav>
          <MenuBar/>
        </nav>
      </advert>
      <main class="body-display">

        <Switch>
        <Route exact path="/" component ={Body} />
        <Route exact path="/List" component ={List} />
        </Switch>
      </main>
      <footer class="footer-display">
        <Footer/>
      </footer>
      </>
    );
  }

}
export default DashBoard;
