// Importamos lo necesario de React
import { createContext, ReactNode, useMemo, useReducer } from "react";

// Importamos tipos, reducer y estado inicial desde el reducer
import {
  BudgetActions,    // Tipos de acciones que el reducer puede manejar
  budgetReducer,    // Función reductora que actualiza el estado
  BudgetState,      // Tipo del estado global
  initialState,     // Estado inicial del contexto
} from "../reducers/budget-reducer";

// Tipamos los valores que tendrá el contexto: el estado y la función para despachar acciones
type BudgetContextProps = {
  state: BudgetState;
  dispatch: React.Dispatch<BudgetActions>; 
  totalExpenses: number
  remainingBudget: number
};

// Tipamos los props que espera el Provider, que básicamente son los componentes hijos
type BudgetProviderProps = {
  children: ReactNode;
};




// Creamos el contexto. Le pasamos `null!` temporalmente para evitar errores de tipado
// Aunque lo ideal sería crear un contexto por defecto más seguro 
export const BudgetContext = createContext<BudgetContextProps>(null!);

// Creamos el componente Provider. Este componente envolverá a nuestra aplicación
// y le dará acceso al estado global y dispatch a cualquier componente que lo necesite
export const BudgetProvider = ({ children }: BudgetProviderProps) => {
  // Inicializamos useReducer con el reducer y su estado inicial
  const [state, dispatch] = useReducer(budgetReducer, initialState);

  const totalExpenses = useMemo(
    () => state.expenses.reduce((total, expense) => expense.amount + total, 0),
    [state.expenses]
  );

  const remainingBudget = state.budget - totalExpenses



  // Retornamos el Provider con el value necesario para que los componentes hijos tengan acceso al estado global
  return (
    <BudgetContext.Provider value={{ state, dispatch, totalExpenses, remainingBudget}}>
      {children}
    </BudgetContext.Provider>
  );
};
