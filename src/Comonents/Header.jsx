import React from "react";
import logo from "../assets/logo.jpg"; // Remplace par le nom réel du fichier

export default function Header() {
  return (
    <header className="bg-green-700 py-3 flex flex-col items-center justify-center shadow-md">
      {/* Logo */}
      <a href="/">
        <img
        src={logo}
        alt="Logo Machine de Récolte"
        className="w-12 h-12 object-contain mb-1"  />    
      </a>
      
      {/* Titre */}
      <a href="/">
      <h1 className="text-2xl font-bold text-white text-center">
        SAMPD ALGERIE
      </h1>
      </a>

      {/* Sous-titre / Description */}
      <p className="text-white text-xs mt-0.5">
        Tableau de bord - Gestion des heures
      </p>
    </header>
  );
}
