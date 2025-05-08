import { usePatientStore } from "../store/store"
import { Patient } from "../types"
import PatientDetailItem from "./PatientDetailItem"
import {toast} from 'react-toastify'

type PatientDetailsProps = {
    patient: Patient
}

function PatientDetails({patient}: PatientDetailsProps) {

    const delitePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        delitePatient(patient.id)
        toast.error('Paciente eliminado')
    }

  return (
    <div className=" mt-0 m-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl"> 
        <PatientDetailItem 
            label="ID:"
            data={patient.id}
        />
        <PatientDetailItem 
            label="Nombre:"
            data={patient.name}
        />
        <PatientDetailItem 
            label="Propietario"
            data={patient.caretaker}
        />
        <PatientDetailItem 
            label="email"
            data={patient.email}
        />
        <PatientDetailItem 
            label="Fecha de alta:"
            data={patient.date.toString()}
        />
        <PatientDetailItem 
            label="Síntomas"
            data={patient.symptoms}
        />

        <div className="flex flex-col md:flex-row gap-3 justify-between mt-10">
            <button 
                type="button"
                className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 font-bold rounded-lg text-white"
                onClick={() => getPatientById(patient.id)}
            >
                Editar
            </button>
            <button 
                type="button"
                className=" py-2 px-10 bg-red-600 hover:bg-red-700 font-bold rounded-lg text-white"
                onClick={handleClick}
            >
                Eliminar
            </button>
        </div>
    
    </div>
  )
}

export default PatientDetails