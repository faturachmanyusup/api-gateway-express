const app = require('express')();

const PORT = 3002;

app.get('/', (req, res) => res.status(200).json({
  code: 200,
  message: 'hello from VIDEO-SERVICE'
}))

app.listen(PORT, () => console.log('VIDEO-SERVICES running on port:', PORT));