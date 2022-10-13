import {AnyAction, applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk, {ThunkDispatch} from "redux-thunk";
import {TypedUseSelectorHook, useSelector} from "react-redux";
import {charactersReducer} from "./characters-reducer";
import {appReducer} from "./app-reducer";
import {modalReducer} from "./modal-reducer";


const rootReducer = combineReducers({
   characters: charactersReducer,
   app: appReducer,
   modal: modalReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatchType = ThunkDispatch<AppStateType, any, AnyAction>
export const useAppSelector: TypedUseSelectorHook<AppStateType> = useSelector