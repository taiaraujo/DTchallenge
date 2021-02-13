const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const routes = require('./router');

const app = express();

//cors
app.use((req, res, next)=>{
    res.header("Access-Control-Allow-Origin", ['*']);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", 'GET');
    if(req.headers.authorization != process.env.TOKEN){
        return res.status(403).json({ error: 'No credentials sent!' });
    }
    next();
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use(routes);

app.listen(process.env.PORT || 3000);