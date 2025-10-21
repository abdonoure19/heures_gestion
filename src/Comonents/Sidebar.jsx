import React, { useState } from "react";
import { FaChartBar, FaClock, FaUsers } from "react-icons/fa";
import logo from "../assets/logo.jpg"; 
import { IoSettingsOutline } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { name: "Tableau de bord", icon: <FaChartBar />, link: "/" },
    { name: "Statistiques Heures", icon: <FaClock />, link: "/dashboard-hours" },
    { name: "Gestion Heures / Employés", icon: <FaUsers />, link: "/gestion-heures" },
     { name: "Paramètres", icon: <IoSettingsOutline />, link: "/Reglages" },
     { name: "Contacte", icon: <MdEmail />, link: "/DashboardMessages" }
  ];

  return (
    <nav
      className={`sticky top-0 h-[95vh] bg-gray-100 rounded-r-2xl shadow-lg overflow-hidden transition-all duration-500`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      style={{ width: open ? "16rem" : "5rem" }} // 64 = 16rem, 20 = 5rem
    >
      <ul className="flex flex-col h-full">
        {/* Logo */}
        <li className="flex flex-col items-center justify-center mt-4 mb-6">
         <a href="/"><img src={logo} alt="Logo" className="w-12 h-12 rounded-full mb-2 object-cover" /></a> 
          <span className={`text-lg font-bold uppercase transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
            <a href="/">SAMPD ALGÉRIE</a>
          </span>
        </li>

        {/* Liens du menu */}
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.link}
              className="flex items-center p-3 text-gray-700 hover:bg-gray-200 hover:text-green-600 transition-colors"
            >
              {item.icon}
              <span className={`ml-4 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0"}`}>
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
