import Express from 'express';
import { configDotenv } from 'dotenv';
import {
  getAllPlaylist,
  addNewPlaylist,
  deleteSongById,
  updateSongById,
  playSongById,
} from './controllers.js';

const app = Express();

// Load .env file
configDotenv();

// Make request body to JSON
app.use(Express.json());

// Endpoints
app.get('/playlist', getAllPlaylist);
app.post('/playlist', addNewPlaylist); // req body {title: string, artists: [string], url: string}
app.delete('/playlist/:id', deleteSongById);
app.put('/playlist/:id', updateSongById); // req body {title: string, artists: [string], url: string}
app.put('/playlist/play/:id', playSongById);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
