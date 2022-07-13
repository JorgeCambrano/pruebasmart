import React, { Component } from 'react';
//mapa 
import Mapa from '../../src/mapa/mapa';
//imagenes 
import imagg1 from '../Imagenes/FotosS/Ventas/T1.jfif';
import imagg2 from '../Imagenes/FotosS/Ventas/p1.jpg';

import imagg3 from '../Imagenes/FotosS/Ventas/T2.jpg';
import imagg4 from '../Imagenes/FotosS/Ventas/p2.jpg';

import imagg5 from '../Imagenes/FotosS/Ventas/T3.jpg';
import imagg6 from '../Imagenes/FotosS/Ventas/p3.gif';

import imagg7 from '../Imagenes/FotosS/Ventas/T4.jpg';
import imagg9 from '../Imagenes/FotosS/Ventas/p4.png';
//css 
import './Menuprincial.css'



class Menuprincipal extends Component {

    render() {
        return (


            <div class="conte" >





                <div className="container p-1 my-3 bg-dark text-white">
                    <div className="cont" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={imagg1} class="d-block  w-100" alt="data" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h4>SISTEMA DE CAMPO INTELIGENTE.</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={imagg2} class="d-block  w-100" alt="dat1" />
                                            <div class="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Mapa />
                            </div>
                            <div className="col-md-8">
                                <div class="card-body">
                                    <h5 classNames="card-title">Cotizacion</h5>
                                    <p className="card-text">Lote: NO.1</p>
                                    <p className="card-text">Area: 22,142.16m2</p>
                                    <p className="card-text">Precio: $ 3,556,894,00</p>
                                    <p className="card-text"><small className="text-muted">Última actualización hace 3 minutos</small></p>
                                    <p className="card-text">Selecciona tu plan de pago:</p>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>select menu</option>
                                        <option value="1">6 mese</option>
                                        <option value="2">12 mese</option>
                                        <option value="3">2 años</option>
                                    </select>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button"  >Pagar </button>


                                        <button  className="btn btn-secondary" type="button" >Favorito</button>

                                     
                                    </div>


                          





                                    <p>
                                        <a className="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Inf.
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            Para mas informacion contactarse al
                                            telefono 100-010-1010-2020  o al
                                            corro jose@hotamial.com
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container p-1 my-3 bg-dark text-white">
                    <div className="cont" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={imagg3} class="d-block  w-100" alt="data" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h4>SISTEMA DE CAMPO INTELIGENTE.</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={imagg4} class="d-block  w-100" alt="dat1" />
                                            <div class="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Mapa />
                            </div>
                            <div className="col-md-8">
                                <div class="card-body">
                                    <h5 classNames="card-title">Cotizacion</h5>
                                    <p className="card-text">Lote: NO.2</p>
                                    <p className="card-text">Area: 14,484.16m2</p>
                                    <p className="card-text">Precio: $ 2,016,614,00</p>
                                    <p className="card-text"><small className="text-muted">Última actualización hace 2 minutos</small></p>
                                    <p className="card-text">Selecciona tu plan de pago:</p>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>select menu</option>
                                        <option value="1">6 mese</option>
                                        <option value="2">12 mese</option>
                                        <option value="3">2 años</option>
                                    </select>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button" role="alert ('alerta');" >Pagar </button>
                                        <button className="btn btn-secondary" type="button">Favorito</button>
                                    </div>
                                    <p>
                                        <a className="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Inf.
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            Para mas informacion contactarse al
                                            telefono 100-010-1010-2020  o al
                                            corro jose@hotamial.com
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>





                <div className="container p-1 my-3 bg-dark text-white">
                    <div className="cont" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={imagg5} class="d-block  w-100" alt="data" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h4>SISTEMA DE CAMPO INTELIGENTE.</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={imagg6} class="d-block  w-100" alt="dat1" />
                                            <div class="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Mapa />
                            </div>
                            <div className="col-md-8">
                                <div class="card-body">
                                    <h5 classNames="card-title">Cotizacion</h5>
                                    <p className="card-text">Lote: NO.3</p>
                                    <p className="card-text">Area: 9,142.16m2</p>
                                    <p className="card-text">Precio: $ 1,218,130,30</p>
                                    <p className="card-text"><small className="text-muted">Última actualización hace 2 minutos</small></p>
                                    <p className="card-text">Selecciona tu plan de pago:</p>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>select menu</option>
                                        <option value="1">6 mese</option>
                                        <option value="2">12 mese</option>
                                        <option value="3">2 años</option>
                                    </select>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button" role="alert ('alerta');" >Pagar </button>
                                        <button className="btn btn-secondary" type="button">Favorito</button>
                                    </div>
                                    <p>
                                        <a className="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Inf.
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            Para mas informacion contactarse al
                                            telefono 100-010-1010-2020  o al
                                            corro jose@hotamial.com
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>






                <div className="container p-1 my-3 bg-dark text-white">
                    <div className="cont" >
                        <div className="row g-0">
                            <div className="col-md-4">
                                <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
                                    <ol class="carousel-indicators">
                                        <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                                    </ol>
                                    <div class="carousel-inner">
                                        <div class="carousel-item active">
                                            <img src={imagg7} class="d-block  w-100" alt="data" />
                                            <div class="carousel-caption d-none d-md-block">
                                                <h4>SISTEMA DE CAMPO INTELIGENTE.</h4>
                                            </div>
                                        </div>
                                        <div class="carousel-item">
                                            <img src={imagg9} class="d-block  w-100" alt="dat1" />
                                            <div class="carousel-caption d-none d-md-block">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Mapa />
                            </div>
                            <div className="col-md-8">
                                <div class="card-body">
                                    <h5 classNames="card-title">Cotizacion</h5>
                                    <p className="card-text">Lote: NO.4</p>
                                    <p className="card-text">Area: 55,444.56m2</p>
                                    <p className="card-text">Precio: $ 5,6666,014,00</p>
                                    <p className="card-text"><small className="text-muted">Última actualización hace 2 minutos</small></p>
                                    <p className="card-text">Selecciona tu plan de pago:</p>

                                    <select className="form-select" aria-label="Default select example">
                                        <option selected>select menu</option>
                                        <option value="1">6 mese</option>
                                        <option value="2">12 mese</option>
                                        <option value="3">2 años</option>
                                    </select>
                                    <div className="d-grid gap-2 d-md-block">
                                        <button className="btn btn-primary" type="button" role="alert ('alerta');" >Pagar </button>
                                        <button className="btn btn-secondary" type="button">Favorito</button>
                                    </div>
                                    <p>
                                        <a className="btn btn-secondary" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                            Inf.
                                        </a>
                                    </p>
                                    <div className="collapse" id="collapseExample">
                                        <div className="card card-body">
                                            Para mas informacion contactarse al
                                            telefono 100-010-1010-2020  o al
                                            corro jose@hotamial.com
                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>






































            </div >





        );
    }
}

export default Menuprincipal;