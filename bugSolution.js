const express = require('express');
const app = express();
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON payload' });
  }
  next();
});
app.use(express.json());
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));