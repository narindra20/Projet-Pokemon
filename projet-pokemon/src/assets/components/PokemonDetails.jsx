import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import { FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
import Pokemon from "../Image-Pokemon/Pokemon.png";
import { motion } from "framer-motion";

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
        className={`${isSidebarOpen ? "w-64" : "w-20"} text-white transition-all duration-300 flex flex-col fixed h-full z-40 w-75`}
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
            <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen} />
            <Link to="/" className="flex-1 relative z-10 mt-6">
              <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen} />
            </Link>
            <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen} />
            <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
          </nav>
        </div>
      </div>

      {/* Contenus de chaque Pokemon */}
      <main className="flex-1 flex justify-center items-center ml-64 px-4">
  <div className="bg-white rounded-3xl shadow-2xl px-10 py-8 w-full max-w-xl border border-gray-200 relative z-0">

    <motion.h1
      className="text-4xl font-extrabold capitalize text-center mb-6 text-gray-900"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {pokemon.name}
    </motion.h1>

    <motion.img
      src={pokemon.sprites.other["official-artwork"].front_default}
      alt={pokemon.name}
      className="w-56 h-56 mx-auto rounded-xl shadow-md mb-6"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />

    <p className="text-center text-gray-600 font-semibold mb-6 text-lg">
      ID : #{pokemon.id.toString().padStart(3, "0")}
    </p>

    {/* Types */}
    <div className="flex justify-center gap-3 flex-wrap mb-6">
      {pokemon.types.map((typeInfo) => (
        <span
          key={typeInfo.type.name}
          className="px-4 py-1 rounded-full text-white capitalize text-sm font-semibold shadow-md"
          style={{ backgroundColor: getTypeColor(typeInfo.type.name) }}
        >
          {typeInfo.type.name}
        </span>
      ))}
    </div>

    {/* Statistiques */}
<div className="mb-6">
  <h3 className="text-md font-bold text-gray-800 mb-4">Statistiques</h3>
  <ul className="space-y-4">
    {pokemon.stats.map((stat) => (
      <li key={stat.stat.name}>
        <div className="flex justify-between mb-1 text-sm text-gray-600">
          <span className="capitalize">{stat.stat.name}</span>
          <span className="font-semibold">{stat.base_stat}</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              backgroundColor: "#38bdf8", 
            }}
            initial={{ width: 0 }}
            animate={{ width: `${Math.min(stat.base_stat, 100)}%` }} 
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </li>
    ))}
  </ul>
</div>

    {/* Capacités */}
    <div className="mb-6">
      <h3 className="text-md font-bold text-gray-800 mb-2">Capacités</h3>
      <ul className="list-disc list-inside text-gray-700 text-sm">
        {pokemon.abilities.map((abilityInfo) => (
          <li key={abilityInfo.ability.name} className="capitalize">
            {abilityInfo.ability.name}
          </li>
        ))}
      </ul>
    </div>

    {/* Taille & Poids */}
    <div className="text-sm text-gray-700 mb-6">
      <p><strong>Taille :</strong> {pokemon.height / 10} m</p>
      <p><strong>Poids :</strong> {pokemon.weight / 10} kg</p>
    </div>

    {/* Sprites */}
    <div className="flex justify-center gap-4 flex-wrap">
      {[pokemon.sprites.front_default, pokemon.sprites.back_default, pokemon.sprites.front_shiny, pokemon.sprites.back_shiny].map(
        (sprite, index) =>
          sprite && (
            <motion.img
              key={index}
              src={sprite}
              alt={`sprite-${index}`}
              className="w-14 h-14 rounded-md shadow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            />
          )
      )}
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
