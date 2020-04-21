import React, { Component } from 'react';
import Ima1 from '../Blog/Multimedia/Imag1.jpg';
import pozo from '../Blog/Multimedia/pozo.jpeg';
import areas from '../Blog/Multimedia/areas.jpeg';
import entrada from '../Blog/Multimedia/entrada.jpeg';
import terreno from '../Blog/Multimedia/terreno.jpeg';
import tuberia from '../Blog/Multimedia/tuberia.jpeg';

class blog extends Component {
    render() {
        return (
            <div>

                <br />
                <br />

                <div class="card" width="500px">
                    <img class="card-img-top" src={Ima1} alt="Card image" height="400px" />
                    <div class="card-img-overlay">
                    </div>
                </div>

                <h1 className=" display-3 bg-warning text-white text-center "> NOTICIAS DEL DIA</h1>
                

                <div id="seccion1" class="container-fluid bg-success" padding-top="300px" padding-bottom="300px">
                    <h1>Section 1 "Construcción" </h1>
                    <div class="container">
                    <div class="row">
                        <div class="col-sm-4 text-center">
                                <img src={pozo} class="img-rounded" alt="Login" width="300" height="300" />
                                <h9 className="display-6" >Descripcion: construccion de pozas de baños para las personas que habitan en la colonia y tambien las pilas de agua para las personas 
                                que ya habitan en el lugar </h9>
                            </div>
                            <div class="col-sm-4 text-center">
                                <img src={tuberia} class="img-rounded" alt="Login" width="300" height="300" />
                                <h9 className="display-6" > Instalacion de tuberia para las aguas negras, y para el desecho de la casa</h9>
                            </div>
                            <div class="col-sm-4 text-center">
                                <img src={areas} class="img-rounded" alt="Login" width="300" height="300" />
                                <h9 className="display-6" > Imagen de muestra para la vista de las personas que es un lugar plano para poder construir lo que desee</h9>
                            </div>
                            <div class="col-sm-4 text-center">
                                <img src={terreno} class="img-rounded" alt="Login" width="300" height="300" />
                                <h9 className="display-6" > Muestreo de los terrenos que estan disponibles a las venta para las personas que adquieren sus solares para la colonizacion </h9>
                            </div>
                            <div class="col-sm-4 text-center">
                                <img src={entrada} class="img-rounded" alt="Login" width="300" height="300" />
                                <h9 className="display-6" > Imagen de la entrada hacia la colonia, y esta en proceso de entrar con calle de pavimentos
                                o con via terraseria </h9>
                            </div>

                        </div>
                    </div>
                </div>    
                    <div id="section2" class="container-fluid bg-warning" padding-top="70px" padding-bottom="70px">
                        <h1>Section 2</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>
                    <div id="section3" class="container-fluid bg-secondary" padding-top="70px" padding-bottom="70px">
                        <h1>Section 3</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>
                    <div id="section41" class="container-fluid bg-danger" padding-top="70px" padding-bottom="70px">
                        <h1>Section 4 Submenu 1</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>
                    <div id="section42" class="container-fluid bg-info" padding-top="70px" padding-bottom="70px">
                        <h1>Section 4 Submenu 2</h1>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                        <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    </div>



                    <div class="row">
                        <div class="col-sm-4">
                            <h3>Column 1</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Column 2</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                        <div class="col-sm-4">
                            <h3>Column 3</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                        </div>
                    </div>
                </div>






        );
    }
}

export default blog;