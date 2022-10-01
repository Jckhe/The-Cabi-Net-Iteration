const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// middleware
const spiceController = require('./controllers/spiceController.js');
const userController = require('./controllers/userController.js');

// parsing and static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/build', express.static(path.resolve(__dirname, '../build')));

app.post('/signup', userController.signUp, (req, res) => {
    console.log('creating user');
    res.status(200).send("howdy")
})

app.get('/login', userController.logIn, (req, res) => {
    console.log('logging in');
    res.status(200).send(`${res.locals.username} IS LOGGED TF IN`)
})

// get request for spices
app.get('/spice/:user', spiceController.getSpices, (req, res) => {
    console.log('sending spices');
    res.status(200).json(res.locals.spices);
})

// post request for spices
app.post('/spice/:user', spiceController.createSpice, (req, res) => {
    console.log('creating spice');
    // may need to send created spice to front-end?
    res.status(200).json();
})

// patch request for spices
app.patch('/spice', spiceController.updateSpice, (req,res) => {
    console.log('updating spice');
    res.status(200).json();
})

// delete request for spices
app.delete('/spice', spiceController.deleteSpice, (req,res)=> {
    console.log('deleting spice');
    res.status(200).json();
})


app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

// ERROR HANDLERS
app.use('*', (req,res) => {
    res.status(404).send('404: Not Found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).send({ error: err });
});
  
app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
  
module.exports = app;