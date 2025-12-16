# Portal de Filmes

Mini projeto com versões: estática, React e Next.js.

Como rodar localmente:

```bash
cd portal-filmes
npm install
npm run dev
```

Variáveis de ambiente para deploy no Vercel:

- `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`
- `NEXT_PUBLIC_OMDB_KEY` (opcional)

Server-side OMDB proxy: set `OMDB_API_KEY` (server secret) to allow secure searches via `/api/omdb`.

To set secrets using the GitHub CLI:

```bash
# Vercel
gh secret set VERCEL_TOKEN --body "<your_vercel_token>"
gh secret set VERCEL_ORG_ID --body "<your_org_id>"
gh secret set VERCEL_PROJECT_ID --body "<your_project_id>"

# OMDB (server secret) and optional public key
gh secret set OMDB_API_KEY --body "<your_omdb_key>"
# If you want client-side searches (not recommended), set NEXT_PUBLIC_OMDB_KEY as repository/public secret
gh secret set NEXT_PUBLIC_OMDB_KEY --body "<your_public_key>"
```

After adding secrets, you can trigger the Vercel deploy workflow manually or push a commit.
