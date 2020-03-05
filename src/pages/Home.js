import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import Imag1 from './../Imagenes/FotosS/des.jpg';
import Imag3 from './../Imagenes/FotosS/fracc.jpg';
import Imag2 from './../Imagenes/FotosS/crokis.jpg';
import Imag4 from './../Imagenes/FotosS/PLANOS.jpg';
import Imag5 from './../Imagenes/FotosS/nom.jpg';


class Home extends Component {

  render() {
    return (
      <div >

        <div class="row">
          <div class="jumbotron">
            <h1>“La mejor inversión en tu negocio es con nosotros”.</h1>
            <p class="text-justify"> Ventas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
            <p><a href="#" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>

            <div>



              <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                  <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src={Imag2} class="d-block w-100" alt="data" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>First slide label</h5>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={Imag4} class="d-block w-100" alt="dat1" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Second slide label</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <img src={Imag5} class="d-block w-100" alt="DATE" />
                    <div class="carousel-caption d-none d-md-block">
                      <h5>Third slide label</h5>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </div>
                  </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>


          <div class="container-fluid bg-2 text-center">

          </div>
        </div>
        <hr></hr>

        <div class="container-fluid bg-3 text-center" />
        <h3 class="margin">Where To Find Me?</h3>
        <div class="row">
          <div class="col-sm-4">
            <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src={Imag3} class="img-responsive margin" alt="Image" />
          </div>


          <div class="col-sm-6">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src={Imag1} class="img-responsive margin" alt="Image" />
          </div>
        </div>

      </div>
</div>
</div>

    );

  }
}


export default Home;