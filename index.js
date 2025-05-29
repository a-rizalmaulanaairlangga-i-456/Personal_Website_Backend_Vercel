import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import dbToolsHandler from './handlers/db_tools.js';
import dbAcaAchievHandler from './handlers/db_aca_achiev.js';
import dbNonAcaAchievHandler from './handlers/db_nonaca_achiev.js';
import dbWebProjectHandler from './handlers/db_web_project.js';
import dbLogicProjectHandler from './handlers/db_logic_project.js';
import dbCollabWebProjectHandler from './handlers/db_collab_web_project.js';


dotenv.config();

const app = express();

app.use(cors());

app.get('/api/dbTools', dbToolsHandler);
app.get('/api/dbAcaAchiev', dbAcaAchievHandler);
app.get('/api/dbNonAcaAchiev', dbNonAcaAchievHandler);
app.get('/api/dbWebProject', dbWebProjectHandler);
app.get('/api/dbCollabWebProject', dbCollabWebProjectHandler);
app.get('/api/dbLogicProject', dbLogicProjectHandler);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
