import { notion } from '../notionClient.js';

export default async function dbToolsHandler(req, res) {
  try {
    const resp = await notion.databases.query({
      database_id: process.env.DB_TOOLS_ID
    });
    res.json(resp.results);
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
