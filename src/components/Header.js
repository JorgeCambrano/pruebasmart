import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            
            <Router>
                <div className="container-fluid">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <Link className="navbar-brand" to="/">SMFLD</Link>
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
                </div>


            </Router>



        );
    }
}

export default Header;






