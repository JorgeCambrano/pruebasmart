import React, { Component } from 'react';
import './form.css';

class sesion extends Component {
    render() {
        return (
            <div>
                
                <form>
                <div class="card cardf|">
                        <h5 class="card-header">Iniciar Sesion</h5>
                        <div class="card-body"></div>
                        </div>
                    
                        <div class="form-group">
                            <label for="exampleInputEmail1">Ingrese su Correo</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted"></small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Ingrese su contraseña</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" />
                        </div>
                        <div class="form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" />

                        </div>
                        <button type="submit" class="btn btn-primary">Iinciar</button>
                       </form>
                        </div>
                        
                );
            }
        }
        
export default sesion;