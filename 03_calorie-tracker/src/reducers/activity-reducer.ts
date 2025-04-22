import { Activity } from "../types";

export type ActivityActions = 
  { type: "save-activity"; payload: { newActivity: Activity } } |
  { type: "set-activeId"; payload: { id: Activity['id'] } } 

type ActivityState = {
  activities: Activity[],
  activeId: Activity['id']
};

export const initialState: ActivityState = {
  // inicializamos como arreglo vacío
  activities: [],
  activeId:''
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
    if(action.type === 'set-activeId'){
      return {
        ...state,
        activeId:action.payload.id
      }
    }
    // Siempre debemos devolver el state
    return state
};
