import React, { Component } from 'react';

class cont extends Component {

    render() {

        // Arreglos
        const numeroso=['916-111-67-05']
        const nombres=['Daniel Arcos'];

        const numeros=numeroso.map((numero)=>
          <tr key={numeroso.toString}> {numero}</tr>);

        const datos=nombres.map((Nombre)=>
          <tr key={nombres.toString}> {Nombre}</tr>);

        return (
            <div>
                <hr></hr>
                <div class="card" style="width: 18rem;">
                    <img src="..." class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div>
           </div>
                </div>
                );
            }
        }
        
       
     export default cont;
