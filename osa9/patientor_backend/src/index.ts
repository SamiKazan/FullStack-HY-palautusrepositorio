import express from 'express';
import cors from 'cors';
import patientRouter from './routes/patients';
import diagnosesRouter from './routes/diagnoses';

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

app.get('/api/ping', (_req, res) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/patients', patientRouter);

app.use('/api/diagnoses', diagnosesRouter);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});