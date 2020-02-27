import React, { Component } from 'react';
import Home from './pages/Home';
import Header from './components/Header';




class App extends Component {
  render(){
  return (
    <div className="App">
      <Home/>
      <Header/>
     
    </div>
  );
}
}
export default App;
