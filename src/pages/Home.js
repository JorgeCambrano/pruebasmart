import React, { Component } from 'react'
import { BrowserRouter as Route, Switch } from 'react-router-dom';
import Registro from './../contactos/registro';
import Imag1 from './../Imagenes/FotosS/gestion.gif';
import Imag3 from './../Imagenes/FotosS/optimi.gif';
import Imag4 from './../Imagenes/FotosS/mapa.gif';
import Carrusel from './carrusel';
import Mapa from '../../src/mapa/mapa';
import Info from '../pages/info';

class Home extends Component {



  render() {
    return (
      <div >
        <hr></hr>
        <div class="row">
          <div class="jumbotron">
          <h1>“¡LA MEJOR INVERSIÓN EN TÚ NEGOCIO ES CON NOSOTROS. QUE LA TECNOLOGIA TRABAJE POR TI!".</h1>
            <p class="text-justify center"> Ventas de terrenos, con gestion de control de manera sistematizado en información
                        detallada del terreno, muestra de precios, vista de ubicación y urbanización.</p>
            <p><a href="/registro" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>
            

            <div>
            </div>
            <div class="container-fluid text-center"/>
            <div class="p-2 mb-1 bg-dark text-success text-center"><h1> ¿QUE TE OFRECEMOS?    </h1></div>
            <div class="row">
              <div class="col-sm-4 text-center">
          
                <img src={Imag3} class="img-rounded" alt="Login" width="300" height="300" />
                <h1 className= "display-6" >•	Optimización  de trabajo laboral </h1>
              </div>

              <div class="col-sm-4 text-center">
                
                <img src={Imag1} class="img-rounded" alt="Login" width="300" height="300"  />
                <h1 className= "display-6">•Gestión fiable de contabilidad .</h1>
              </div>
              <div class="col-sm-4" text-center>
               
                <img src={Imag4} class="img-rounded" alt="Login" width="300" height="280" />
                <h1 className= "display-6">•	El uso aplicable de (Google Maps) </h1>
              </div>

              

            </div>
            <hr></hr>
            <Carrusel />
            <br/>
            <div class="p-2 mb-1 bg-dark text-success text-center"><h1> VEN Y CONÓCENOS   </h1></div>
            <hr></hr>
            <Mapa/>
            <Info/>

            <Switch>
                      
               <Route path= "/registro" exact component={Registro}/>
                       
            </Switch>
          

          </div>

          
        </div>
      </div>

    );

  }
}


export default Home;