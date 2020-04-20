import React, { Component } from 'react';
import Ima1 from '../Blog/Multimedia/Imag1.jpg';

class menu extends Component {
    render() {
        return (
            <div>
             <br />
                <br />

                <div class="card" width="500px">
                    <img class="card-img-top" src={Ima1} alt="Card image" height="400px" />
                    <div class="card-img-overlay">
                    </div>
                </div>

            <h1>MENU</h1>
                
            </div>
        );
    }
}

export default menu;