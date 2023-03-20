import Formulario from "./assets/components/Formulario"
import Header from "./assets/components/Header"
import ListadoPacientes from "./assets/components/ListadoPacientes"
import { useState, useEffect } from "react"

function App() {
  const [pacientes, setPacientes]= useState([]);
  const [paciente, setPaciente]= useState({});

  const eliminarPaciente= id =>{
    const pacientesActualizados= pacientes.filter(paciente=>paciente.id!==id)
    setPacientes(pacientesActualizados)
  }

  //Trae los item que tiene el localStorage
  useEffect(()=>{
    const obtenerLS=()=>{
      const pacientesLS= JSON.parse(localStorage.getItem('pacientes'))??[]
      setPacientes(pacientesLS)
    }
    obtenerLS()
  },[])

  useEffect(()=>{
    localStorage.setItem('paciente',JSON.stringify(pacientes))
  },[pacientes])

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>
      
    </div>
  )
}

export default App
