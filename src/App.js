import React, { useState, useEffect } from 'react';
import Home from './pages/Home';
import Game from './pages/Game';
import Settings from './pages/Settings'; 
import Layout from './components/Layout';
import './styles/globals.css';

function App() {
  const [view, setView] = useState('home'); 
  const [gameMode, setGameMode] = useState(null);

  // Estado das definições com persistência
  const [settings, setSettings] = useState(() => {
    const saved = localStorage.getItem('raw_settings');
    return saved ? JSON.parse(saved) : {
      animations: true,
      explicit: true,
      language: 'PT-PT'
    };
  });

  useEffect(() => {
    localStorage.setItem('raw_settings', JSON.stringify(settings));
  }, [settings]);

  const handleStartGame = (modeId) => {
    setGameMode(modeId);
    setView('game');
  };

  const handleUpdateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleBackToHome = () => {
    setView('home');
    setGameMode(null);
  };

  return (
    <Layout 
      onOpenSettings={() => setView('settings')} 
      currentLang={settings.language}
    >
      {/* HOME */}
      {view === 'home' && (
        <div className={settings.animations ? "animate-in fade-in duration-500" : ""}>
          <Home onNavigate={handleStartGame} />
        </div>
      )}
      
      {/* GAME */}
      {view === 'game' && (
        <div className={settings.animations ? "animate-in slide-in-from-right duration-500" : ""}>
          <Game 
            modeId={gameMode} 
            onBack={handleBackToHome} 
            settings={settings} 
          />
        </div>
      )}

      {/* SETTINGS (Inclui o About/Story lá dentro) */}
      {view === 'settings' && (
        <div className={settings.animations ? "animate-in slide-in-from-top duration-500" : ""}>
          <Settings 
            settings={settings} 
            onUpdate={handleUpdateSetting} 
            onBack={handleBackToHome} 
          />
        </div>
      )}
    </Layout>
  );
}

export default App;