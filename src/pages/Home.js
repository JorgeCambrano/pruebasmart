import React, { Component } from 'react'
import Imag1 from './../Imagenes/FotosS/optimi.png';
import Imag3 from './../Imagenes/FotosS/conta.png';
import Carrusel from './carrusel';




class Home extends Component {



  render() {
    return (
      <div>
        <hr></hr>
        <div class="row">
          <div class="jumbotron">
            <h1>“¡LA MEJOR INVERSION EN TU NECEGOCIO ES CON NOSOTROS!".</h1>
            <p class="text-justify center"> Ventas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
            <p><a href="#" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>
            

            <div>
            </div>
            <div class="container-fluid text-center"/>
            <div class="p-3 mb-2 bg-dark text-success text-center"><h1> ¿QUE TE OFRECEMOS?    </h1></div>
            <div class="row">
              <div class="col-sm-4">
                <p >•	Optimización  de trabajo laboral de campo</p>
                <img src={Imag3} class="img-responsive margin" alt="Image" />
              </div>

              <div class="col-sm-4">
                <p>•Gestión fiable de contabilidad</p>
                <img src={Imag1} class="img-responsive margin" alt="Image" />
              </div>

              <div class="col-sm-4">
                <p>•Alcance de obtener áreas y ángulos  exactos</p>
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