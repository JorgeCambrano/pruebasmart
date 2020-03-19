import React, { Component } from 'react';
import './forma.css';

class sesion extends Component {
 
    render() {
        return (
            <div> 
                
                <div className="container">
                    <div class="abs-center"></div>
                <h5 >Iniciar sesion</h5>
                    <div >
                    
                        <forma action="#" className="border  forma"/>
                        
                            <div className="forma-group">
                            
                                <label for="email">Correo usuario</label>
                                <input type="email" className="form-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                           
                                
                             </div>
                             
                                <div className="form-group">
                                
                                    <label form="password">Contraseña</label>
                                    <input type="text" className="form-control" id="passWord" placeholder="Ingrese su contraseña" name="passWord" />
                                    
                                    
                                </div>
                                <div className="form-group">
                                <input type="submit" value="Iniciar" className="btn btn-primary"/>
                                </div>
                               
                                
                                
                       </div>
                       
                    </div>
            </div>
                            
        );
               }
            }
            
export default sesion;