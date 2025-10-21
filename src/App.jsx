// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Comonents/Header.jsx";
import Sidebar from "./Comonents/Sidebar.jsx";
import Dashbord from "./Comonents/Dashbord.jsx";
import DashboardHeures from "./Comonents/DashboardHeures.jsx";
import GestionHeures from "./Comonents/GestionHeures.jsx";
import Reglages from "./Comonents/Reglages.jsx";
import DashboardMessages from "./Comonents/DashboardMessages.jsx";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen">
        {/* Sidebar global */}
        <Sidebar />

        <div className="flex-1 flex flex-col">
          {/* Header global */}
          <Header />

          {/* Contenu des pages */}
          <main className="p-6 flex-1 bg-gray-100">
            <Routes>
              <Route path="/" element={<Dashbord/>} />
              <Route path="/dashboard-hours" element={<DashboardHeures />} />
              <Route path="/gestion-heures" element={<GestionHeures />} />
              <Route path="/reglages" element={<Reglages />} />
              <Route path="/DashboardMessages" element={<DashboardMessages />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
