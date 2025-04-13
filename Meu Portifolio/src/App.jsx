import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Inicio from './paginas/Meuportifolio';
import SobreMim from './paginas/sobremim';
import MeusProjetos from './paginas/meustrabalhos';
import JogoDaSenha from './paginas/jogodasenha';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen w-full bg-gradient-to-br from-blue-100 to-purple-100 font-sans">
        <nav className="bg-white shadow-md p-4 flex justify-between items-center sticky top-0 z-50 px-8">
          <h1 className="text-xl font-bold text-blue-600">Portfólio do Gustavo</h1>
          <div className="space-x-4 flex">
            <Link to="/" className="circle-link">Início</Link>
            <Link to="/sobre" className="circle-link">Sobre Mim</Link>
            <Link to="/projetos" className="circle-link">Meus Projetos</Link>
            <Link to="/jogo" className="circle-link">Jogo da Senha</Link>
          </div>
        </nav>

        <main className="p-6 max-w-4xl mx-auto">
          <div className="content-card">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route path="/sobre" element={<SobreMim />} />
              <Route path="/projetos" element={<MeusProjetos />} />
              <Route path="/jogo" element={<JogoDaSenha />} />
            </Routes>
          </div>
        </main>

        <footer className="text-center p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} Gustavo Porto. Todos os direitos reservados.
        </footer>
      </div>
    </Router>
  );
}
