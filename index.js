const express = require('express');
const app = express();
const port = 3000;
app.use(express.json());

app.post('/calculadora/sumar', (req, res) => {

  const body = req.body;
  const result = body.numero1 + body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

app.post('/calculadora/restar', (req, res) => {

  const body = req.body;
  const result = body.numero1 - body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

app.post('/calculadora/multiplicar', (req, res) => {

  const body = req.body;
  const result = body.numero1 * body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

app.post('/calculadora/dividir', (req, res) => {

  const body = req.body;
  const result = body.numero1 / body.numero2;

  res.json(
    {
      resultado: result
    }
  );

});

app.listen(port, () => {
  console.log('Mi port ' + port);
});
