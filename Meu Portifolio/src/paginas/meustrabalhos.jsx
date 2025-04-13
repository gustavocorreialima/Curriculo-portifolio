import React from 'react';

export default function MeusProjetos() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Meus Projetos</h2>
      <ul className="list-disc pl-5 text-lg">
        <li><a href="https://github.com/gustavocorreialima/AtividadeCadastro">Atividade de Cadstro</a></li>
        <li><a href="https://github.com/gustavocorreialima/projeto-sgp">Sistema de Gestão de Projetos</a></li>
        <li><a href="https://github.com/gustavocorreialima/musicas-playlist2/blob/main/Musicas.html">Musicas playlist</a></li>
      </ul>
    </div>
  );
}