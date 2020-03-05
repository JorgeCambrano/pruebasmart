import React, { Component } from 'react'
import Texto from '../components/texto';

class Home extends Component {
  render() {
    return (

      <div >
        
        <div class="row">

          <div class="mx-auto text-primary"><h1>  SMARTH FIELD<span class="badge badge-secondary"> New</span></h1></div>
         
        </div>
        
        <Texto/>
      </div>
      
    );
  }
}


export default Home;