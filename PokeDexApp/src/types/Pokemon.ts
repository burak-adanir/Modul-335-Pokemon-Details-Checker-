import Element from "./Element"

type Pokemon = {
    id?: number,
    name: string,
    type: Element[]
    base: PokemonStats
}

export default Pokemon