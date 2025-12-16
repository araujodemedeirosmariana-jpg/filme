const form = document.getElementById('formBusca');
const lista = document.getElementById('lista');

const filmes = [
  { titulo: 'Matrix', ano: 1999 },
  { titulo: 'Inception', ano: 2010 }
];

form.addEventListener('submit', (e) => {
  e.preventDefault();
  render(filmes);
});

const render = (dados) => {
  lista.innerHTML = dados.map(f =>
    `<li>${f.titulo} (${f.ano})</li>`
  ).join('');
};
