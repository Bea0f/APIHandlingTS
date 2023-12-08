import { IAbilities } from "./modules/IAbilities";
import { IPokemon } from "./modules/IPokemon";
import "./scss/style.scss";
import { findUrl, searchAbility, searchPokemon } from "./services/pokeService";

document
  .getElementById("searchForm")
  ?.addEventListener("submit", async (e: SubmitEvent) => {
    e.preventDefault();
    const searchText = (
      document.getElementById("searchInput") as HTMLInputElement
    ).value;

    console.log(searchText);

    const pokemons = await searchPokemon(searchText);

    createHtmlforP(pokemons);
  });

const container = document.getElementById("searchResult") as HTMLDivElement;

const createHtmlforP = async (pokemons: IPokemon) => {
  container.innerHTML = "";
  const pokemonContainer = document.createElement("div");
  const id = document.createElement("h3");
  const name = document.createElement("h2");
  const base_experience = document.createElement("h4");
  id.innerHTML = "ID: " + pokemons.id.toString();
  name.innerHTML = "Name: " + pokemons.name;
  base_experience.innerHTML =
    "Base Experience: " + pokemons.base_experience.toString();
  console.log(id, name, base_experience);

  //Kolla efter abilities
  const abilityBtn = document.createElement("button");
  const abilityUrl = findUrl(pokemons.abilities);
  for (let i = 0; i < abilityUrl.length; i++) {
    const ability = await searchAbility(abilityUrl[i]);
    abilityBtn.innerHTML = "Ability";
    abilityBtn.addEventListener("click", () => {
      createHtmlForA(ability);
    });
  }

  pokemonContainer.appendChild(name);
  pokemonContainer.appendChild(id);
  pokemonContainer.appendChild(base_experience);
  pokemonContainer.appendChild(abilityBtn);
  container.appendChild(pokemonContainer);
};

const createHtmlForA = (ability: IAbilities) => {
  console.log(ability);
  const abilityContainer = document.createElement("div");
  const id = document.createElement("h3");
  const name = document.createElement("h2");

  abilityContainer.innerHTML = "";

  id.innerHTML = "Ability ID: " + ability.id.toString();
  name.innerHTML = "Ablity Name: " + ability.name;

  abilityContainer.appendChild(name);
  abilityContainer.appendChild(id);
  container.appendChild(abilityContainer);
};
