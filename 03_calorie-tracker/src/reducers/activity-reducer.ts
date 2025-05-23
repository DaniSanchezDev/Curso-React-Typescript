import { Activity } from "../types";

export type ActivityActions = 
  { type: "save-activity"; payload: { newActivity: Activity } } |
  { type: "set-activeId"; payload: { id: Activity['id'] } } | 
  { type: "delete-activity"; payload: { id: Activity['id'] } } |
  { type: "restart-app" } 

export type ActivityState = {
  activities: Activity[],
  activeId: Activity['id']
};

const localStorageActivities =  () : Activity[] => {
 const activities = localStorage.getItem('activities')
 return activities ? JSON.parse(activities) : []
}

export const initialState: ActivityState = {
  // inicializamos como arreglo vacío
  activities: localStorageActivities(),
  activeId:''
};

export const activityReducer = (
  state: ActivityState = initialState,
  action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        // Este código maneja la lógica para actualizar el state. Siempre escribir antes del return

        let updatedActivities : Activity[] = []
        if(state.activeId){
          updatedActivities = state.activities.map(activity => activity.id === state.activeId 
            ? action.payload.newActivity
            : activity)
            
        }else {
          updatedActivities = [...state.activities, action.payload.newActivity]
        }
        
        

        return{
          // Copia del state. Se pone siempre
          ...state,
          // Y actualizamos activities
          activities: updatedActivities,
          // Reiniciamos el id para no sobreescribir la que ya hemos editado
          activeId:''
        }
        
    }
    if(action.type === 'set-activeId'){

      
      return {
        ...state,
        activeId:action.payload.id
      }
    }

    if(action.type === 'delete-activity'){
      
      
      return{
        ...state,
        activities: state.activities.filter( activity => activity.id !== action.payload.id)
      }
    }


    if(action.type === 'restart-app'){
      return {
        activities: [],
        activeId: ''
      }
    }
    // Siempre debemos devolver el state
    return state
};
