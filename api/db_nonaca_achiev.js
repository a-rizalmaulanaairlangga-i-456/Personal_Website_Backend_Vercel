import { notion } from '../notionClient.js';

export default async function handler(req, res) {
  // Tambahkan header CORS
res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Tangani preflight request (OPTIONS)
if (req.method === 'OPTIONS') {
  return res.status(200).end();
}

  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const resp = await notion.databases.query({
      database_id: process.env.DB_NONACA_ACHIEV_ID
    });
    res.status(200).json(resp.results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
