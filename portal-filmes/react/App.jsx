import { useState } from 'react';

export default function App() {
  const [filmes, setFilmes] = useState([]);

  return (
    <div>
      <h1>Portal de Filmes (React)</h1>
      {filmes.map(f => (
        <p key={f.imdbID}>{f.Title}</p>
      ))}
    </div>
  );
}
