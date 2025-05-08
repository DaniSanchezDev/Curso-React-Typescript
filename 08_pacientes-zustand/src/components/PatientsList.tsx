import { usePatientStore } from "../store/store"
import PatientDetails from "./PatientDetails";

function PatientsList() {

  const patients = usePatientStore((state) => state.patients)

  console.log(patients);
  

  return (
    <div className=" md:w-1/2 lg:w-3/5 md:h-screen">
      {patients.length ? (
        <>
          <h2 className=" font-black text-3xl text-center">Listado de pacientes</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Administra tus {''}
            <span className=" text-indigo-600 font-bold"> pacientes y citas</span>
          </p>
          <div className="md:h-screen overflow-y-scroll">
          {patients.map( patient => (
            <PatientDetails 
              key={patient.id}
              patient={patient}
            />
          ))}
          </div>
        </>
      ): (
        <>
          <h2 className=" font-black text-3xl text-center">No hay pacientes</h2>
          <p className="text-xl mt-5 mb-10 text-center">
            Comienza agregando pacientes {''}
            <span className=" text-indigo-600 font-bold"> y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  )
}

export default PatientsList