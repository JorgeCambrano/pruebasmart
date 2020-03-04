import React, { Component } from 'react';

class registro extends Component {
    constructor(props){
        super(props);

        this.state={
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
       // this.handleDireccion= this.handleDireccion(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleNombre(event){
       
        this.setState({nombre: event.target.value});
    }
    handleSubmit(e){
        e.preventDefault();
        alert('El nombre completo es: ' + this.state.nombre);
    }
    render() {
        return (
            <div>
                <div class="card cardf|">
  <h5 class="card-header">contacto</h5>
  <div class="card-body">


      <div className="formp">
        <form onSubmit={this.handleSubmit} >
                    <div class="form-group">
                     <label for="nombre">Nombre</label>
                     
                        <input type="text" className="form-control" id="nombre" aria-describedby="nombre" placeholder="Escriba su nombre completo" name="nombre" value={this.state.nombre} onChange={this.handleNombre}/>
                           
 </div>
                        <div class="form-group">
                            <label for="apellidos">Apellido</label>
                            <input type="text" className="form-control" id="apellidos" placeholder="Ingrese sus apellidos" name="apellidos"/>
 </div>
                            <div class="form-group form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                    <label class="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                                <input type="submit" value="Registrase" className="btn btn-primary"/>
</form>
</div>
  </div>
</div>
            </div>
        );
    }
}

export default registro;