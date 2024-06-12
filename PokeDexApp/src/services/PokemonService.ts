import { AxiosInstance, AxiosResponse } from "axios"
import Pokemon from "../types/Pokemon"
import { defaultAxiosInstance } from "./Api"

const PokemonService = (api: AxiosInstance = defaultAxiosInstance) => ({

    getAll: async () : Promise<AxiosResponse<Pokemon[]>> => {
        const data = await api.get("/pokemons")
        return data
    },

    getById: async (id: number) : Promise<AxiosResponse<Pokemon>> => {
        const data = await api.get(`/pokemons/${id}`)
        return data
    },

    create: async (pokemon: Pokemon) : Promise<AxiosResponse<Pokemon>> => {
        const data  = await api.post("/pokemons", pokemon)
        return data
    },

    update: async (id: number, pokemon: Pokemon) : Promise<AxiosResponse<Pokemon>> => {
        const data = await api.put(`/pokemons/${id}`, pokemon)
        return data
    },
    
    delete: async (id: number) : Promise<AxiosResponse<any>> => {
        const data = await api.delete(`/pokemons/${id}`)
        return data
    }
})

export default PokemonService