import { notion } from '../notionClient.js';

const allowedOrigins = [
  'http://localhost:3000',
  'https://rizalmaulanaairlangga-personalwebsite.vercel.app'
];

export default async function handler(req, res) {
  const origin = req.headers.origin;

  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }

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
      database_id: process.env.DB_MOCKUPDESAIN_ID
    });
    res.status(200).json(resp.results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
