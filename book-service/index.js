const app = require('express')();

const PORT = 3001;

app.get('/', (req, res) => res.status(200).json({
  code: 200,
  message: req.query.message
}))

app.get('/book', (req, res) => res.status(200).json({
  code: 200,
  message: 'hello from BOOK-SERVICE'
}))

app.listen(PORT, () => console.log('BOOK-SERVICES running on port:', PORT));