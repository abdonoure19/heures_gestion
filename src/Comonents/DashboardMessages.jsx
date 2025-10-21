import React, { useState } from "react";
import { Mail } from "lucide-react";

export default function DashboardMessages() {
  // 🔹 Données fictives
  const employes = [
    { id: 1, nom: "Ali Ben", email: "ali.ben@entreprise.com" },
    { id: 2, nom: "Sofia Mer", email: "sofia.mer@entreprise.com" },
    { id: 3, nom: "Karim Zed", email: "karim.zed@entreprise.com" },
    { id: 4, nom: "Leila Amr", email: "leila.amr@entreprise.com" },
    { id: 5, nom: "Omar Said", email: "omar.said@entreprise.com" },
  ];

  const [search, setSearch] = useState("");
  const [selectedEmail, setSelectedEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  // ✨ NOUVEL ÉTAT : pour gérer la visibilité de la liste des résultats
  const [isSelectionMade, setIsSelectionMade] = useState(false);

  // 🔍 Filtrage en fonction du texte recherché
  const filteredEmployes = employes.filter((emp) =>
    emp.nom.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = (e) => {
    e.preventDefault();

    if (!selectedEmail || !sujet || !message) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    setShowPopup(true);

    // Réinitialiser
    setSujet("");
    setMessage("");
    setSearch("");
    setSelectedEmail("");
  };

  // ✨ NOUVELLE FONCTION : Gère les changements dans l'input de recherche
  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearch(value);
    // Dès que l'utilisateur tape, la sélection est invalidée
    setIsSelectionMade(false);
    // On vide l'email car le nom a été modifié
    setSelectedEmail("");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 font-[Ubuntu]">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <div className="flex items-center space-x-2 mb-6">
          <Mail className="text-green-600 w-6 h-6" />
          <h2 className="text-2xl font-semibold text-gray-800">
            Envoyer un message à un employé
          </h2>
        </div>

        {/* ===== Formulaire ===== */}
        <form onSubmit={handleSend} className="space-y-5 relative">
          {/* 🔎 Recherche employé */}
          <div className="relative">
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Rechercher un employé
            </label>
            <input
              type="text"
              value={search}
              // ✨ Utilisation de la nouvelle fonction
              onChange={handleSearchChange}
              placeholder="Ex : Ali Ben"
              className="w-full p-2 border rounded-xl focus:ring-2 focus:ring-green-500"
            />

            {/* Liste des résultats - ✨ Condition modifiée pour cacher la liste après sélection */}
            {search && filteredEmployes.length > 0 && !isSelectionMade && (
              <ul className="absolute bg-white border rounded-xl shadow-md mt-1 w-full z-10 max-h-48 overflow-y-auto">
                {filteredEmployes.map((emp) => (
                  <li
                    key={emp.id}
                    className="px-4 py-2 hover:bg-green-100 cursor-pointer"
                    // ✨ Logique de sélection mise à jour
                    onClick={() => {
                      setSelectedEmail(emp.email);
                      setSearch(emp.nom);
                      // On confirme la sélection pour cacher la liste
                      setIsSelectionMade(true);
                    }}
                  >
                    <span className="font-medium text-gray-800">{emp.nom}</span>{" "}
                    <span className="text-gray-500 text-sm">
                      ({emp.email})
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Email sélectionné (lecture seule) */}
          {selectedEmail && (
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-1">
                Email sélectionné
              </label>
              <input
                type="text"
                value={selectedEmail}
                readOnly
                className="w-full p-2 border rounded-xl bg-gray-100"
              />
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Sujet
            </label>
            <input
              type="text"
              value={sujet}
              onChange={(e) => setSujet(e.target.value)}
              placeholder="Ex : Compte rendu hebdomadaire"
              className="w-full p-2 border rounded-xl focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">
              Message
            </label>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tapez votre message ici..."
              className="w-full p-2 border rounded-xl focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-xl shadow-md transition-all"
          >
            Envoyer le message
          </button>
        </form>
      </div>

      {/* ===== Popup de confirmation ===== */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
          <div className="bg-white p-6 rounded-2xl shadow-lg text-center max-w-sm">
            <h3 className="text-xl font-semibold text-green-700 mb-3">
              Message envoyé !
            </h3>
            <p className="text-gray-600 mb-5">
              Votre message a été envoyé à{" "}
              <span className="font-semibold text-green-600">
                {selectedEmail}
              </span>
              .
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700"
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}