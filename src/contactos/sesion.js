import React, { Component } from 'react';
import './form.css';

class sesion extends Component {
 
    render() {
        return (
            <div> 
                
                <div class="container">
                <h5 class="abs-center">Iniciar sesion</h5>
                    <div class="abs-center">
                    
                        <form action="#" class="border p-4 form"/>
                        
                            <div class="form-group">
                            
                                <label for="email">Correo</label>
                                <input type="text" className="form-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                           
                                
                             </div>
                             
                                <div class="form-group">
                                
                                    <label for="password">Contraseña</label>
                                    <input type="text" className="form-control" id="passWord" placeholder="Ingrese su contraseña" name="passWord" />
                                    
                                    
                                </div>
                                
                                <input type="submit" value="Enviar" className="btn btn-primary"/>
                               
                                
                                
                       </div>
                       
                    </div>
            </div>
                            
        );
               }
            }
            
export default sesion;