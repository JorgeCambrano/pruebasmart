import React, { Component } from 'react';
import Imag1 from './../Imagenes/FotosS/Carrusel1.jpg';
import Imag2 from './../Imagenes/FotosS/cuate.jpeg';
import Imag3 from './../Imagenes/FotosS/Carrusel4.jpg';


class carrusel extends Component {
  render() {
    return (
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
              <h4>SISTEMA DE CAMPO INTELIGENTE.</h4>
               
              </div>
            </div>
            <div class="carousel-item">
              <img src={Imag3} class="d-block w-100" alt="dat1" />
              <div class="carousel-caption d-none d-md-block">
                <h4>Campo</h4>
                <p>Vista del lugar, con la finalidad de contribuirlo en un lugar urbano.</p>
              </div>
            </div>
            <div class="carousel-item">
              <img src={Imag1} class="d-block w-100" alt="DATE" />
              <div class="carousel-caption d-none d-md-block">
                <h4>Estructura de diviciones en Lotes.</h4>
                <p>Formacion final del lugar, de la implementacion del sistema.</p>
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

                   
      <h1 className='display-4 bg-success text-white'><h1 className="text-center">Nuestra Misión</h1>Ser los líderes mundiales en Bienes Raíces, alcanzando nuestras metas a través
de ayudar a otros a alcanzar las suyas. Todos ganan. </h1>











      </div>
    );
  }
}

export default carrusel;