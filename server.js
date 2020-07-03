const express = require('express');
const connectDb = require('./config/connectDB')
const user = require('./routes/user')
const employe = require('./routes/employe')
const annonce = require('./routes/annonce')
const app = express();
app.use(express.json())
connectDb();

app.use('/', user)
app.use('/employe', employe)
app.use('/annonce', annonce)
const PORT = process.env.PORT || 5000

app.listen(PORT, (err) =>
err ? console.log(err) : console.log(`Server is runnig on ${PORT}`)
) 