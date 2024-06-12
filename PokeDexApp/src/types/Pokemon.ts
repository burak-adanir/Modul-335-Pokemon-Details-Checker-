import Element from "./Element"
import PokemonStats from "./PokemonStats"

type Pokemon = {
    id?: number,
    name: {
        english: string,
        japanese: string,
        chinese: string,
        french: string,
    },
    type: Element[]
    stats: PokemonStats
}

export default Pokemon