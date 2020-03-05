import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';

import Registro from '../../contactos/registro';
import Home from '../../pages/Home';


class Header extends Component {
    render() {
        return (

     <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Link className="navbar-brand" to="/">SMARTF FIELD</Link>
                        <Link className="navbar-brand" to="/">SMFLD</Link>
                        <Link className="navbar-brand" to="/"></Link>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li class="nav-item active">
                                    <Link className="nav-link" to="#">HOME<span class="sr-only">(current)</span></Link>
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
                                        <a className="dropdown-item" href="#">Iniciar Secion </a>

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
                    <div class="jumbotron">
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path="/registro" exact component={Registro} />
                        </Switch>
                    </div>

        

                    
                    </div>
 </Router>
           );
            }
        }
 export default Header;
        
        

