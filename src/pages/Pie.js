import React, { Component } from 'react';
import LogoT from './../Imagenes/FotosS/Logo-Tec.png';
class Pie extends Component {
    render() {
        return (
            <div>

                <footer class="container-fluid text-center   ">
                    <h1> INSTITUTO TECNOLOGICO SUPERIOR DE LOS RIOS</h1>
                    <h2>SISTEMA DE CAMPO INTELIGENTE</h2>
                    <p>Ingenieria en Sistemas Computacionales</p>
                    <h3>Docente: Dany Cambrano Álvaro</h3>
                    <h3>Asignatura: Tópicos Avanzados de Programación </h3>
                    <h5>Fecha de creacion: 01/02/2020</h5>
                    <h3>Correo oficial:        </h3>
                    <h3>Numero de la empresa:  </h3>
                    <img src={LogoT} class="img-rounded" alt="Logiin" width="80" height="80" />

                </footer>

              




            </div>
        );
    }
}

export default Pie;