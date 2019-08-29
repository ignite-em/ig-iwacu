import express from 'express';

const {NODE_ENV, PORT} = process.env
const app = express();

app.use(express.json());
app.get('/', (_req, res) =>
  res.status(200).json({ message: `Welcome to Ignite'Em Iwacu API` })
);
app.use((_req, res) =>
  res.status(404).json({ error: { message: 'Router not found' } })
);

if (NODE_ENV !== 'test') {
  const port = PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Listening on port ${port}`);
  });
}

export default app;
