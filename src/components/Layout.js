import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, onOpenSettings, currentLang }) => {
  return (
    <div className="min-h-screen bg-raw-onyx flex flex-col">
      {/* Passamos as funções de settings para o Header aqui */}
      <Header onOpenSettings={onOpenSettings} currentLang={currentLang} />
      
      <main className="flex-grow">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default Layout;