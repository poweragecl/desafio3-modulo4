const Listado = ({colaboradores}) => {
    return(
        <>
        <div className="table-responsive-md">
            <table className="table table-striped table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Correo</th>
                    <th>Edad</th>
                    <th>Cargo</th>
                    <th>Telefono</th>
                </tr>
            </thead>
            <tbody>
                
                {colaboradores.map(c => (
                        <tr key={c.id}>
                            <td>{c.nombre}</td>
                            <td>{c.correo}</td>
                            <td>{c.edad}</td>
                            <td>{c.edad}</td>
                            <td>{c.cargo}</td>
                            <td>{c.telefono}</td>
                        </tr>
                ))}

            </tbody>
            </table>
        </div>
        </>
    )
}

export default Listado