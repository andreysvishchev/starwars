import {api, CharacterType} from "../api/api";
import {Dispatch} from "redux";
import {changeStatus} from "./app-reducer";

const initState = {
   count: null,
   characters: []
}

export const charactersReducer = (state: InitStateType = initState, action: ActionsType): InitStateType => {
   switch (action.type) {
      case "ADD-COUNT":
         return {...state, count: action.count}
      case "ADD-CHAR":
         return {...state, characters: action.characters}
      case "ADD-MORE":
         return {...state, characters: state.characters.concat(action.characters)}
      default:
         return state
   }
}

const addCharacters = (characters: CharacterType[]) => {
   return {type: 'ADD-CHAR', characters} as const
}
const addCount = (count: number) => {
   return {type: 'ADD-COUNT', count} as const
}
const addMoreCharacters = (characters: CharacterType[]) => {
   return {type: 'ADD-MORE', characters} as const
}

export const getCharacters = () => (dispatch: Dispatch) => {
   dispatch(changeStatus('loading'))
   api.getCharacters()
      .then(res => {
         dispatch(addCharacters(res.data.results))
         dispatch(addCount(res.data.count))
      })
      .catch((e) => {
         console.log(e)
      })
      .finally(() => {
         dispatch(changeStatus('idle'))
      })
}
export const getCharacterByName = (value: string) => (dispatch: Dispatch) => {
   dispatch(changeStatus('loading'))
   api.getCharactersByName(value)
      .then(res => {
         dispatch(addCharacters(res.data.results))
      })
      .catch((e) => {
         console.log(e)
      })
      .finally(() => {
         dispatch(changeStatus('idle'))
      })
}
export const getMoreCharacters = (page: number) => (dispatch: Dispatch) => {
   api.getMoreCharacters(page)
      .then(res => {
         dispatch(addMoreCharacters(res.data.results))
      })
      .catch((e) => {
         console.log(e)
      })
}

type InitStateType = {
   count: null | number,
   characters: CharacterType[]
}

type ActionsType =
   ReturnType<typeof addCharacters> |
   ReturnType<typeof addCount> |
   ReturnType<typeof addMoreCharacters>
