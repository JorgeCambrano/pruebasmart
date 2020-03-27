import React, { Component } from 'react';
import './forma.css';

class sesion extends Component {

    render() {
        return (
            <div className="row">
                    <div className="col-lg-12">
                        <br/>
                        <div class="card cardf|">
                            <br/>
                            <br/>
                        <h5 class="card-header">Iniciar Sesion</h5>
                            <div class="card-body">                                                           

                                
                                    <div clas="container" />
                                    <div class="formaf">
                                        <br/>

                                        <form action="#" class="  forma" />
                                        
                                        <div class="form-group">
                                            <label for="apellidos">Correo</label>
                                            <input type="text" className="form-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                                        </div>
                                        <div class="form-group">
                                            <label for="correo">Correo</label>
                                            <input type="text" className="form-control" id="contraseña" placeholder="Ingrese su contraseña" name="contraseña" />
                                        </div>
                                        
                                       

                                        <input type="submit" value="Iniciar" className="btn btn-primary" />
                                    </div>
                               

                            </div>
                        </div>
                    </div>

                </div>
            

        );
    }
}

export default sesion;