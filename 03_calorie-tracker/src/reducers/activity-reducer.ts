import { Activity } from "../types";

export type ActivityActions = {
  type: "save-activity";
  payload: { newActivity: Activity };
};

type ActivityState = {
  activities: Activity[];
};

export const initialState: ActivityState = {
  // inicializamos como arreglo vacío
  activities: [],
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el state
        

        return{
          // Copia del state. Se pone siempre
          ...state,
          // Y actualizamos activities
          activities:[...state.activities, action.payload.newActivity]
        }
        
    }

    // Siempre debemos devolver el state
    return state
};
