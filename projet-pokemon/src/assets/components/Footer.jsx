import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-2">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Section Pokédex */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Pokédex</h2>
          <p className="text-gray-400 text-sm">
            Une base de données des Pokémon avec infos, types et évolutions.
          </p>
        </div>

        {/* Section Navigation */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Navigation</h2>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><a href="/" className="hover:text-yellow-400">Accueil</a></li>
            <li><a href="/pokedex" className="hover:text-yellow-400">Pokédex</a></li>
            <li><a href="/favoris" className="hover:text-yellow-400">Favoris</a></li>
            <li><a href="/parametres" className="hover:text-yellow-400">Paramètres</a></li>
          </ul>
        </div>

        {/* Section Inscription + Réseaux */}
        <div>
          <h2 className="text-lg font-bold mb-3 text-yellow-400">Restez informé</h2>
          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Votre adresse e-mail"
              className="px-4 py-2 rounded-md text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black py-2 rounded-md font-semibold"
            >
              S'inscrire
            </button>
          </form>

          {/* Réseaux sociaux */}
          <div className="flex gap-4 mt-4 text-xl text-gray-300">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-sky-400"><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-red-500"><FaYoutube /></a>
            <a href="https://whatsApp.com" target="_blank" rel="noreferrer" className="hover:text-green-400"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="text-center text-sm text-gray-500 py-4 border-t border-gray-700">
        © 2025 Pokédex. Tous droits réservés.
      </div>
    </footer>
  );
}
