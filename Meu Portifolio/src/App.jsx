import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Inicio from './paginas/Meuportifolio';
import SobreMim from './paginas/sobremim';
import MeusProjetos from './paginas/meustrabalhos';
import JogoDaSenha from './paginas/jogodasenha';
import './App.css';

function Navbar() {
  const location = useLocation();
  const showTitleAndImage = location.pathname === '/' || location.pathname === '/sobre';

  return (
    <nav className="bg-white shadow-md p-4 flex flex-col items-center sticky top-0 z-50 px-8 space-y-2">
      {showTitleAndImage && (
        <>
          <h1 className="text-xl font-bold text-blue-600">Meu Portfólio</h1>
          <img
            src="/MinhaFoto.jpg"
            alt="Foto do Gustavo"
            className="rounded-full object-cover border-2 border-blue-400 shadow-sm"
            style={{
              width: '112px',
              height: '112px',
              objectFit: 'cover',
              borderRadius: '9999px',
            }}
          />
        </>
      )}

      <div className="space-x-4 flex pt-2">
        <Link to="/" className="circle-link">Início</Link>
        <Link to="/sobre" className="circle-link">Sobre Mim</Link>
        <Link to="/projetos" className="circle-link">Meus Projetos</Link>
        <Link to="/jogo" className="circle-link">Jogo da Senha</Link>
      </div>
    </nav>
  );
}

function MainContent() {
  const location = useLocation();
  const isPushedDown = location.pathname === '/projetos' || location.pathname === '/jogo';

  return (
    <main className="w-full p-6 max-w-4xl mx-auto">
      <div className={`content-card w-full ${isPushedDown ? 'pt-20' : ''}`}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<SobreMim />} />
          <Route path="/projetos" element={<MeusProjetos />} />
          <Route path="/jogo" element={<JogoDaSenha />} />
        </Routes>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 font-sans">
        <Navbar />
        <MainContent />
        <footer className="text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Gustavo Porto. Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}
