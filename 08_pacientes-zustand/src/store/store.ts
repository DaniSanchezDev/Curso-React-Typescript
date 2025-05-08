import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";
import { v4 as uuidv4 } from "uuid";
import { DraftPatient, Patient } from "../types";

// Tipamos el store
type PatientState = {
  patients: Patient[];
  activeId: Patient["id"] | null;
  addPatient: (data: DraftPatient) => void;
  deletePatient: (id: Patient["id"]) => void;
  getPatientById: (id: Patient["id"]) => void;
  updatePatient: (data: DraftPatient) => void
};

const createPatient = (patient: DraftPatient): Patient => {
  return { ...patient, id: uuidv4() };
};

// Crear el Store de Zustand
export const usePatientStore = create<PatientState>()(
  devtools(
    persist((set) => ({
    patients: [],
    activeId: "",
    addPatient: (data) => {
      const newPatient = createPatient(data);

      // setear / modificar el state
      set((state) => ({
        // Recuperamos el state y le pasamos el nuevo paciente
        patients: [...state.patients, newPatient],
      }));
    },

    deletePatient: (id) => {
      set((state) => ({
        patients: state.patients.filter((patient) => patient.id !== id),
      }));
    },

    getPatientById: (id) => {
      set(() => ({
        activeId: id,
      }));
    },

    updatePatient: (data) => {
        set((state) => ({
            patients: state.patients.map(patient => patient.id === state.activeId ? {id: state.activeId, ...data } : patient),
            activeId: null
        }))
    }
  }),{
    name: 'patient-storage',
    // para guardar mientras la ventana está abierta
    // storage: createJSONStorage(() => sessionStorage)
  })
));
