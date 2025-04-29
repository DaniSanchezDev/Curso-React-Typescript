import { useMemo, useState } from "react";
import { useBudget } from "../hooks/useBudget";


function BudgetForm() {

    const [budget, setBudget] = useState(0)
    const { dispatch } = useBudget()

    const handleChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        setBudget(e.target.valueAsNumber)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      // previene el comportamiento por defecto del formulario, que normalmente recargaría la página al enviarse. En React, manejamos el envío de forma manual.
      e.preventDefault();
      
      dispatch({ type: 'add-budget', payload:{budget}})
    }

    const isValid = useMemo(() => {
        // validación para el formulario, si es 0 o menor, o si se borra no se activa el botón
        return isNaN(budget) || budget <= 0
    }, [budget])

  return (
    <form className=" space-y-5" onSubmit={handleSubmit}>
      <div className="flex flex-col space-y-5 ">
        <label
          htmlFor="budget"
          className=" tex4xl text-blue-600 font-bold text-center"
        >Definir presupuesto</label>
        <input 
            id="budgetID"
            type="number"
            className=" w-full bg-white border border-gray-200 p-2"
            placeholder="Define tu presupuesto"
            name="budget"
            value={budget}
            onChange={handleChange}
        />
      </div>
      <input 
        type="submit" 
        value="Definir presupuesto"
        className=" bg-blue-600 hover:bg-blue-700 cursor-pointer w-full p-2 text-white font-black uppercase disabled:opacity-40"
        disabled={isValid}
        />
    </form>
  );
}

export default BudgetForm;
