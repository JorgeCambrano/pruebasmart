import React, { Component } from 'react';
import './sesion.css';
import './form.css';


class regisven extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            apellido: '',
            correo: '',
            profesion: '',
            direccion: ''
        }

        this.handleNombre = this.handleNombre.bind(this);
        this.handleApellido = this.handleApellido.bind(this);        
        this.handleCorreo = this.handleCorreo.bind(this);
        this.handleProfesion = this.handleProfesion.bind(this);
        this.handleDireccion = this.handleDireccion.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNombre(event) {
        this.setState({ nombre: event.target.value });
    }
    handleApellido (event){
        this.setState({ apellido: event.target.value});

   }    
    handleCorreo(event) {
        this.setState({ correo: event.target.value });
    }
    handleProfesion(event) {
        this.setState({ profesion: event.target.value });
    }
    handleDireccion(event) {
        this.setState({ direccion: event.target.value });
    }


    handleSubmit(e) {
        e.preventDefault();
        alert('El nombre completo es: ' + this.state.nombre);
        alert('El apellido es:' + this.state.apellido);
        alert('El correo asignado es:' + this.state.correo);
        alert('La profesión asignada es:' + this.state.profesion);
        alert('La dirección asignada es:' + this.state.direccion);
    }

    

    render() {
        return (
            <div className="regi">

                <br />
                <br />

                <form class="formi">
                    <h2 className="formi-title"> REGISTRARSE DEL VENDEDOR</h2>

                    <div className="input-block">
                        <label for="username" class="label">Nombre de Usuario</label>
                        <input type="text" name="username" class="input username-input" aria-describedby="nombre" placeholder="Ingrese su nombre " value={this.state.nombre} onChange={this.handleNombre} />
                    </div>

                    <div className="input-block">
                        <label for="apellido" class="label">Apellidos del Usuario</label>
                        <input type="text" name="apellido" class="input apellido-input" aria-describedby="apellido" placeholder="Ingrese su apellidos " value={this.state.apellido} onChange={this.handleApellido} />
                    </div>
                    
                    




                    <div className="input-block">
                        <label for="email" class="label">Email</label>
                        <input type="text" name="email" class="input email-input" aria-describedby="email" placeholder="Ingrese su correo electronico" value={this.state.correo} onChange={this.handleCorreo} />
                    </div>

                    <div className="input-block">
                        <label for="direccion" class="label">Dirección</label>
                        <input type="text" name="direccion" class="input direccion-input" aria-describedby="direccion" placeholder="Ingrese su direccion " value={this.state.direccion} onChange={this.handleDireccion} />
                    </div>


                    <input   type="submit" value="Enviar" className="btn btn-primary" />

                </form>

            </div>



           
        );
    }
}

export default regisven;