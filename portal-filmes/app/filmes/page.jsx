'use client';
import { useState } from 'react';

export default function Filmes() {
  const [lista, setLista] = useState([]);

  async function buscar() {
    const res = await fetch('/api/filmes');
    const data = await res.json();
    setLista(data);
  }

  return (
    <div style={{ padding: 20 }}>
      <button onClick={buscar}>Buscar Filmes</button>
      <div>
        {lista.map(f => (
          <p key={f.id}>{f.titulo}</p>
        ))}
      </div>
    </div>
  );
}
