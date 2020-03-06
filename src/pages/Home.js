import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Imag1 from './../Imagenes/FotosS/des.jpg';
import Imag3 from './../Imagenes/FotosS/fracc.jpg';
import Carrusel from './carrusel';



class Home extends Component {

  render() {
    return (
      <div >
        <hr></hr>
        <hr></hr>

        <div class="row">
          <div class="jumbotron">
            <h1>“La mejor inversión en tu negocio es con nosotros”.</h1>
            <p class="text-justify"> Ventas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
            <p><a href="#" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>
            <div>
            </div>
            <div class="container-fluid bg-3 text-center" />
            <h3 class="margin">¿Que te ofrecemos?</h3>
            <div class="row">
              <div class="col-sm-4">
                <p >•	Optimización  de trabajo laboral de campo
    •	Gestión fiable de contabilidad
    •	El uso aplicable de un navegador (Google Maps)
    •	Creador de un registro detalladamente de información
    •	Alcance de obtener áreas y ángulos  exactos
</p>
                <img src={Imag3} class="img-responsive margin" alt="Image" />
              </div>


              <div class="col-sm-6">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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