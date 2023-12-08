import { IKeys } from "./IKeys";

export interface IPokemon {
    id: number;
    name: string;
    base_experience: number;
    abilities: IKeys[];
}