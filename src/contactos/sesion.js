import React, { Component } from 'react';
import './sesion.css';


class sesion extends Component {

    render() {
        return (
            <div className="ses">

                <br />
                <br />

                <form class="form">
                    <h2 class="form-title"> INICIAR SESIÓN</h2>
                    <div class="error block">
                        <p class="error"> </p>
                    </div>

                    <div class="input-block">
                        <label for="username" class="label">Nombre de Usuario</label>
                        <input type="text" name="username" class="input username-input" />
                    </div>


                    <div class="input-block">
                        <label for="email" class="label">Email</label>
                        <input type="text" name="email" class="input email-input" />
                    </div>

                    <div class="input-block">
                        <label for="password" class="label">Password</label>
                        <input type="password" name="password" class="input pw-input" />
                        <p class="input-info">
                            Debe tener al menos 6 caracteres de longitud</p>
                    </div>

                    <div class="input-block">
                        <label for="repeat_password" class="label">Repeat password</label>
                        <input type="password" name="repat_password" class="input rpw-input" />
                    </div>


                    <div class="input-block">
                        <input type="submit" value="Registrarse " class="input-submit" />
                    </div>
                </form>

            </div>
        );
    }
}

export default sesion;