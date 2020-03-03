import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

<<<<<<< HEAD

import Home from '../pages/Home';
import Configuraciones from '../pages/Configurations';
=======
>>>>>>> diseño

class Header extends Component {
    render() {
        return (
            
            <Router>
<<<<<<< HEAD
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                      <a className="navbar-brand" href="#">Smart Field</a>
=======
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Link className="navbar-brand" to="/">SMFLD</Link>
>>>>>>> diseño
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
<<<<<<< HEAD
                         <ul className="navbar-nav mr-auto">
                           <li className="nav-item active">
                             <a className="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                           </li>
                             <li className="nav-item">
                             <a className="nav-link" href="#">Link</a>
                             </li>
                             <li className="nav-item dropdown">
                             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown
                              </a>
                             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                               <a className="dropdown-item" href="#">Action</a>
                             <a className="dropdown-item" href="#">Another action</a>
                           <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">Something else here</a>
                           </div>
                        </li>
                          <li className="nav-item">
                          <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                       </ul>
                          <form className="form-inline my-2 my-lg-0">
                             <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                             <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                             </input>
                        </form>
                
                  
                     <div>
                      <Switch>
                          <Route path="/"  exact component={Home}/>
                          <Route path="/configuraciones"  exact component={Configuraciones}/>
                      </Switch>
                
                
                
=======
                            <ul className="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link className="nav-link" to="Inicio">HOME<span class="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Servicios </a>

                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/Contactos">Contacto</Link>
                                        <Link className="dropdown-item" to="/Registro">Registrar</Link>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="IniciarSecion">Iniciar Secion </a>

                                    </div>
                                </li>
                            </ul>
                            <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button type="button" class="btn btn-success">Buscar</button>
                            </form>


                        </div>
                    </nav>
                </div>
                <hr></hr>
                <div>
                    <div class="jumbotron">
                        <h1>“La mejor inversión en tu negocio es con nosotros”.</h1>
                        <p class="text-justify"> Venttas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
                        <p><a href="#" class="btn btn-success btn-lg btn-block">Registrate con nosotros </a></p>
                    
                    </div>
>>>>>>> diseño
                </div>


            </Router>
<<<<<<< HEAD
            </nav>
        )
=======



        );
>>>>>>> diseño
    }
}

export default Header;






