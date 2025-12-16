import fetch from 'node-fetch';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('search') || '';

  const key = process.env.OMDB_API_KEY;
  if (!key) {
    return new Response(JSON.stringify({ error: 'OMDB_API_KEY not set on server' }), { status: 500 });
  }

  const url = `https://www.omdbapi.com/?apikey=${encodeURIComponent(key)}&s=${encodeURIComponent(q)}`;
  try {
    const res = await fetch(url);
    const data = await res.json();
    return Response.json(data);
  } catch (err) {
    return new Response(JSON.stringify({ error: 'proxy error' }), { status: 500 });
  }
}
