import React, { Component } from 'react';
import Ima1 from '../Blog/Multimedia/Imag1.jpg';
import Ima2 from '../Blog/Multimedia/sol.png';

class blog extends Component {
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

                <h1 className=" display-3 bg-warning text-white text-center "> NOTICIAS DEL DIA</h1>




                <div id="section1" class="container-fluid bg-success" padding-top="70px" padding-bottom="70px">
                    <h1>Section 1</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
                <div id="section2" class="container-fluid bg-warning" padding-top="70px" padding-bottom="70px">
                    <h1>Section 2</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
                <div id="section3" class="container-fluid bg-secondary" padding-top="70px" padding-bottom="70px">
                    <h1>Section 3</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
                <div id="section41" class="container-fluid bg-danger" padding-top="70px" padding-bottom="70px">
                    <h1>Section 4 Submenu 1</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>
                <div id="section42" class="container-fluid bg-info" padding-top="70px" padding-bottom="70px">
                    <h1>Section 4 Submenu 2</h1>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                    <p>Try to scroll this section and look at the navigation bar while scrolling! Try to scroll this section and look at the navigation bar while scrolling!</p>
                </div>



                <div class="row">
                    <div class="col-sm-4">
                        <h3>Column 1</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>Column 2</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                    <div class="col-sm-4">
                        <h3>Column 3</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris...</p>
                    </div>
                </div>
            </div>
            



    
         
        );
    }
}

export default blog;