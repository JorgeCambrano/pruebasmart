import React, { Component } from 'react'
import Imag1 from './../Imagenes/FotosS/gestion.gif';
import Imag3 from './../Imagenes/FotosS/optimi.gif';
import Imag4 from './../Imagenes/FotosS/mapa.gif';
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
                <h4>•	Optimización  de trabajo laboral </h4>
                <img src={Imag3} class="img-rounded" alt="Login" width="300" height="300" />
              </div>

              <div class="col-sm-4">
<<<<<<< HEAD
                <p>•Gestión fiable de contabilidad</p>
                <img src={Imag1} class="img-responsive margin" alt="Image" />
=======
                <h4>•Gestión fiable de contabilidad .</h4>
                <img src={Imag1} class="img-rounded" alt="Login" width="300" height="300"  />
>>>>>>> master
              </div>
              <div class="col-sm-4">
<<<<<<< HEAD
                <p>•Alcance de obtener áreas y ángulos  exactos</p>
                <img src={Imag1} class="img-responsive margin" alt="Image" />
=======
                <h4>•	El uso aplicable de un navegador (Google Maps) </h4>
                <img src={Imag4} class="img-rounded" alt="Login" width="300" height="280" />
>>>>>>> master
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