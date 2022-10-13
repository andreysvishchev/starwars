const initState = {
   status: false,
   character: {
      birth_year: '',
      eye_color: '',
      gender: '',
      hair_color: '',
      height: '',
      mass: '',
      name: '',
      skin_color: '',
   }
}

export const modalReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
   switch (action.type) {
      case "OPEN-MODAL":
         return {...state, status: action.status, character: action.character}
      case "CLOSE-MODAL":
         return {...state, status: action.status}
      default:
         return state
   }
}

export const openModal = (status: boolean, character: CharacterType) => {
   return {type: 'OPEN-MODAL', status, character} as const
}
export const closeModal = (status: boolean) => {
   return {type: 'CLOSE-MODAL', status} as const
}

type InitStateType = typeof initState
type ActionsType = ReturnType<typeof openModal> | ReturnType<typeof closeModal>
export type CharacterType = {
   birth_year: string
   eye_color: string
   gender: string
   hair_color: string
   height: string
   mass: string
   name: string
   skin_color: string
}