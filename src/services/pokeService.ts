import { IAbilities } from "../modules/IAbilities";
import { IKeys } from "../modules/IKeys";
import { IPokemon } from "../modules/IPokemon";
import { get } from "./serviceBase";

export const searchPokemon = async (searchText: string): Promise<IPokemon>=> {
    const url = "https://pokeapi.co/api/v2/pokemon/" + searchText;
    const data = await get<IPokemon>(url);
    return data
}

export const findUrl = (abilities: IKeys[]): string[]=> {
    console.log(abilities);
    let urlArray = [];
    for(let i = 0; i < abilities.length; i++){
        const url = abilities[i].ability.url;
        console.log(url);
        
        urlArray.push(url);
    }
    console.log(urlArray);
    return urlArray;
}

export const searchAbility = async (url:string):Promise<IAbilities> =>{
    const data = await get<IAbilities>(url);
    return data;
}
