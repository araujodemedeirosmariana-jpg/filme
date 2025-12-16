'use client';
import { useState } from 'react';

export default function Filmes() {
  const [lista, setLista] = useState([]);
  const [q, setQ] = useState('matrix');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function buscar() {
    if (!q || q.trim().length === 0) return setLista([]);
    setLoading(true);
    setError(null);
    try {
      // Prefer server-side proxy to keep API key secret
      const res = await fetch(`/api/omdb?search=${encodeURIComponent(q)}`);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setLista(data.Search || []);
    } catch (err) {
      setError(err.message || 'Erro na busca');
      setLista([]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ padding: 20 }}>
      <form onSubmit={e => { e.preventDefault(); buscar(); }} style={{ marginBottom: 12 }}>
        <input
          value={q}
          onChange={e => setQ(e.target.value)}
          placeholder="Pesquisar omdb"
          aria-label="Pesquisar"
          style={{ padding: '6px 8px', marginRight: 8 }}
        />
        <button type="submit" disabled={loading}>{loading ? 'Buscando...' : 'Buscar'}</button>
      </form>

      {error && <div style={{ color: 'crimson', marginBottom: 12 }}>Erro: {error}</div>}

      {lista.length === 0 && !loading && <div>Nenhum resultado — tente outra busca.</div>}

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 12, marginTop: 12 }}>
        {lista.map(f => (
          <article key={f.imdbID} style={{ border: '1px solid #eaeaea', borderRadius: 6, padding: 12, display: 'flex', gap: 12 }}>
            <img src={f.Poster !== 'N/A' ? f.Poster : 'https://via.placeholder.com/80x120?text=No+Image'} alt={`${f.Title} poster`} style={{ width: 80, height: 120, objectFit: 'cover', borderRadius: 4 }} />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: '0 0 6px 0' }}>{f.Title} <small style={{ color: '#666' }}>({f.Year})</small></h3>
              <div style={{ marginBottom: 8 }}><em>{f.Type}</em></div>
              <a href={`https://www.imdb.com/title/${f.imdbID}`} target="_blank" rel="noreferrer">Ver no IMDB</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
