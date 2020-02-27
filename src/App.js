import React, { Component } from 'react';
import Home from './pages/Home';
import header from './components/header';





class App extends Component {
  render(){
  return (
    <div className="App">
      <Home/>
      <header/>
     
    </div>
  );
}
}
export default App;
