// import React, { useState } from "react";
// import { FiSearch, FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
// import Pokemon from "../Image-Pokemon/Pokemon.png"
// import Pokemon1 from "../Image-Pokemon/Pokemon 1.png"
// import Pokemon2 from "../Image-Pokemon/Pokemon 2.png"
// import Pokemon3 from "../Image-Pokemon/Pokemon 3.png"
// import Pichu from "../Image-Pokemon/Pichu.png"
// import Pikachu from "../Image-Pokemon/Pikachu.png"
// import Raichu from "../Image-Pokemon/Raichu.png"
// import Salameche from "../Image-Pokemon/Salameche.png"
// import Reptincel from "../Image-Pokemon/Reptincel.png"
// import Dracafeu from "../Image-Pokemon/Dracafeu.png"


// export default function Navbar() {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [isSidebarOpen] = useState(true);
  
//   return (
//     <div className="flex bg-white overflow-hidden">
//       <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col z-40`}>   
//       <div 
//   className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col absolute inset-0 z-0`}
//   style={{
//     backgroundImage: `url(${Pokemon})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",
//     backgroundRepeat: "no-repeat",
//     height: '176vh',
//   }}
// >

//   <div className="relative z-10">
//     <div className="p-4 flex items-center justify-between border-b border-yellow-300">
//       {isSidebarOpen ? (
//         <div className="flex items-center gap-2">
//           <img
//             src="https://img.pokemondb.net/sprites/home/normal/pikachu.png"
//             alt="Pikachu"
//             className="w-8 h-8"
//           />
//           <h1 className="text-lg font-bold">Pokédex</h1>
//         </div>
//       ) : (
//         <img
//           src="https://img.pokemondb.net/sprites/home/normal/pikachu.png"
//           alt="Pikachu"
//           className="w-8 h-8 mx-auto"
//         />
//       )}
//     </div>
//     {/* Menu navigation */}
//     <nav className="flex-1 relative z-10">
//           <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen}/>
//           <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen} active/>
//           <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen} />
//           <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
//         </nav>
//    </div>
//  </div>
// </div>


//       <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}> 
//         {/*barre de recherche*/}
//         <div className="bg-blue-50 bg-opacity-70 py-4 w-full px-6 sticky top-0 z-40 backdrop-blur-sm">
//           <div className="max-w-4xl mx-auto">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Rechercher un Pokémon..."
//                 className="w-full bg-gray-100 text-black px-4 pl-10 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-400 border border-gray-600"
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//               <FiSearch className="absolute left-3 top-3.5 text-gray-400" size={18} />
//             </div>
//           </div>
//         </div>

// {/**Contenu*/}
// <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}> 
//   <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
//     {[
//        {
//         id: 4,
//         name: "Salamèche",
//         image: Salameche,
//         types: ["Feu"],
//       },
//       {
//         id: 5,
//         name: "Reptincel",
//         image: Reptincel,
//         types: ["Feu"],
//       },
//       {
//         id: 6,
//         name: "Dracafeu",
//         image: Dracafeu,
//         types: ["Feu", "Vol"],
//       },
      
//       {
//         id: 1,
//         name: "Bulbizarre",
//         image: Pokemon1,
//         types: ["Herbe", "Poison"],
//       },

//       {
//         id: 2,
//         name: "Ivysaure",
//         image: Pokemon2,
//         types: ["Herbe", "Poison"],
//       },

//       {
//         id: 3,
//         name: "Florizarre",
//         image: Pokemon3,
//         types: ["Herbe", "Poison"],
//       },
//       {
//         id: 172,
//         name: "Pichu",
//         image: Pichu,
//         types: ["Électrik"],
//       },

//       {
//         id: 25,
//         name: "Pikachu",
//         image: Pikachu,
//         types: ["Électrik"],
//       },

//       {
//         id: 26,
//         name: "Raichu",
//         image: Raichu,
//         types: ["Électrik"],
//       }, 
      
//     ].map(pokemon => (
//       <div key={pokemon.id} className="bg-blue-50 bg-opacity-70 rounded-xl p-2 h-80 hover:shadow-lg transition-shadow">
//         <img src={pokemon.image} alt={pokemon.name} className="w-full h-45 object-contain"/>
//         <div className="mb-5 ml-4">
//           <p className="text-gray-400 text-sm">#{pokemon.id.toString().padStart(3, '0')}</p>
//           <h3 className="text-lg font-bold text-yellow-400">{pokemon.name}</h3>
//           <div className="flex gap-2 mt-2">
//             {pokemon.types.map(type => (
//               <span 
//                 key={type}
//                 className={`text-sm px-3 py-1 rounded-full text-white ${
//                     type === "Herbe"
//                       ? "bg-green-500"
//                       : type === "Poison"
//                       ? "bg-purple-500"
//                       : type === "Feu"
//                       ? "bg-orange-500"
//                       : type === "Eau"
//                       ? "bg-blue-500"
//                       : type === "Électrik"
//                       ? "bg-yellow-400 text-black"
//                       : type === "Fée"
//                       ? "bg-pink-400"
//                       : type === "Spectre"
//                       ? "bg-indigo-600"
//                       : type === "Vol"
//                       ? "bg-blue-800"
//                       : "bg-gray-500"
//                   }`}
//               >
//                 {type}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>
//       </div>
//     </div>
//   );
// }

// // Composant d'item de navigation 
// function NavItem({ icon, text, isOpen, active = false }) {
//   return (
//     <div className={`flex items-center p-3 mx-2 my-1 rounded-md ${active ? 'bg-gray-800' : 'hover:bg-gray-800'} cursor-pointer`}>
//       <span className="flex-shrink-0">{icon}</span>
//       {isOpen && <span className="ml-3">{text}</span>}
//     </div>
//   );
// }


import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiSearch, FiHome, FiStar, FiList, FiSettings } from "react-icons/fi";
import Pokemon from "../Image-Pokemon/Pokemon.png";

export default function Navbar() {
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
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col z-40`}>
        <div
          className={`${isSidebarOpen ? 'w-64' : 'w-20'} text-white transition-all duration-300 flex flex-col absolute inset-0 z-0`}
          style={{
            backgroundImage: `url(${Pokemon})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            height: '176vh',
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
            <nav className="flex-1 relative z-10">
              <NavItem icon={<FiHome size={20} />} text="Accueil" isOpen={isSidebarOpen} />
              <NavItem icon={<FiList size={20} />} text="Pokédex" isOpen={isSidebarOpen} active />
              <NavItem icon={<FiStar size={20} />} text="Favoris" isOpen={isSidebarOpen} />
              <NavItem icon={<FiSettings size={20} />} text="Paramètres" isOpen={isSidebarOpen} />
            </nav>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className={`flex-1 flex flex-col ${isSidebarOpen ? 'ml-1' : 'ml-20'}`}>
        {/* Search bar */}
        <div className="bg-blue-50 bg-opacity-70 py-4 w-full px-6 sticky top-0 z-40 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto">
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

        {/* Pokémons grid */}
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {filteredPokemons.map((pokemon) => (
            <div
              key={pokemon.id}
              className="bg-blue-50 bg-opacity-70 rounded-xl p-2 h-80 hover:shadow-lg transition-shadow"
            >
              <img
                src={pokemon.image}
                alt={pokemon.name}
                className="w-full h-45 object-contain"
              />
              <div className="mb-5 ml-4">
                <p className="text-gray-400 text-sm">
                  #{pokemon.id.toString().padStart(3, "0")}
                </p>
                <h3 className="text-lg font-bold text-yellow-400 capitalize">
                  {pokemon.name}
                </h3>
                <div className="flex gap-2 mt-2">
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Composant d'item de navigation
function NavItem({ icon, text, isOpen, active = false }) {
  return (
    <div
      className={`flex items-center p-3 mx-2 my-1 rounded-md ${
        active ? "bg-gray-800" : "hover:bg-gray-800"
      } cursor-pointer`}
    >
      <span className="flex-shrink-0">{icon}</span>
      {isOpen && <span className="ml-3">{text}</span>}
    </div>
  );
}
