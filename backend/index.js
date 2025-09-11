const express = require('express')
const app = express();
const cors = require('cors');
const profileRoutes = require('./routes/profile');


app.use(express.json())
app.use(cors())
app.use('/api/profile', profileRoutes);


app.get('/', function(req, res){
    res.send('backend is running...')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})


app.listen(5000);