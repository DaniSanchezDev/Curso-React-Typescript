import { categories } from "../data/categories";
import DatePicker from "react-datepicker";
import "react-calendar/dist/Calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import { ChangeEvent, useEffect, useState } from "react";
import { DraftExpense, Value } from "../types";
import ErrorMessage from "./ErrorMessage";
import { useBudget } from "../hooks/useBudget";

function ExpenseForm() {
  const [expense, setExpense] = useState<DraftExpense>({
    amount: 0,
    expenseName: "",
    category: "",
    date: new Date(),
  });
  const [error, setError] = useState("");
  const [previousAmount, setPreviousAmount] = useState(0)
  const { dispatch, state, remainingBudget} = useBudget();

  useEffect(() => {
    if (state.editingId) {
      const editingExpense = state.expenses.filter(
        (currentExpense) => currentExpense.id === state.editingId
      )[0];
      setExpense(editingExpense);
      setPreviousAmount(editingExpense.amount)
    }
  }, [state.editingId]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const isAmountField = ["amount"].includes(name);
    setExpense({
      ...expense,
      [name]: isAmountField ? +value : value,
    });
  };

  const handleChangeDate = (value: Value) => {
    setExpense({
      ...expense,
      date: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // validar todos los campos de formulario
    if (Object.values(expense).includes("")) {
      setError("Todos los campos son obligatorios");
      return;
    }

    // validar que no pasemos el limite de presupuesto
    if ((expense.amount - previousAmount) > remainingBudget) {
      setError("Presupuesto máximo alcanzado");
      return;
    }


    // Agregar o editar un gasto
    if (state.editingId) {
      dispatch({
        type: "update-expense",
        payload: { expense: { id: state.editingId, ...expense } },
      });
    } else {
      dispatch({ type: "add-expense", payload: { expense } });
    }

    // Reiniciar el state
    setExpense({
      amount: 0,
      expenseName: "",
      category: "",
      date: new Date(),
    });
    setPreviousAmount(0)
  };

  return (
    <form className=" space-y-5" onSubmit={handleSubmit}>
      <legend className=" uppercase text-center text-2xl font-black border-b-4 border-blue-500 py-2">
        {state.editingId ? 'Actualizar el gasto' : 'Nuevo gasto'}
      </legend>

      {error && <ErrorMessage>{error}</ErrorMessage>}
      <div className=" flex flex-col gap-2">
        <label htmlFor="expenseName" className=" text-xl">
          Nombre gasto:
        </label>
        <input
          type="text"
          id="expenseName"
          placeholder="Añade el nombre del gasto"
          className=" bg-slate-200 p-2"
          name="expenseName"
          onChange={handleChange}
          value={expense.expenseName}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="amount" className=" text-xl">
          Cantidad:
        </label>
        <input
          type="number"
          id="amount"
          placeholder="Añade la cantidad del gasto. Ej: 300"
          className=" bg-slate-200 p-2"
          name="amount"
          onChange={handleChange}
          value={expense.amount}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label htmlFor="category" className=" text-xl">
          Categoría:
        </label>
        <select
          id="category"
          className=" bg-slate-200 p-2"
          name="category"
          onChange={handleChange}
          value={expense.category}
        >
          <option value=""> -- Seleccione --</option>
          {categories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.name}
            </option>
          ))}
        </select>

        <div className=" flex flex-col gap-2">
          <label htmlFor="date" className=" text-xl">
            Fecha de Gasto:
          </label>
          <DatePicker
            className=" bg-slate-200 p-2 border-0 w-full"
            selected={expense.date}
            onChange={handleChangeDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <input
          type="submit"
          className=" bg-blue-600 cursor-pointer w-full p-2 text-white uppercase font-bold rounded-lg"
          value={state.editingId ? 'Guardar Cambios' : 'Registrar Gasto'}
        />
      </div>
    </form>
  );
}

export default ExpenseForm;
