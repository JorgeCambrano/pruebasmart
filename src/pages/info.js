import React, { Component } from 'react';
import './info.css'

class info extends Component {
    render() {
        return (
            <div className="inf">

                <div class="card">
                    <div class="card-body text-white bg-primary">
                    <h1 className='display-4  text-black' >SMARTH FIELD  <small> ¡Té Asesóra con la venta de la propiedad que dispones, de una forma rapida y de manera segura! </small> </h1>
                    </div>
                </div>

                <h2 className="text-align: justify;" >
                    Al vender o rentar una propiedad es
<b>importante</b> contar con un Agente Inmobiliario
profesional y capacitado.
Nuestros agentes se <b>especializan</b> en
dar asesoría personalizada a clientes
que quieren vender su propiedad en
</h2>


                <h2 className="text-align: justify;" >
                    un <b>precio justo</b> y en el <b>menor tiempo</b>
posible. De igual manera ayudan a
sus clientes a encontrar la propiedad
de sus <b>sueños</b> de una forma <b>segura</b>,
<b>fácil y sin complicaciones</b>.
      </h2>


            </div>
        );
    }
}

export default info;