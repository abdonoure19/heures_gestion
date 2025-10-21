import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";

export default function GestionHeures() {
  const [heures, setHeures] = useState([]);
  const [recherche, setRecherche] = useState("");
  const [modalOuvert, setModalOuvert] = useState(false);
  const [modeEdition, setModeEdition] = useState(false);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [employeActif, setEmployeActif] = useState({
    id: null,
    nom: "",
    poste: "",
    date: "",
    entree: "",
    sortie: "",
    heuresSupp: "",
    remarque: "",
  });

  const data = [
  { id: 1, nom: "Ali Ben", poste: "Technicien", date: "2025-10-18", entree: "08:00", sortie: "17:30", heuresSupp: 1.5, remarque: "Projet X", email: "ali.ben@entreprise.com", telephone: "0658741236" },
  { id: 2, nom: "Sofia Mer", poste: "Assistante", date: "2025-10-18", entree: "08:15", sortie: "16:00", heuresSupp: 0, remarque: "RAS", email: "sofia.mer@entreprise.com", telephone: "0778924510" },
  { id: 3, nom: "Karim Zed", poste: "Ingénieur", date: "2025-10-18", entree: "07:50", sortie: "18:10", heuresSupp: 2, remarque: "Maintenance serveur", email: "karim.zed@entreprise.com", telephone: "0556478120" },
  { id: 4, nom: "Leila Amr", poste: "Technicienne", date: "2025-10-18", entree: "08:10", sortie: "17:00", heuresSupp: 0.5, remarque: "Assistance production", email: "leila.amr@entreprise.com", telephone: "0678452398" },
  { id: 5, nom: "Omar Said", poste: "Chauffeur", date: "2025-10-18", entree: "07:30", sortie: "17:45", heuresSupp: 1.25, remarque: "Livraison urgente", email: "omar.said@entreprise.com", telephone: "0559247833" },
  { id: 6, nom: "Nadia Tou", poste: "RH", date: "2025-10-18", entree: "08:30", sortie: "16:00", heuresSupp: 0, remarque: "RAS", email: "nadia.tou@entreprise.com", telephone: "0678125964" },
  { id: 7, nom: "Rachid Nou", poste: "Technicien", date: "2025-10-18", entree: "07:55", sortie: "18:20", heuresSupp: 2.25, remarque: "Dépannage client", email: "rachid.nou@entreprise.com", telephone: "0756489321" },
  { id: 8, nom: "Amina Sel", poste: "Comptable", date: "2025-10-18", entree: "08:00", sortie: "17:15", heuresSupp: 1, remarque: "Clôture mensuelle", email: "amina.sel@entreprise.com", telephone: "0654781239" },
  { id: 9, nom: "Yassine Mou", poste: "Sécurité", date: "2025-10-18", entree: "06:00", sortie: "16:00", heuresSupp: 1, remarque: "Surveillance supplémentaire", email: "yassine.mou@entreprise.com", telephone: "0774896521" },
  { id: 10, nom: "Sara Lah", poste: "Assistante", date: "2025-10-18", entree: "08:05", sortie: "16:05", heuresSupp: 0, remarque: "RAS", email: "sara.lah@entreprise.com", telephone: "0675123987" },
  { id: 11, nom: "Hassan Bel", poste: "Technicien", date: "2025-10-18", entree: "07:45", sortie: "18:00", heuresSupp: 1.75, remarque: "Problème machine", email: "hassan.bel@entreprise.com", telephone: "0556214789" },
  { id: 12, nom: "Meryem Dou", poste: "Analyste", date: "2025-10-18", entree: "08:20", sortie: "17:40", heuresSupp: 1.2, remarque: "Rapport hebdomadaire", email: "meryem.dou@entreprise.com", telephone: "0658741290" },
  { id: 13, nom: "Anis Fer", poste: "Chef équipe", date: "2025-10-18", entree: "07:30", sortie: "18:00", heuresSupp: 2, remarque: "Supervision atelier", email: "anis.fer@entreprise.com", telephone: "0778456321" },
  { id: 14, nom: "Imane Zoh", poste: "Assistante RH", date: "2025-10-18", entree: "08:30", sortie: "17:00", heuresSupp: 0.5, remarque: "Formation interne", email: "imane.zoh@entreprise.com", telephone: "0658923145" },
  { id: 15, nom: "Bilal Ker", poste: "Technicien", date: "2025-10-18", entree: "07:50", sortie: "18:30", heuresSupp: 2.5, remarque: "Problème urgent", email: "bilal.ker@entreprise.com", telephone: "0774589620" },
  { id: 16, nom: "Fatima Rou", poste: "Comptable", date: "2025-10-18", entree: "08:00", sortie: "16:30", heuresSupp: 0.5, remarque: "RAS", email: "fatima.rou@entreprise.com", telephone: "0658745632" },
  { id: 17, nom: "Younes Mar", poste: "Développeur", date: "2025-10-18", entree: "09:00", sortie: "19:00", heuresSupp: 2, remarque: "Livraison projet", email: "younes.mar@entreprise.com", telephone: "0778954213" },
  { id: 18, nom: "Lina Der", poste: "Designer", date: "2025-10-18", entree: "09:00", sortie: "17:45", heuresSupp: 0.75, remarque: "Correction maquettes", email: "lina.der@entreprise.com", telephone: "0654127896" },
  { id: 19, nom: "Walid Nas", poste: "Technicien", date: "2025-10-18", entree: "07:40", sortie: "18:10", heuresSupp: 2, remarque: "Installation équipement", email: "walid.nas@entreprise.com", telephone: "0559874210" },
  { id: 20, nom: "Salma Tou", poste: "Assistante", date: "2025-10-18", entree: "08:10", sortie: "16:10", heuresSupp: 0, remarque: "RAS", email: "salma.tou@entreprise.com", telephone: "0674582319" }
];


  const [employeSelectionne, setEmployeSelectionne] = useState(null);
  const [listrecent, setlistrecent] = useState(data);
 
  const lastperindex = currentpage * postsPerPage;
  const firstperindex = lastperindex - postsPerPage;
  const heuresFiltrees = heures.filter((h) =>
    h.nom.toLowerCase().includes(recherche.toLowerCase())
  );

  const currentposts = heuresFiltrees.slice(firstperindex, lastperindex);
  useEffect(() => {
    setHeures(data);
  }, []);

  const ouvrirModal = (mode, data = null) => {
    setModeEdition(mode === "edit");
    if (mode === "edit" && data) {
      setEmployeActif(data);
    } else {
      setEmployeActif({
        id: null,
        nom: "",
        poste: "",
        date: "",
        entree: "",
        sortie: "",
        heuresSupp: "",
        remarque: "",
        email: "",
        telephone: "",
      });
    }
    setModalOuvert(true);
  };

  const fermerModal = () => setModalOuvert(false);

  const enregistrerHeure = () => {
    if (modeEdition) {
      setHeures((prev) =>
        prev.map((h) => (h.id === employeActif.id ? employeActif : h))
      );
    } else {
      const nouvelId = heures.length
        ? Math.max(...heures.map((h) => h.id)) + 1
        : 1;
      setHeures([...heures, { ...employeActif, id: nouvelId }]);
    }
    setModalOuvert(false);
  };

  const supprimerHeure = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet enregistrement ?")) {
      setHeures(heures.filter((h) => h.id !== id));
    }
  };

  
  return (
    <div className="min-h-screen bg-gray-50 p-6 font-[Inter]">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-8">
        Gestion des Employés
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow">
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="🔍 Rechercher un employé..."
            value={recherche}
            onChange={(e) => setRecherche(e.target.value)}
            className="w-1/2 p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
          />
          <button
            onClick={() => ouvrirModal("add")}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
          >
            + Ajouter
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-3 py-2">ID</th>
                <th className="px-3 py-2">Nom</th>
                <th className="px-3 py-2">Poste</th>
                <th className="px-3 py-2">Date</th>
                <th className="px-3 py-2">Entrée</th>
                <th className="px-3 py-2">Sortie</th>
                <th className="px-3 py-2">Heures supp</th>
                <th className="px-3 py-2 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentposts.map((h) => (
                <tr key={h.id} className="hover:bg-gray-100 transition" >
                  <td className="px-3 py-2">{h.id}</td>
                  <td className="px-3 py-2 font-medium text-gray-800">{h.nom}</td>
                  <td className="px-3 py-2">{h.poste}</td>
                  <td className="px-3 py-2">{h.date}</td>
                  <td className="px-3 py-2">{h.entree}</td>
                  <td className="px-3 py-2">{h.sortie}</td>
                  <td className="px-3 py-2 text-green-600 font-semibold">
                    {h.heuresSupp}
                  </td>
                  <td className="px-3 py-2 text-center space-x-2">
                    <button
                      onClick={() => ouvrirModal("edit", h)}
                      className="px-3 py-1  text-white rounded-lg shadow-sm hover:bg-blue-600 hover:shadow-md transition"
                    >
                      ✏️
                    </button>
                    <button
                      onClick={() => supprimerHeure(h.id)}
                      className="px-3 py-1 text-white rounded-lg shadow-sm hover:bg-red-600 hover:shadow-md transition"
                    >
                      🗑️
                    </button>
                    <button
                      onClick={() => setEmployeSelectionne(h)}
                      className="px-3 py-1 text-white rounded-lg shadow-sm hover:bg-green-600 hover:shadow-md transition"
                    >
                      👁️
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
        listrecent={heuresFiltrees}
        postsPerPage={postsPerPage}
        setcuurentpage={setCurrentpage}
      />
      </div>

      {/* ===== MODAL AJOUT / MODIF ===== */}
      {modalOuvert && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-96 animate-fadeIn">
            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              {modeEdition ? "Modifier" : "Ajouter un enregistrement"}
            </h2>

            <div className="space-y-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nom :
                </label>
                <input
                  type="text"
                  value={employeActif.nom}
                  onChange={(e) =>
                    setEmployeActif({ ...employeActif, nom: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Poste :
                </label>
                <input
                  type="text"
                  value={employeActif.poste}
                  onChange={(e) =>
                    setEmployeActif({ ...employeActif, poste: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Date :
                </label>
                <input
                  type="date"
                  value={employeActif.date}
                  onChange={(e) =>
                    setEmployeActif({ ...employeActif, date: e.target.value })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Entrée :
                  </label>
                  <input
                    type="time"
                    value={employeActif.entree}
                    onChange={(e) =>
                      setEmployeActif({
                        ...employeActif,
                        entree: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Sortie :
                  </label>
                  <input
                    type="time"
                    value={employeActif.sortie}
                    onChange={(e) =>
                      setEmployeActif({
                        ...employeActif,
                        sortie: e.target.value,
                      })
                    }
                    className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Heures supplémentaires :
                </label>
                <input
                  type="number"
                  step="0.5"
                  value={employeActif.heuresSupp}
                  onChange={(e) =>
                    setEmployeActif({
                      ...employeActif,
                      heuresSupp: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Remarque :
                </label>
                <textarea
                  value={employeActif.remarque}
                  onChange={(e) =>
                    setEmployeActif({
                      ...employeActif,
                      remarque: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-400"
                ></textarea>
              </div>
            </div>

            <div className="flex justify-end space-x-3 mt-5">
              <button
                onClick={fermerModal}
                className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
              >
                Annuler
              </button>
              <button
                onClick={enregistrerHeure}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Enregistrer
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ===== MODAL VOIR DETAILS ===== */}
      {employeSelectionne && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-2xl shadow-lg w-[90%] md:w-[400px] relative animate-fadeIn">
            <button
              onClick={() => setEmployeSelectionne(null)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4 text-center text-green-700">
              Détails de l’employé
            </h2>

            <div className="space-y-2 text-gray-700">
              <p><span className="font-semibold">Nom :</span> {employeSelectionne.nom}</p>
              <p><span className="font-semibold">Poste :</span> {employeSelectionne.poste}</p>
              <p><span className="font-semibold">Date :</span> {employeSelectionne.date}</p>
              <p><span className="font-semibold">Entrée :</span> {employeSelectionne.entree}</p>
              <p><span className="font-semibold">Sortie :</span> {employeSelectionne.sortie}</p>
              <p><span className="font-semibold">Heures supp :</span> {employeSelectionne.heuresSupp}</p>
              <p><span className="font-semibold">Remarque :</span> {employeSelectionne.remarque || "Aucune"}</p>
              <p><span className="font-semibold">Email :</span> {employeSelectionne.email}</p>
              <p><span className="font-semibold">Téléphone :</span> {employeSelectionne.telephone}</p>
            </div>

            <div className="mt-5 text-center">
              <button
                onClick={() => setEmployeSelectionne(null)}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              >
                Fermer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
