import React, { useState, useEffect } from 'react';

function gerarSenhaAleatoria() {
  const numeros = new Set();
  while (numeros.size < 4) {
    numeros.add(Math.floor(Math.random() * 10));
  }
  return Array.from(numeros).join('');
}

export default function JogoDaSenha() {
  const [senha, setSenha] = useState('');
  const [tentativa, setTentativa] = useState('');
  const [tentativas, setTentativas] = useState([]);

  const reiniciarJogo = () => {
    setSenha(gerarSenhaAleatoria());
    setTentativas([]);
    setTentativa('');
  };

  useEffect(() => {
    reiniciarJogo(); // Gera a senha na primeira montagem
  }, []);

  const verificarTentativa = () => {
    if (tentativa.length !== 4 || new Set(tentativa).size !== 4) {
      alert('Digite uma combinação de 4 dígitos diferentes.');
      return;
    }

    let bulls = 0, cows = 0;
    for (let i = 0; i < 4; i++) {
      if (tentativa[i] === senha[i]) {
        bulls++;
      } else if (senha.includes(tentativa[i])) {
        cows++;
      }
    }

    const novaTentativa = { valor: tentativa, resultado: `${bulls} Bulls, ${cows} Cows` };
    setTentativas([novaTentativa, ...tentativas]);
    setTentativa('');
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Jogo da Senha (Bulls and Cows)</h2>

      <div className="mb-4">
        <input
          type="text"
          value={tentativa}
          onChange={(e) => setTentativa(e.target.value.replace(/[^0-9]/g, ''))}
          maxLength={4}
          className="border p-2 mr-2 rounded"
          placeholder="Digite 4 dígitos"
        />
        <button
          onClick={verificarTentativa}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Verificar
        </button>
        <button
          onClick={() => alert(`Senha secreta: ${senha}`)}
          className="ml-2 bg-red-500 text-white px-4 py-2 rounded"
        >
          Revelar senha
        </button>
        <button
          onClick={reiniciarJogo}
          className="ml-2 bg-green-500 text-white px-4 py-2 rounded"
        >
          Reiniciar Jogo
        </button>
      </div>

      <ul className="mt-4 space-y-2">
        {tentativas.map((t, index) => (
          <li key={index} className="border p-2 rounded bg-gray-100">
            <strong>{t.valor}</strong> — {t.resultado}
          </li>
        ))}
      </ul>
    </div>
  );
}
