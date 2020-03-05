import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Registro from '../contactos/registro';
import Home from '../pages/Home';
import Imag from '../Imagenes/FotosS/Smart.jpeg';
import Imag1 from '../Imagenes/FotosS/des.jpg';
import Imag2 from '../Imagenes/FotosS/crokis.jpg';
import Imag3 from '../Imagenes/FotosS/fracc.jpg';

class Header extends Component {
    render() {
        return (

            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Link className="navbar-brand" to="/">SMFLD</Link>
                        <Link className="navbar-brand" to="/">
                            <img src={Imag} class="img-rounded" alt="Login" width="80" height="80" /></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                                        <Link className="dropdown-item" to="/Registro">registro</Link>
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
                
                
                
                <div>
                    <Switch>
                    
                        <Route path= '/' exact component={Home}/>
                        <Route path= "/registro" exact component={Registro}/>
                    </Switch>
                </div>
                
                

                    <div class="jumbotron" >
                    
                    
                        <h1>“La mejor inversión en tu negocio es con nosotros”.</h1>
                        <p class="text-justify"> Venttas y compras de terrenos, con gestion de control de manera sistematizado en informacion
                        de detallada del terreno, mostraccion de precios, visualizacion de ubicacion y urbanizaccion.</p>
                        <p><a href="#" class="btn btn-success btn-lg btn-block alert alert-success ">Registrate con nosotros </a></p>
                    </div>
                 
                <div>

                    <div class="container-fluid bg-2 text-center">
                    <div class="col-sm-4">
                            <img src={Imag2} class="img-responsive margin" alt="Image" />
                        </div>
                        <h3 class="margin">What Am I?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                        <a href="#" class="btn btn-default btn-lg">

                        </a>
                    </div>
                </div>

                <hr></hr>
                
                <div class="container-fluid bg-3 text-center" />
                <h3 class="margin">Where To Find Me?</h3>
                    <div class="row">
                        <div class="col-sm-4">
                        <p >Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        <img src={Imag3} class="img-responsive margin"  alt="Image" />
                        </div>
                        <div class="col-sm-4">
                         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                         <img src={Imag1} class="img-responsive margin"  alt="Image" />
                        </div>
                    </div>
                

                    <hr></hr>
                    <footer class="container-fluid text-center">
                        <p>PIE DE PAGINA</p>
                    </footer>
                    <div className="App-header"/>

            
            




</Router>

                );
            }
        }
        
        export default Header;
        
        
        
        
        
        
