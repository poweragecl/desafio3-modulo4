import { useState } from "react";

const Formulario = ({onSubmit, setAlert})=> {

    const [colaborador, setColaborador] = useState({
        nombre: "",
        correo: "",
        edad: "",
        cargo: "",
        telefono: "",
    });   


    const handleChange = (e) => {
        setColaborador({
            ...colaborador,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(colaborador.nombre ==="" || colaborador.correo ==="" || colaborador.edad ==="" || colaborador.cargo ==="" || colaborador.telefono === "" ){
            setAlert({
                msg: "Completa todos los campos",
                color: "danger",
            })
            return;
        }
        
        setAlert({
            msg: "Agregado exitosamente",
            color: "success",
        })

        onSubmit(colaborador);

        setColaborador({
            nombre: "",
            correo: "",
            edad: "",
            cargo: "",
            telefono: "",
        });
    }

    return(
        <>       

            <h2 className="mb-4">Agregar colaborador</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-3">     
                    <input
                    placeholder="Nombre del colaborador"
                    type="text"
                    className="form-control"
                    onChange ={handleChange}
                    name="nombre"
                    value= {colaborador.nombre}
                    />
                </div>

                <div className="mb-3">
                    <input
                    placeholder="Email del colaborador"
                    type="email"
                    className="form-control"
                    onChange ={handleChange}
                    name="correo"
                    value= {colaborador.correo}
                    />
                </div>

                <div className="mb-3">
                    <input
                    placeholder="Edad del colaborador"
                    type="text"
                    className="form-control"
                    onChange ={handleChange}
                    name="edad"
                    value= {colaborador.edad}
                    />
                </div>

                <div className="mb-3">
                    <input
                    placeholder="Cargo del colaborador"
                    type="text"
                    className="form-control"
                    onChange ={handleChange}
                    name="cargo"
                    value= {colaborador.cargo}
                    />
                </div>

                <div className="mb-3">
                    <input
                    placeholder="Teléfono del colaborador"
                    type="text"
                    className="form-control"
                    onChange ={handleChange}
                    name="telefono"
                    value= {colaborador.telefono}
                    />
                </div>

                <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
                </div>
                
            </form>
        
        </>
    )
}

export default Formulario