import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://swapi.dev/api/'
})

export const api = {
   getCharacters() {
      return instance.get<DataResponseType>(`people`)
   },
   getCharactersByName(value: string) {
      return instance.get(`people/?search=${value}`)
   },
   getMoreCharacters(page: number) {
      return instance.get(`people/?page=${page}`)
   }
}

type DataResponseType = {
   count: number
   next: string | null
   previous: string | null
   results: CharacterType[]
}

export type CharacterType = {
   birth_year: string
   created: string
   edited: string
   eye_color: string
   films: Array<string>
   gender: string,
   hair_color: string
   height: string
   homeworld: string
   mass: string
   name: string
   skin_color: string
   species: Array<string>
   starships: Array<string>
   vehicles: Array<string>
}