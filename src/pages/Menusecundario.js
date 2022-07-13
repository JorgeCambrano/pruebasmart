import React, { Component } from 'react';
import './Menusecundario.css';


class Menusecundario extends Component {

    render() {
        return (

            <div className="contenedor" >





                <div className="card text-white bg-dark mb-3" >
                    <div className="card-header">Admistracion de trabajo </div>



                    <form>



                        <div class="form-group">
                            <label for="exampleFormControlInput1">Area </label>
                            <input type="Area" class="form-control" id="exampleFormControlInput1" placeholder="area en m2" />
                        </div>
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Costo total del terreno </label>
                            <input type="Costo" class="form-control" id="exampleFormControlInput1" placeholder="$$$$$$" />
                        </div>







                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Numero de lote</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option>NO.1</option>
                                <option>NO.2</option>
                                <option>NO.3</option>
                                <option>NO.4</option>
                                <option>NO.5</option>
                            </select>
                            <div class="invalid-feedback">More example invalid feedback text</div>
                        </div>




                        <div class="form-group">
                            <label for="exampleFormControlInput1">Ubicacion del terreno </label>
                            <input type="Costo" class="form-control" id="exampleFormControlInput1" placeholder="Localizador" />
                        </div>



                        <div class="form-group">
                            <label for="exampleFormControlTextarea1">Descricion del terreno</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            <div class="invalid-feedback">More example invalid feedback text</div>
                        </div>





                        <div class="custom-file">
                            <input type="file" class="custom-file-input" id="validatedCustomFile" required />
                            <label class="custom-file-label" for="validatedCustomFile">subir imagenes</label>
                            <div class="invalid-feedback">Example invalid custom file feedback</div>

                        </div>








                        <div class="form-group">
                            <label for="exampleFormControlSelect2">Lincencia de espacio en el sistema</label>
                            <select multiple class="form-control" id="exampleFormControlSelect2">
                                <option>6 meses: USD 100  </option>
                                <option>1 año:   USD 180 </option>

                            </select>
                            <div class="invalid-feedback">More example invalid feedback text</div>
                        </div>






                        <div class="custom-control custom-checkbox mb-3">
                            <input type="checkbox" class="custom-control-input" id="customControlValidation1" required />
                            <label class="custom-control-label" for="customControlValidation1">Acepto términos y condiciones </label>
                            <div class="invalid-feedback">Example invalid feedback text</div>
                        </div>



                        <div class="form-group">
                            <select class="custom-select" required>
                                <option value="">confime su numero de lote </option>
                                <option value="1">uno</option>
                                <option value="2">dos</option>
                                <option value="3">tres</option>
                                <option value="2">cuatro</option>
                                <option value="3">cinco</option>


                            </select>
                            <div class="invalid-feedback">Example invalid custom select feedback</div>
                        </div>





                        <button type="submit" class="btn btn-primary">Enviar</button>





                    </form>




                </div>






            </div>


        );
    }
}

export default Menusecundario;