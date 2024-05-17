const express = require('express');
const mongoose = require('mongoose');
const cors = require ('cors');

const app = express();
const port = 3000;
app.use(cors());

app.use(express.json());// pour imposer à ma application de prendre les données en json 

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const contactRoute = require('./routes/contact');
app.use('',contactRoute)



// Connect to MongoDB without deprecated options
mongoose.connect('mongodb://localhost:27017/merncoursedb');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database connected successfully');
});

// Task: Ajouter un contact avec une méthode GET (non recommandée)



// Task: Afficher les contacts




// Task: Supprimer un contact




  // Task: Modifier un contact


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
