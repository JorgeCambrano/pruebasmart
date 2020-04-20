import React, { Component } from 'react';
import Imag1 from '../Imagenes/FotosS/perfil.JPG';
import Imag2 from '../Imagenes/FotosS/perfil2.jpeg';
import WhatsApp from '../Imagenes/FotosS/watsap.jpg';
import FACEBOOK from '../Imagenes/FotosS/face.jpg';
import Mapa from '../../src/mapa/mapa';


class cont extends Component {
    render() {
        return (
            <div>
               <br></br>
                <hr></hr>
                <br/>
                <div class="container">
                    <div class="row ">
            
                        <div class="col-sm-8">
                        
                            <img src={Imag1} class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />

                            <div class="card-body ">
                                <p class="card-text">DANIEL ARCOS ALVARO</p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>ENCARGADO DE LA EMPRESA</p>
                                <p>  <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/>  dani AB Alvarado </p>
                                 <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/>  +52 9161116705</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div class="container-fluid bg-3 text-center">
                                <img src={Imag2} class="img-thumbnail " alt="Cinque Terre" width="150px" height="150px" paddig="250px" />

                                <div class="card-body">
                                    <p class="card-text">JORGE JESUS MENDEZ CAMBRANO </p>
                                    <p>Ingeniero en sistemas computacionales </p>
                                    <p>ENCARGADO DE LA EMPRESA </p>
                                    <p> <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/> Jorge J Cambrano </p>
                                    <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/> +52 9161317186.</p>
                                </div>
                            </div>




                        </div>
                    </div>
                </div>
                <Mapa/>

            </div>
        );
    }
}

export default cont;
