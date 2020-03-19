import React, { Component } from 'react';
import './form.css';

class Registro extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nombre: '',
            apellidos: '',
            correo: '',
            profesion: '',
            direccion: ''
        }

        this.handleNombre = this.handleNombre.bind(this);
        // this.handleApellidos= this.handleApellidos.bind(this);
        // this.handleCorreo= this.handleCorreo.bind(this);
        // this.handleProfesion= this.handleProfesion(this);
        // this.handleDireccion= this.handleProfesion(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleNombre(event) {

        this.setState({ nombre: event.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        alert('El nombre completo es: ' + this.state.nombre);
    }
    render() {
        return (
            <div>


                <div className="row">
                    <div className="col-lg-12">


                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <br/>

                        <div class="card cardf|">
                            <br/>

                            <h5 class="card-header">Registro <small>De Usuario.</small></h5>
                            <div class="card-body">                                                           

                                <form onSubmit={this.handleSubmit} >
                                    <div clas="container" />
                                    <div class="formp">

                                        <form action="#" class="  form" />
                                        <div class="form-group">
                                            <label for="nombre">Nombre</label>

                                            <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Ingrese su nombre " name="nombre" value={this.state.nombre} onChange={this.handleNombre} />

                                        </div>
                                        <div class="form-group">
                                            <label for="apellidos">Apellido</label>
                                            <input type="text" className="form-control" id="apellidos" placeholder="Ingrese sus apellidos" name="apellidos" />
                                        </div>
                                        <div class="form-group">
                                            <label for="correo">Correo</label>
                                            <input type="text" className="form-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                                        </div>
                                        <div class="form-group">
                                            <label for="profesion">Profesion</label>
                                            <input type="text" className="form-control" id="profesion" placeholder="Ingrese su profesion" name="profesion" />
                                        </div>
                                        <div class="form-group">
                                            <label for="direccion">Direccion</label>
                                            <input type="text" className="form-control" id="direccion" placeholder="Ingrese su direccion" name="direccion" />
                                        </div>

                                        <input type="submit" value="Enviar" className="btn btn-primary" />
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>

                </div>
            </div>



        );
    }
}

export default Registro;