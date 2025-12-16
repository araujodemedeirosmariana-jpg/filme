export async function GET() {
  return Response.json([
    { id: 1, titulo: 'Matrix' },
    { id: 2, titulo: 'Inception' }
  ]);
}
