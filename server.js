var express=require('express');
var path = require('path');
var bodyParser=require('body-parser');
var cors=require('cors');
var index=require('./routes/index');
var tasks = require('./routes/tasks');
var port = 3000;

var app = express();
//view engine
app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-With");
    res.setHeader("Access-Control-Allow-Methods","GET,POST,PUT,DELETE");
    next();
})
app.use(cors());
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.engine('html',require('ejs').renderFile);

// set static folder

app.use(express.static(path.join(__dirname,'client')));

//body parser

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/',index);
app.use('/api',tasks);

app.listen(port,function(){
    console.log('server started on port'+port);
})