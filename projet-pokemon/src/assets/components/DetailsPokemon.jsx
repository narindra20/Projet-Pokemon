// components/PokemonDetail.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

export default function PokemonDetail() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon({
          name: res.data.name,
          image: res.data.sprites.other["official-artwork"].front_default,
          types: res.data.types.map((t) => t.type.name),
          height: res.data.height,
          weight: res.data.weight,
          base_experience: res.data.base_experience,
          stats: res.data.stats.map(stat => ({
            name: stat.stat.name,
            value: stat.base_stat,
          })),
        });
      } catch (err) {
        console.error("Erreur chargement du Pokémon:", err);
      }
    };

    fetchPokemon();
  }, [id]);

  if (!pokemon) return <div className="p-10">Chargement...</div>;

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-blue-100 to-blue-300">
      <div className="max-w-xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <Link to="/" className="text-blue-500 hover:underline mb-4 inline-block">
          ← Retour au Pokédex
        </Link>
        <h1 className="text-4xl font-bold capitalize text-yellow-500 mb-4 text-center">
          {pokemon.name}
        </h1>
        <img
          src={pokemon.image}
          alt={pokemon.name}
          className="w-60 h-60 mx-auto mb-4"
        />
        <div className="flex justify-center gap-3 mb-4">
          {pokemon.types.map((type) => (
            <span
              key={type}
              className={`text-sm px-3 py-1 rounded-full text-white ${
                type === "grass"
                  ? "bg-green-500"
                  : type === "poison"
                  ? "bg-purple-500"
                  : type === "fire"
                  ? "bg-orange-500"
                  : type === "water"
                  ? "bg-blue-500"
                  : type === "electric"
                  ? "bg-yellow-400 text-black"
                  : type === "fairy"
                  ? "bg-pink-400"
                  : type === "ghost"
                  ? "bg-indigo-600"
                  : type === "flying"
                  ? "bg-blue-800"
                  : "bg-gray-500"
              }`}
            >
              {type}
            </span>
          ))}
        </div>
        <div className="text-gray-700 space-y-2 text-center">
          <p><strong>Taille :</strong> {pokemon.height / 10} m</p>
          <p><strong>Poids :</strong> {pokemon.weight / 10} kg</p>
          <p><strong>Expérience de base :</strong> {pokemon.base_experience}</p>
        </div>
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Statistiques :</h2>
          <ul className="space-y-1">
            {pokemon.stats.map((stat) => (
              <li key={stat.name} className="flex justify-between">
                <span className="capitalize">{stat.name}</span>
                <span className="font-bold">{stat.value}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
