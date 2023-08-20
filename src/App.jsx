import { useState } from 'react'
import './App.css'
import Alert from './components/Alert'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import { BaseColaboradores } from './data/BaseColaboradores'
import Buscador from './components/Buscador'

function App() {

  const [alert, setAlert] = useState({msg:"", color: ""});
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const filteredColaboradores = colaboradores.filter(c => {
    if(c.nombre.toLowerCase().includes(search.toLowerCase()) ||
    c.correo.toLowerCase().includes(search.toLowerCase()) ||
    c.edad.toLowerCase().includes(search.toLowerCase()) ||
    c.cargo.toLowerCase().includes(search.toLowerCase()) ||
    c.telefono.toLowerCase().includes(search.toLowerCase())){
      return true;
    }

    return false;

  })

const handleSubmit = (nuevoColaborador) => {
  const colaboradorConId = {...nuevoColaborador, id: colaboradores.length +1 }

  setColaboradores([...colaboradores , colaboradorConId])

}

  return (
    <>

      <div className="container-fluid">
        <div className="row mb-4">
           
            <div className="col-md-8">
              <h1 className="h1">Lista de Colaboradores</h1>
              <Buscador onChange={handleChange} search={search}></Buscador>
              <Listado colaboradores={filteredColaboradores}></Listado>
            </div>

            <div className="col-md-4">
              <Formulario onSubmit={handleSubmit} setAlert={setAlert}></Formulario>
              {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
            </div>


            </div>
      </div>

    </>
  )
}

export default App
