import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
import { Link } from "react-router-dom";
import Pokemon from "../Image-Pokemon/Pokemon.png";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen] = useState(true);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=30");
        const results = res.data.results;

        const pokemonData = await Promise.all(
          results.map((pokemon) => axios.get(pokemon.url))
        );

        const pokemonsDetailed = pokemonData.map((res) => ({
          id: res.data.id,
          name: res.data.name,
          types: res.data.types.map(t => t.type.name),
          image: res.data.sprites.other["official-artwork"].front_default,
        }));

        setPokemons(pokemonsDetailed);
      } catch (err) {
        console.error("Erreur chargement Pokémons:", err);
      }
    };

    fetchPokemons();
  }, []);

  const filteredPokemons = pokemons.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="flex bg-white overflow-hidden">
      {/*Barre à gauche*/}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col z-40`}>
        <div
          className="absolute inset-0 opacity-70 z-10"
          style={{
            backgroundImage: `url(${Pokemon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: '47vh',
            position:'fixed',
          }}
        />
        <div className="fixed z-10 flex flex-col h-full w-65">
          <div className="p-4 flex items-center justify-between border-b border-yellow-300 w-69">
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
          <nav className="flex-1 relative z-60 text-gray-900 font-bold">
            <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen} />
            <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen} active />
            <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen} />
            <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
          </nav>
        </div>
      </div>

      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}>
        <div className="bg-blue-50 bg-opacity-70 py-4 w-244 px-10 top-0 z-40 backdrop-blur-sm fixed ml-5">
          <div className="max-w-4xl mx-auto ml-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un Pokémon..."
                className="w-full bg-gray-100 text-black px-4 pl-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

        {/* Cartes Pokémons */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6 mt-20 ml-12">
          {filteredPokemons.map((pokemon) => (
            <Link
              to={`/pokemon/${pokemon.id}`}
              key={pokemon.id}
              className="bg-blue-50 bg-opacity-70 rounded-xl p-4 hover:shadow-lg transition-shadow flex flex-col items-center"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-full h-48 object-contain"
              />
              <div className="mt-4 w-full text-center">
                <p className="text-gray-400 text-sm">
                  #{pokemon.id.toString().padStart(3, "0")}
                </p>
                <h3 className="text-lg font-bold text-yellow-400 capitalize">{pokemon.name}</h3>
                <div className="flex justify-center gap-2 mt-2 flex-wrap">
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
              </div>
            </Link>
          ))}
        </div>
      </div>
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
