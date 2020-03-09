import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Registro from '../../contactos/registro';
import Contacto from '../../contactos/contacto';
import Sesion from '../../contactos/sesion';
import Home from '../../pages/Home';
import Imag from './../../Imagenes/FotosS/Smart.jpeg';
import Img2 from './../../Imagenes/FotosS/arbo.png';
import Ser from './../../Imagenes/FotosS/serve.png';
import sem from './../../Imagenes/FotosS/brote.png';
import sem1 from './../../Imagenes/FotosS/sol.png';
import sem2 from './../../Imagenes/FotosS/ini.png';
import '../../pages/home.css';
import Pie from '../../pages/Pie';




class Header extends Component {

    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <Link className="navbar-brand text-success" to="/"><strong>SMFLD</strong></Link>
                        <Link className="navbar-brand" to="/">
                         <img src={Imag} class="img-rounded" alt="Login" width="50" height="50" /></Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li class="nav-item active">
                                  
                                    <Link className="nav-link" to="Inicio">Informate<img src={Img2} class="img-rounded" alt="Login" width="50" height="50" /><span class="sr-only">(current)</span></Link>
                                    
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#"></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Servicios <img src={Ser} class="img-rounded" alt="Login" width="60" height="60"/></a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <Link className="dropdown-item" to="/Contacto">|Contacto|<img src={sem} class="img-rounded" alt="Login" width="50" height="50" /></Link>
                                        <Link className="dropdown-item" to="/Registro">|Registro|<img src={sem1} class="img-rounded" alt="Login" width="50" height="50" /></Link>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/sesion">|Iniciar Sesion|<img src={sem2} class="img-rounded" alt="Login" width="50" height="50" /> </a>
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

                <br/>
                <br/>
                <div>
                    <Switch>
                        <Route path= '/' exact component={Home}/>
                        <Route path= "/contacto" exact component={Contacto}/>
                        <Route path= "/registro" exact component={Registro}/>
                        <Route path= "/sesion" exact component= {Sesion}/>
                    </Switch>
                </div>
              <br/>
              <br/>
              <Pie/>
                   


</Router>

                );
            }
        }

        
        export default Header;
        
        
        
        