import React, { Component } from 'react';
import Header from './components/Inicio/Header';
import './pages/home.css';
import Menuprincipal from './pages/Menuprincipal';
import registro from './contactos/registro';
import Menusecundario from './pages/Menusecundario';

class App extends Component {
  render() {

    return (

      <div className="App">
        
        <Header/> 

      </div>
      //<Header/> <Menusecundario/>
    );
  }
}
export default App;
