import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import { FaEye } from "react-icons/fa6";

export default function Dashboard() {
  const [nbEmployes, setNbEmployes] = useState(25);
  const [heuresNormales, setHeuresNormales] = useState(1600);
  const [heuresSupp, setHeuresSupp] = useState(220);
  const [currentpage, setCurrentpage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(6);
  const [selectedEmploye, setSelectedEmploye] = useState(null);
  const [showModal, setShowModal] = useState(false);


  const data = [
  { id: 1, nom: "Yasmin Mou", poste: "Assistante RH", date: "2025-10-18", entree: "08:45", sortie: "16:45", heuresSupp: 24 },
  { id: 2, nom: "Meriem Lak", poste: "Comptable", date: "2025-10-18", entree: "09:00", sortie: "17:00", heuresSupp: 23 },
  { id: 3, nom: "Imane Dja", poste: "Assistante", date: "2025-10-18", entree: "08:30", sortie: "16:00", heuresSupp: 23 },
  { id: 4, nom: "Sara Ben", poste: "Comptable", date: "2025-10-18", entree: "09:00", sortie: "17:00", heuresSupp: 21 },
  { id: 5, nom: "Lina Sof", poste: "Assistante", date: "2025-10-18", entree: "08:45", sortie: "16:30", heuresSupp: 21 },
  { id: 6, nom: "Fatima Zer", poste: "Technicienne", date: "2025-10-18", entree: "08:20", sortie: "16:30", heuresSupp: 21 },
  { id: 7, nom: "Rania Bel", poste: "Assistante RH", date: "2025-10-18", entree: "09:00", sortie: "17:00", heuresSupp: 18 },
  { id: 8, nom: "Sofia Mer", poste: "Assistante", date: "2025-10-18", entree: "08:15", sortie: "16:00", heuresSupp: 17 },
  { id: 9, nom: "Lydia Fer", poste: "Secrétaire", date: "2025-10-18", entree: "08:25", sortie: "17:05", heuresSupp: 16 },
  { id: 10, nom: "Yassine Mou", poste: "Technicien", date: "2025-10-18", entree: "08:10", sortie: "17:10", heuresSupp: 13 },
  { id: 11, nom: "Nora Lim", poste: "Secrétaire", date: "2025-10-18", entree: "08:20", sortie: "17:10", heuresSupp: 13},
  { id: 12, nom: "Bilal Ben", poste: "Technicien", date: "2025-10-18", entree: "08:05", sortie: "17:00", heuresSupp: 13 },
  { id: 13, nom: "Nadia Amr", poste: "Secrétaire", date: "2025-10-18", entree: "08:30", sortie: "17:00", heuresSupp: 12 },
  { id: 14, nom: "Hassan Tou", poste: "Technicien", date: "2025-10-18", entree: "08:10", sortie: "17:20", heuresSupp: 11 },
  { id: 15, nom: "Nabil Sam", poste: "Magasinier", date: "2025-10-18", entree: "07:30", sortie: "18:20", heuresSupp: 10 },
  { id: 16, nom: "Amine Zoh", poste: "Magasinier", date: "2025-10-18", entree: "07:40", sortie: "18:15", heuresSupp: 9 },
  { id: 17, nom: "Karim Ali", poste: "Magasinier", date: "2025-10-18", entree: "07:45", sortie: "18:00", heuresSupp: 8 },
  { id: 18, nom: "Omar Had", poste: "Magasinier", date: "2025-10-18", entree: "07:35", sortie: "18:10", heuresSupp: 5},
  { id: 19, nom: "Rachid Mou", poste: "Magasinier", date: "2025-10-18", entree: "07:50", sortie: "18:00", heuresSupp: 5},
  { id: 20, nom: "Ali Ben", poste: "Technicien", date: "2025-10-18", entree: "08:00", sortie: "17:30", heuresSupp: 5 },
  { id: 21, nom: "Kamel Bou", poste: "Chef d’équipe", date: "2025-10-18", entree: "07:30", sortie: "17:00", heuresSupp: 4 },
  { id: 22, nom: "Walid Cha", poste: "Technicien", date: "2025-10-18", entree: "08:00", sortie: "17:30", heuresSupp: 3 },
  { id: 23, nom: "Amin Fou", poste: "Chef d’équipe", date: "2025-10-18", entree: "07:40", sortie: "17:10", heuresSupp: 2 },
  { id: 24, nom: "Sami Tou", poste: "Sécurité", date: "2025-10-18", entree: "06:00", sortie: "14:00", heuresSupp: 1 },
  { id: 25, nom: "Adel Fer", poste: "Technicien", date: "2025-10-18", entree: "08:00", sortie: "17:15", heuresSupp: 0 },
];


  const [listrecent, setlistrecent] = useState(data);

  // Pagination
  const lastperindex = currentpage * postsPerPage;
  const firstperindex = lastperindex - postsPerPage;
  const currentposts = listrecent.slice(firstperindex, lastperindex);

  return (
    <section className="p-6 font-[Ubuntu] bg-gray-50 min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">Tableau de bord</h1>
        <i className="fas fa-user-cog text-green-700 text-2xl cursor-pointer"></i>
      </div>

      {/* ===== Cards ===== */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white p-6 rounded-2xl shadow hover:bg-gray-200 transition">
          <div>
            <div className="text-4xl font-bold text-green-700">{nbEmployes}</div>
            <div className="text-gray-500 text-lg mt-1">Employés enregistrés</div>
          </div>
          <div className="text-5xl text-gray-400 mt-2">
            <ion-icon name="people-outline"></ion-icon>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:bg-gray-200 transition">
          <div>
            <div className="text-4xl font-bold text-green-700">{heuresNormales}</div>
            <div className="text-gray-500 text-lg mt-1">Heures normales (mois)</div>
          </div>
          <div className="text-5xl text-gray-400 mt-2">
            <ion-icon name="time-outline"></ion-icon>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow hover:bg-gray-200 transition">
          <div>
            <div className="text-4xl font-bold text-green-700">{heuresSupp} h</div>
            <div className="text-gray-500 text-lg mt-1">Heures supplémentaires</div>
          </div>
          <div className="text-5xl text-gray-400 mt-2">
            <ion-icon name="alarm-outline"></ion-icon>
          </div>
        </div>
      </div>

      {/* ===== Table ===== */}
      <section className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Employés les plus engagés
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-gray-100 text-gray-600 uppercase text-xs">
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nom</th>
                <th className="px-4 py-2">Poste</th>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Heures supp</th>
                <th className="px-4 py-2">Détails</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {currentposts.map((emp) => (
                <tr key={emp.id} className="hover:bg-gray-50 transition">
                  <td className="px-4 py-2">{emp.id}</td>
                  <td className="px-4 py-2 font-medium">{emp.nom}</td>
                  <td className="px-4 py-2">{emp.poste}</td>
                  <td className="px-4 py-2">{emp.date}</td>
                  <td className="px-4 py-2 text-green-600 font-semibold">{emp.heuresSupp}</td>
                  <td className="px-4 py-2">
                    <button
                    onClick={()=>{
                      setShowModal(true)
                      setSelectedEmploye(emp)
                    }}
                     className="px-3 py-1 text-sm font-medium  rounded-md hover:bg-green-100">
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
                {showModal && selectedEmploye && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-96">
              <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
                Détails de l’employé
              </h3>
              <div className="space-y-2 text-gray-700">
                <p><span className="font-semibold">Nom :</span> {selectedEmploye.nom}</p>
                <p><span className="font-semibold">Poste :</span> {selectedEmploye.poste}</p>
                <p><span className="font-semibold">Date :</span> {selectedEmploye.date}</p>
                <p><span className="font-semibold">Heures supp :</span> {selectedEmploye.heuresSupp}</p>
              </div>

              <div className="text-center mt-6">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        )}

      </section>

      <Pagination
        listrecent={listrecent}
        postsPerPage={postsPerPage}
        setcuurentpage={setCurrentpage}
        npage = {2}
      />
    </section>
  );
}
