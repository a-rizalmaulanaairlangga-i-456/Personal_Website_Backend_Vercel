import { notion } from '../notionClient.js';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const resp = await notion.databases.query({
      database_id: process.env.DB_COLLAB_WEBPROJECT_ID
    });
    res.status(200).json(resp.results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
