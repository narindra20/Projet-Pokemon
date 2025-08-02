import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
import Pokemon from "../Image-Pokemon/Pokemon.png"; // adapte le chemin

export default function PokemonDetails() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        setPokemon(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement du Pokémon :", error);
        setLoading(false);
      }
    };

    fetchPokemon();
  }, [id]);

  if (loading) return <div className="text-center mt-10">Chargement...</div>;
  if (!pokemon) return <div className="text-center mt-10">Pokémon non trouvé</div>;

  return (
    <div className="flex bg-white overflow-hidden min-h-screen">
      {/* Sidebar */}
      <div
        className={`${isSidebarOpen ? "w-64" : "w-20"} text-white transition-all duration-300 flex flex-col fixed h-full z-40 w-69`}
      >
        <div
          className="absolute inset-0 bg-blue opacity-70 z-10"
          style={{
            backgroundImage: `url(${Pokemon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
          }}
        />
        <div className="relative z-20 flex flex-col h-full w-full">
          <div className="p-4 flex items-center justify-between border-b border-yellow-300">
            {isSidebarOpen ? (
              <div className="flex items-center gap-2">
                <img
                  src="https://img.pokemondb.net/sprites/home/normal/pikachu.png"
                  alt="Pikachu"
                  className="w-8 h-8"
                />
                <h1 className="text-lg font-bold">Pokédex</h1>
              </div>
            ) : (
              <img
                src="https://img.pokemondb.net/sprites/home/normal/pikachu.png"
                alt="Pikachu"
                className="w-8 h-8 mx-auto"
              />
            )}
          </div>

          <nav className="flex-1 relative z-10 mt-6 text-gray-900 font-bold">
            <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen}/>
            <Link to="/" className="flex-1 relative z-10 mt-6">
            <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen}/>
            </Link>
            <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen}/>
            <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
          </nav>
        </div>
      </div>

      {/* Contenus de chaque Pokemon */}
      <main className="flex-1 flex flex-col p-6 overflow-auto max-w-4xl mx-auto ml-69">
        <h1 className="text-3xl font-bold capitalize text-center mb-4">
          {pokemon.name}
        </h1>

        <img
          src={pokemon.sprites.other["official-artwork"].front_default}
          alt={pokemon.name}
          className="w-60 h-60 mx-auto"
        />

        <p className="text-center mt-2 mb-4">
          ID : #{pokemon.id.toString().padStart(3, "0")}
        </p>

        {/* Types */}
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Types</h2>
          <ul className="flex gap-2 mt-2">
            {pokemon.types.map((typeInfo) => (
              <li
                key={typeInfo.type.name}
                className="px-3 py-1 rounded text-white capitalize"
                style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
              >
                {typeInfo.type.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Stats */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Statistiques</h2>
          <ul className="mt-2">
            {pokemon.stats.map((stat) => (
              <li
                key={stat.stat.name}
                className="flex justify-between border-b py-1 capitalize"
              >
                <span>{stat.stat.name}</span>
                <span>{stat.base_stat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Capacités */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Capacités</h2>
          <ul className="list-disc list-inside mt-2">
            {pokemon.abilities.map((abilityInfo) => (
              <li key={abilityInfo.ability.name} className="capitalize">
                {abilityInfo.ability.name}
              </li>
            ))}
          </ul>
        </div>

        {/* Taille & Poids */}
        <div className="mt-6">
          <p>
            <strong>Taille :</strong> {pokemon.height / 10} m
          </p>
          <p>
            <strong>Poids :</strong> {pokemon.weight / 10} kg
          </p>
        </div>

        {/* Sprites */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold">Sprites</h2>
          <div className="flex flex-wrap gap-4 mt-2">
            <img
              src={pokemon.sprites.front_default}
              alt="Front"
              className="w-20 h-20"
            />
            <img
              src={pokemon.sprites.back_default}
              alt="Back"
              className="w-20 h-20"
            />
            <img
              src={pokemon.sprites.front_shiny}
              alt="Shiny Front"
              className="w-20 h-20"
            />
            <img
              src={pokemon.sprites.back_shiny}
              alt="Shiny Back"
              className="w-20 h-20"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, text, isOpen, active = false }) {
  return (
    <div
      className={`flex items-center p-3 mx-2 my-1 rounded-md ${
        active ? "bg-yellow-300" : "hover:bg-yellow-300"
      } cursor-pointer`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}

function getTypeColor(type) {
  switch (type) {
    case "grass":
      return "#22c55e";
    case "poison":
      return "#a855f7";
    case "fire":
      return "#f97316";
    case "water":
      return "#3b82f6";
    case "electric":
      return "#facc15";
    case "fairy":
      return "#f472b6";
    case "ghost":
      return "#6366f1";
    case "flying":
      return "#1e40af";
    case "bug":
      return "#84cc16";
    case "normal":
      return "#9ca3af";
    case "ground":
      return "#ca8a04";
    case "psychic":
      return "#e879f9";
    case "rock":
      return "#a16207";
    case "ice":
      return "#06b6d4";
    case "dragon":
      return "#7c3aed";
    case "dark":
      return "#4b5563";
    case "steel":
      return "#94a3b8";
    case "fighting":
      return "#dc2626";
    default:
      return "#6b7280";
  }
}
