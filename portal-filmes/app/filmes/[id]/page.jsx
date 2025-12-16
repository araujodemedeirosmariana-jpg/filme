export default function Filme({ params }) {
  return (
    <div style={{ padding: 20 }}>
      <h2>Filme ID: {params.id}</h2>
    </div>
  );
}
