import React, { Component } from 'react';
import './forma.css';

class sesion extends Component {
 
    render() {
        return (
            <div> 
                
                <div className="container">
                <h5 className="abs-center">Iniciar sesion</h5>
                    <div >
                    
                        <forma action="#" className="border  forma"/>
                        
                            <div className="forma-group">
                            
                                <label for="email">Correo usu</label>
                                <input type="text" className="forma-control" id="correo" placeholder="Ingrese su correo" name="correo" />
                           
                                
                             </div>
                             
                                <div className="forma-group">
                                
                                    <label form="password">Contraseña</label>
                                    <input type="text" className="forma-control" id="passWord" placeholder="Ingrese su contraseña" name="passWord" />
                                    
                                    
                                </div>
                                <div className="forma-group">
                                <input type="submit" value="Enviar" className="btn btn-primary"/>
                                </div>
                               
                                
                                
                       </div>
                       
                    </div>
            </div>
                            
        );
               }
            }
            
export default sesion;