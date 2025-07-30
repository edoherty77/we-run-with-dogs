// backend/index.js
import express from 'express';
import cors from 'cors';
const app = express();
app.use(cors());
app.use(express.json());

app.get('/ping', (req, res) => res.send('pong 🐶'));

app.listen(3001, () => console.log('Backend running on http://localhost:3001'));