import { useState } from 'react';

export default function App() {
  const [filmes, setFilmes] = useState([]);
  const [q, setQ] = useState('matrix');
  const API_KEY = process.env.NEXT_PUBLIC_OMDB_KEY || 'SUA_CHAVE';

  async function buscar(e) {
    e && e.preventDefault();
    if (!API_KEY || API_KEY === 'SUA_CHAVE') {
      alert('Defina a variável NEXT_PUBLIC_OMDB_KEY para realizar buscas reais.');
      return;
    }

    try {
      const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${encodeURIComponent(q)}`);
      const data = await res.json();
      setFilmes(data.Search || []);
    } catch (err) {
      console.error(err);
      alert('Erro ao buscar no OMDB');
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>Portal de Filmes (React)</h1>

      <form onSubmit={buscar} style={{ marginBottom: 12 }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Digite um filme" />
        <button type="submit">Buscar</button>
      </form>

      <div>
        {filmes.map(f => (
          <div key={f.imdbID}>
            <strong>{f.Title}</strong> ({f.Year})
          </div>
        ))}
      </div>
    </div>
  );
}
