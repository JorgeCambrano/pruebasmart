import React, { Component } from 'react';
import LogoT from './../Imagenes/FotosS/Logo-Tec.png';
import Arbol from './../Imagenes/FotosS/arboles.png';
import '../pages/home.css';
class Pie extends Component {
    render() {
        return (
            <div className="infer">

                <footer class="container-fluid text-center   ">
               
                    <h2>SISTEMA DE CAMPO INTELIGENTE </h2> 
                    <p>Ingenieria en Sistemas Computacionales</p>
                <div class="p-3 mb-2 bg-dark text-success text-center"><h1> INSTITUTO TECNOLOGICO SUPERIOR DE LOS RIOS</h1> </div>
                    <h2>SISTEMA DE CAMPO INTELIGENTE  <img src={Arbol} class="img-rounded" alt="Logiin" width="80" height="80" /></h2> 
                    <h3>Ingenieria en Sistemas Computacionales</h3>
                    <h3>Docente: M.A.T.I Edgar Garcia Garcia</h3>
                    <h3>Asignatura: Proceso person. de desarrollo de Sofware </h3>
                    <h5>Fecha de creacion: 27/03/2022</h5>
                    <h3>Correo oficial: Smarthfield2019@outlook.com  </h3>
                    <h3>Numero de la empresa: 916 131 7186  </h3>
                    <img src={LogoT} class="img-rounded" alt="Logiin" width="80" height="80" />
                   

                </footer>

              




            </div>
        );
    }
}

export default Pie;