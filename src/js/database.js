const mongoose =require('mongoose');

const { database} = require ('./keys');


mongoose.connect( database.URI, {
    useCreateIndex: true,
    useNewUrlParser: true
})
    .then(db => console.log('DB is connected'))
    .catch(err => console.error(err));