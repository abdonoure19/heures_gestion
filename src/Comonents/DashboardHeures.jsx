import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardHeures() {
  // 🔹 Données simulées : heures supplémentaires par mois
  const dataHeuresSupp = [
    { mois: "Janv", heuresSupp: 63 },
    { mois: "Févr", heuresSupp: 19 },
    { mois: "Mars", heuresSupp: 76 },
    { mois: "Avril", heuresSupp: 50},
    { mois: "Mai", heuresSupp: 49 },
    { mois: "Juin", heuresSupp: 62},
    { mois: "Juil", heuresSupp: 28 },
    { mois: "Août", heuresSupp: 10 },
    { mois: "Sept", heuresSupp: 18},
    { mois: "Oct", heuresSupp: 72 },
    { mois: "Nov", heuresSupp: 90 },
    { mois: "Déc", heuresSupp: 73 },
  ];

  // 🔹 Récupérer et formater la date d'aujourd'hui
  const optionsDate = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  const dateAujourdhui = new Date().toLocaleDateString("fr-FR", optionsDate);

  // 🔹 Calculs pour les cartes résumées
  const totalHeures = dataHeuresSupp.reduce((acc, m) => acc + m.heuresSupp, 0);
  const moisMax = dataHeuresSupp.reduce((a, b) =>
    a.heuresSupp > b.heuresSupp ? a : b
  ).mois;
  const moyenneHeures = Math.round(totalHeures / dataHeuresSupp.length);

  return (
    <div className="min-h-screen p-4 sm:p-8 font-[Inter] bg-slate-50 text-slate-800">
      <div className="max-w-6xl mx-auto">
        {/* ===== En-tête ===== */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold mb-2">Statistiques annuelles</h1>
          <div className="flex items-center justify-center space-x-2 text-slate-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-md capitalize">{dateAujourdhui}</p>
          </div>
        </div>

        {/* ===== Cartes Résumées ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center">
            <p className="text-slate-500">Total heures supp</p>
            <p className="text-2xl font-bold text-green-600">{totalHeures}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center">
            <p className="text-slate-500">Mois max</p>
            <p className="text-2xl font-bold text-green-600">{moisMax}</p>
          </div>
          <div className="bg-white p-4 rounded-2xl shadow-xl border border-slate-200 flex flex-col items-center">
            <p className="text-slate-500">Moyenne / mois</p>
            <p className="text-2xl font-bold text-green-600">{moyenneHeures}</p>
          </div>
        </div>

        {/* ===== Graphique ===== */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-200">
          <h2 className="text-xl font-semibold text-slate-700 mb-6">
            Statistiques des heures supplémentaires
          </h2>

          <ResponsiveContainer width="100%" height={400}>
            <BarChart
              data={dataHeuresSupp}
              margin={{ top: 5, right: 20, left: -10, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
              <XAxis dataKey="mois" tick={{ fontSize: 12, fill: "#64748b" }}
              
               />
              <YAxis tick={{ fontSize: 12, fill: "#64748b" }} 
              domain={[0, 90]} 
              />
              <Tooltip
                cursor={{ fill: "rgba(22, 163, 74, 0.1)" }}
                contentStyle={{
                  backgroundColor: "#ffffff",
                  borderRadius: "12px",
                  borderColor: "#e2e8f0",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
                formatter={(value) => [`${value} heures`, "Heures Supp."]}
              />
              <Bar
                dataKey="heuresSupp"
                fill="#16a34a"
                barSize={35}
                radius={[10, 10, 0, 0]}
                animationDuration={1500}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
