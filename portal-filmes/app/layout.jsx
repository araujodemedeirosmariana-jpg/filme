export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
          <h1>Portal de Filmes</h1>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
