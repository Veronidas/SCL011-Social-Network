const express = require('express');

const config = require('./server/config');

require('./js/database');

const app = config (express());


app.listen(app.get('port'), () => {
    console.log('server on  port', app.get('port'));
})