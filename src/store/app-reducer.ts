const initState = {
   status: 'idle' as StatusType,
}

export const appReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
   switch (action.type) {
      case "CHANGE-STATUS":
         return {...state, status: action.status}
      default:
         return state
   }
}

export const changeStatus = (status: StatusType) => {
   return {type: 'CHANGE-STATUS', status} as const
}

type StatusType = 'idle' | 'loading'
type InitStateType = {
   status: StatusType
}
type ActionsType = ReturnType<typeof changeStatus>