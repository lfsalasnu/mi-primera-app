import React, { Component } from "react";
//import img from "./imagen1.jpg"
class Tarjeta extends Component {
    

    render() {
          
        
          
          //console.log(datos);
            
        
        return (
            <div className="col-sm-4 mt-4">
                <div className="card">
                    <img height="300" width="auto" src={process.env.PUBLIC_URL+this.props.imagen} className="card-img-top" alt={this.props.imagen}/>
                        <div className="card-body">
                            <h5 className="card-title">{this.props.titulo}</h5>
                            <p className="card-text">{this.props.descripcion}</p>
                            <a href="#" className="btn btn-primary me-3">Editar</a>
                            <a href="#" className="btn btn-danger">Eliminar</a>
                        </div>
                </div>
            </div>
        );
    }
}

export default Tarjeta;