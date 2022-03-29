import React, { Component } from 'react';
import Imag1 from '../Imagenes/FotosS/perfil.JPG';
import Imag2 from '../Imagenes/FotosS/perfil2.jpeg';
import imag3 from '../Imagenes/FotosS/perfil1.jpg';
import imag4 from '../Imagenes/FotosS/perfil3.jfif';
import imag5 from '../Imagenes/FotosS/perfil4.jfif'
import imag6 from '../Imagenes/FotosS/perfil5.jfif'
import WhatsApp from '../Imagenes/FotosS/watsap.jpg';
import FACEBOOK from '../Imagenes/FotosS/face.jpg';
import Mapa from '../../src/mapa/mapa';


class cont extends Component {
    render() {
        return (
            <div className="card-body">
               <br></br>
                <hr></hr>
                <br/>
                <div class="container">
                    <div class="row ">
            
                        <div class="col-sm-8">

                            <img src={Imag1} class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />

                            <div class="card-body ">
                                <p class="card-text">ALVARO JOSE PEREZ  VELAZQUEZ</p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>ENCARGADO DE LA EMPRESA</p>

                                <p>  <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/>  Alvaro jose  </p>
                                 <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/>  +52 934-260-09-65</p>
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
                                    <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/> +52 91-61-317-186.</p>
                                </div>
                            </div>

                        </div>
                        
                      
         
                        
                      

                        <div class="col-sm-8">
                            <img src={imag5} class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />
                            <div class="card-body ">
                                <p class="card-text">PATRICIA GPE MENDOZA LOPEZ</p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>Analista</p>
                                <p>  <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/>  paty mendoza  </p>
                                 <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/>  +52 934-110-99-57</p>
                            </div>
                        </div>






                        

                        <div className="col-sm-4">
                            <div class="container-fluid bg-3 text-center">
                                <img src={imag3} class="img-thumbnail " alt="Cinque Terre" width="150px" height="150px" paddig="250px" />

                                <div class="card-body">
                                    <p class="card-text"> CARLOS MATEO MONTEJO CRUZ  </p>
                                    <p>Ingeniero en sistemas computacionales </p>
                                    <p>Analista</p>
                                    <p> <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/> Carlos M Montejo </p>
                                    <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/> +52 934-115-67-66</p>
                                </div>
                            </div>

                        </div>


                        <div class="col-sm-8">
                            <img src={imag6} class="img-thumbnail" alt="Cinque Terre" width="150px" height="150px" margin="auto" display="inline-block" />
                            <div class="card-body ">
                                <p class="card-text">JULIO CESAR ALVARO LOPEZ</p>
                                <p>Ingeniero en sistemas computacionales</p>
                                <p>Diseñador</p>
                                <p>  <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/>  julio lopez  </p>
                                 <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/>  +52 993-573-0811</p>
                            </div>
                        </div>






                        


                        <div className="col-sm-4">
                            <div class="container-fluid bg-3 text-center">
                                <img src={imag4} class="img-thumbnail " alt="Cinque Terre" width="150px" height="150px" paddig="250px" />

                                <div class="card-body">
                                    <p class="card-text">GERSON ISAI CRUZ VELAZQUEZ  </p>
                                    <p>Ingeniero en sistemas computacionales </p>
                                    <p>Analista</p>
                                    <p> <img src={FACEBOOK} class="img-rounded" alt="Login" width="60" height="60"/> Gerson cruz </p>
                                    <p> <img src={WhatsApp} class="img-rounded" alt="Login" width="60" height="60"/> +52 934-110-99-57</p>
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
