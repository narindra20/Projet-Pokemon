import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonInfo() {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon/charmander")
      .then((response) => {
        setPokemon(response.data);
      })
      .catch((error) => {
        console.error("Erreur Axios :", error);
      });
  }, []);

  if (!pokemon) return <p>Chargement...</p>;

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Poids : {pokemon.weight}</p>
      <p>Type : {pokemon.types.map(t => t.type.name).join(", ")}</p>
    </div>
  );
}

export default PokemonInfo;
