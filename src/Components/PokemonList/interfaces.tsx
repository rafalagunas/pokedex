export interface IPokemon {
    name: String,
    url: String
}

export interface PokeResponse {
    count: Number,
    next: String,
    previous: null,
    results: IPokemon[]

}

export interface ICompletePokemon {
    name: string,
    height: number,
    id: number,
    weight: number,
    types: IType[],
    sprites: {
        front_default: string,
        front_shiny: string
    }

}

export interface IType {
    slot: number,
    type: IObjectType[]
}
export interface IObjectType {

    name: string,
    url: string

}