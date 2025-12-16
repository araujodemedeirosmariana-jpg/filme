'use client';
import { useState } from 'react';

export default function Filmes() {
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('matrix');

  async function buscar() {
    // Prefer server-side proxy to keep API key secret
    const res = await fetch(`/api/omdb?search=${encodeURIComponent(q)}`);
    const data = await res.json();
    setLista(data.Search || []);
  }

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={e => { e.preventDefault(); buscar(); }} style={{ marginBottom: 12 }}>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Pesquisar omdb" />
        <button type="submit">Buscar</button>
      </form>
      <div>
        {lista.map(f => (
          <div key={f.imdbID}><strong>{f.Title}</strong> ({f.Year})</div>
        ))}
      </div>
    </div>
  );
}
