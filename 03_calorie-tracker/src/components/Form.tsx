import React, { Dispatch, useState } from "react";
import { v4 as uuidv4} from 'uuid'
import { categories } from "../data/categories";
import { Activity } from "../types";
import { ActivityActions } from "../reducers/activity-reducer";

type FormProps = {
  dispatch: Dispatch<ActivityActions>
}

const initialForm : Activity = {
    id: uuidv4(),
    category: 1,
    name: "",
    calories: 0,
}

function Form({dispatch}: FormProps) {
  const [activity, setActivity] = useState<Activity>(initialForm);

  // Tipamos el event e para el select y para el input
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(e.target.id);
    console.log(isNumberField);

    setActivity({
      // Copiamos nuestro State
      ...activity,
      // Modificamos el state
      // Mantenemos la integridad en el State para respetar los tipos y que no cambie el state a string
      [e.target.id]: isNumberField ? +e.target.value : e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    dispatch({type: "save-activity", payload:{newActivity: activity}})

    setActivity({
      ...initialForm,
      // Generamos un id nuevo a cada registro
      id: uuidv4()
    })
  };

  const isValidActivity = () => {
    const { name, calories } = activity;

    return name.trim() !== "" && calories > 0;
  };

  return (
    <form
      className=" space-y-5 bg-white shadow p-10 rounded-lg"
      onSubmit={handleSubmit}
    >
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="category">Categoria:</label>
        <select
          className=" border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>

      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="name" className=" font-bold">
          {" "}
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Deporte, pesas, running, comida, etc"
          value={activity.name}
          onChange={handleChange}
        />
      </div>
      <div className=" grid grid-cols-1 gap-3">
        <label htmlFor="calories" className=" font-bold">
          {" "}
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>

      <input
        type="submit"
        className=" bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white
         uppercase cursor-pointer disabled:opacity-10"
        value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
        disabled={!isValidActivity()}
      />
    </form>
  );
}

export default Form;
