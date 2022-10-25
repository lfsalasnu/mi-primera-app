import React,{Component} from "react";

class Formulario extends Component{
    constructor(){
        super();
        this.state={
            titulo:'',
            descripcion:'',
            imagen:''
        }
    }
    render(){
        return(
            <div className="card w-50 m-auto">
                <h1 className="ps-4">  Nueva Tarjeta</h1>
                <form className="card-body">
                    <div className="form-group">
                        <input className="form-control" type="text" placeholder="Titulo Tarjeta" name="titulo"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Descripción Tarjeta" name="descripcion"/>
                    </div>
                    <div className="form-group">
                        <input className="form-control mt-3" type="text" placeholder="Imagen Tarjeta" name="imagen"/>
                    </div>
                </form>

            </div>
        );
    }
}

export default Formulario