import React, { useState } from 'react';

const Reglages = () => {
  const [language, setLanguage] = useState('fr');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handleChangePassword = () => {
    console.log('Changing password...');
  };

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-6">
      {/* Conteneur principal centré, largeur limitée à ~80% */}
      <div className="w-full max-w-4xl">

        {/* Titre */}
        <h1 className="text-3xl font-bold mb-6 text-center">
          {language === 'fr' ? 'Paramètres' : 'Settings'}
        </h1>

        {/* Switch langue */}
        <div className="flex justify-center gap-2 mb-6">
          <button
            className={`px-4 py-2 rounded ${
              language === 'fr' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setLanguage('fr')}
          >
            Français
          </button>
          <button
            className={`px-4 py-2 rounded ${
              language === 'en' ? 'bg-green-600 text-white' : 'bg-gray-200'
            }`}
            onClick={() => setLanguage('en')}
          >
            English
          </button>
        </div>

        {/* Formulaire mot de passe */}
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-xl font-semibold">
            {language === 'fr' ? 'Changer le mot de passe' : 'Change Password'}
          </h2>

          <div className="space-y-4">
            <div>
              <label className="block mb-1 font-medium">
                {language === 'fr' ? 'Mot de passe actuel' : 'Current Password'}:
              </label>
              <input
                type="password"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {language === 'fr' ? 'Nouveau mot de passe' : 'New Password'}:
              </label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium">
                {language === 'fr' ? 'Confirmer le nouveau mot de passe' : 'Confirm New Password'}:
              </label>
              <input
                type="password"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>
          </div>

          <button
            onClick={handleChangePassword}
            className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            {language === 'fr' ? 'Changer le mot de passe' : 'Change Password'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Reglages;
