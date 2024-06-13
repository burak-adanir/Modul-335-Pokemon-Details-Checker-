import { AxiosInstance, AxiosResponse } from "axios";
import Pokemon from "../Types/Pokemon";
import { defaultAxiosInstance } from "./Api";

/**
 * Service for manipulating Pokemon data
 * @param api An instance of Axios. Uses defaultAxiosInstance if no instance is provided.
 * @returns An object with methods to perform CRUD operations on Pokemon data
 */
const PokemonService = (api: AxiosInstance = defaultAxiosInstance) => ({
    /**
     * Fetches all Pokemon
     * @returns A promise resolving to an Axios response containing a list of Pokemon
     */
    getAll: async (): Promise<Pokemon[]> => {
        try {
            const response = await api.get<Pokemon[]>("/pokemons");
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch all Pokemon: ${error}`);
        }
    },

    /**
     * Fetches a Pokemon by its Pokedex number (ID)
     * @param id The ID of the Pokemon to fetch
     * @returns A promise resolving to an Axios response containing the requested Pokemon
     */
    getById: async (id: number): Promise<Pokemon> => {
        try {
            const response = await api.get<Pokemon>(`/pokemons/${id}`);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to fetch Pokemon with ID ${id}:  error}`);
        }
    },

    /**
     * Creates a new Pokemon
     * @param pokemon The Pokemon data to create
     * @returns A promise resolving to an Axios response containing the created Pokemon
     */
    create: async (pokemon: Pokemon): Promise<Pokemon> => {
        try {
            const response = await api.post<Pokemon>("/pokemons", pokemon);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to create Pokemon: ${error}`);
        }
    },

    /**
     * Updates an existing Pokemon
     * @param id The ID of the Pokemon to update
     * @param pokemon The updated Pokemon data
     * @returns A promise resolving to an Axios response containing the updated Pokemon
     */
    update: async (id: number, pokemon: Pokemon): Promise<Pokemon> => {
        try {
            const response = await api.put<Pokemon>(`/pokemons/${id}`, pokemon);
            return response.data;
        } catch (error) {
            throw new Error(`Failed to update Pokemon with ID ${id}: ${error}`);
        }
    },

    /**
     * Deletes a Pokemon by its ID
     * @param id The ID of the Pokemon to delete
     * @returns A promise resolving to an Axios response confirming the deletion
     */
    delete: async (id: number): Promise<void> => {
        try {
            await api.delete(`/pokemons/${id}`);
        } catch (error) {
            throw new Error(`Failed to delete Pokemon with ID ${id}: ${error}`);
        }
    }
});

export default PokemonService;
