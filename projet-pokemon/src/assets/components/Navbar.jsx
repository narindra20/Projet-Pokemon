import React, { useState } from "react";
import { FiSearch, FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
import Pokemon from "../Image-Pokemon/Pokemon.png"
import Pokemon1 from "../Image-Pokemon/Pokemon 1.png"
import Pokemon2 from "../Image-Pokemon/Pokemon 2.png"
import Pokemon3 from "../Image-Pokemon/Pokemon 3.png"
import Pichu from "../Image-Pokemon/Pichu.png"
import Pikachu from "../Image-Pokemon/Pikachu.png"
import Raichu from "../Image-Pokemon/Raichu.png"
import Pokemon4 from "../Image-Pokemon/Pokemon 4.png"
import Pokemon7 from "../Image-Pokemon/Pokemon 7.png"
import PiKachu from "../Image-Pokemon/PiKachu.png"
import Rondoudou from "../Image-Pokemon/Rondoudou.png"
import Ectoplasma from "../Image-Pokemon/Ectoplasma.png"
import Evoli from "../Image-Pokemon/Evoli.png"
import Ronflex from "../Image-Pokemon/Ronflex.png"
import Mewtow from "../Image-Pokemon/Mewtow.png"

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSidebarOpen] = useState(true);
  
  return (
    <div className="flex bg-gray-900 overflow-hidden">
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col z-40`}>   
      <div 
  className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col absolute inset-0 z-0`}
  style={{
    backgroundImage: `url(${Pokemon})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: '174vh',
  }}
>

  <div className="relative z-10">
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
    {/* Menu navigation */}
    <nav className="flex-1 relative z-10">
          <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen} active />
          <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen} />
          <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen} />
          <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
        </nav>
   </div>
 </div>
</div>

    
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}> 
        {/*barre de recherche*/}
        <div className="bg-gray-800 bg-opacity-70 py-4 w-full px-6 sticky top-0 z-40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Rechercher un Pokémon..."
                className="w-full bg-gray-950 text-white px-4 pl-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <FiSearch className="absolute left-3 top-3.5 text-gray-400" size={18} />
            </div>
          </div>
        </div>

{/**Contenu*/}
<div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}> 
  <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
    {[
      {
        id: 1,
        name: "Bulbizarre",
        image: Pokemon1,
        types: ["Herbe", "Poison"],
      },

      {
        id: 2,
        name: "Ivysaure",
        image: Pokemon2,
        types: ["Herbe", "Poison"],
      },

      {
        id: 3,
        name: "Florizarre",
        image: Pokemon3,
        types: ["Herbe", "Poison"],
      },
      {
        id: 172,
        name: "Pichu",
        image: Pichu,
        types: ["Électrik"],
      },

      {
        id: 25,
        name: "Pikachu",
        image: PiKachu,
        types: ["Électrik"],
      },

      {
        id: 26,
        name: "Raichu",
        image: Raichu,
        types: ["Électrik"],
      },
      {
        id: 39,
        name: "Rondoudou",
        image: Rondoudou,
        types: ["Fée", "Normal"],
      },
      {
        id: 94,
        name: "Ectoplasma",
        image: Ectoplasma,
        types: ["Spectre", "Poison"],
      },
      {
        id: 133,
        name: "Évoli",
        image: Evoli,
        types: ["Normal"],
      },
      {
        id: 143,
        name: "Ronflex",
        image: Ronflex,
        types: ["Normal"],
      },
      {
        id: 150,
        name: "Mewtwo",
        image: Mewtow,
        types: ["Psy"],
      },
  
    ].map(pokemon => (
      <div key={pokemon.id} className="bg-gray-800 bg-opacity-70 rounded-xl p-2 h-80 hover:shadow-lg transition-shadow">
        <img src={pokemon.image} alt={pokemon.name} className="w-full h-32 object-contain"/>
        <div className="mt-12 ml-4">
          <p className="text-gray-400 text-sm">#{pokemon.id.toString().padStart(3, '0')}</p>
          <h3 className="text-lg font-bold text-yellow-400">{pokemon.name}</h3>
          <div className="flex gap-2 mt-2">
            {pokemon.types.map(type => (
              <span 
                key={type}
                className={`text-sm px-3 py-1 rounded-full text-white ${
                    type === "Herbe"
                      ? "bg-green-500"
                      : type === "Poison"
                      ? "bg-purple-500"
                      : type === "Feu"
                      ? "bg-orange-500"
                      : type === "Eau"
                      ? "bg-blue-500"
                      : type === "Électrik"
                      ? "bg-yellow-400 text-black"
                      : type === "Fée"
                      ? "bg-pink-400"
                      : type === "Spectre"
                      ? "bg-indigo-600"
                      : type === "Psy"
                      ? "bg-pink-600"
                      : "bg-gray-500"
                  }`}
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </div>
    ))}
  </div>
</div>
      </div>
    </div>
  );
}

// Composant d'item de navigation 
function NavItem({ icon, text, isOpen, active = false }) {
  return (
    <div className={`flex items-center p-3 mx-2 my-1 rounded-md ${active ? 'bg-gray-800' : 'hover:bg-gray-800'} cursor-pointer`}>
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}


