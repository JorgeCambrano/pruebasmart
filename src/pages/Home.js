import React, { Component } from 'react'
import Imag1 from './../Imagenes/FotosS/des.jpg';
import Imag3 from './../Imagenes/FotosS/fracc.jpg';
import Carrusel from './carrusel';
import Registro from './../contactos/registro';



class Home extends Component {


  registrarse(){
    this.state({
      counter: this.state.counter=Registro
    })
  }

  render() {
    return (
      <div>
        <hr></hr>
        <hr></hr>
        <div class="row">
          <div class="jumbotron">
            <h1>“¡LA MEJOR INVERSION EN TU NECEGOCIO ES CON NOSOTROS!".</h1>
            <p class="text-justify center"> Ventas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
            <p><a href="#" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>
            <button onClick= {()=>{this.registrarse()}}>Registrate con nosotros  </button>
           

            <div>
            </div>
            <div class="container-fluid text-center"/>
               <h3 class="margin">¿Que te ofrecemos?</h3>
            <div class="row">
              <div class="col-sm-4">
                <p >•	Optimización  de trabajo laboral de campo</p>
                <img src={Imag3} class="img-responsive margin" alt="Image" />
              </div>

              <div class="col-sm-6">
                <p>•Gestión fiable de contabilidad .</p>
                <img src={Imag1} class="img-responsive margin" alt="Image" />
              </div>

            </div>
            <hr></hr>
            <Carrusel />

          </div>
        </div>
      </div>

    );

  }
}


export default Home;