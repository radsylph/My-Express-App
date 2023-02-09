const express = require ('express');
const cors = require('cors');
const session = require('express-session');
const bd = require('./settings.js');
const app = express();



app.use(cors());
app.use(express.json());
app.set('port', 3000)
app.use(session({
    secret: 'secret',
    resave:false,
    saveUninitialized: false,
    cookie: {
        maxAge: 1000*60*60*24,
        httpOnly:true,
        secure:false
    }
}));

app.post('/smth', (req, res) => {
    if(!req.session.logged){
        res.send({error: "User not logged in"});
    } else{
        res.send({message: "User logged in"});
    }
});


app.post('/login', (req, res) => {

    if(req.body.user=="user" && req.body.password=="password"){
        req.session.user = req.body.user;
        req.session.logged=true;
       // res.set('Set-Cookie', `sessionID=${req.sessionID}; HttpOnly;`)
        res.send({message:"cookie granted"});
    }else{
        res.send({error: "User not found"});
    }

});

app.post('/logout', (req, res) => {
    req.session.destroy();
    res.send({message:"cookie destroyed"});
});

app.get('/', (req, res) => {
  res.send('Hello Worldx!.');
});

app.listen(app.get('port'), '', ()=>{
    console.log('Server is running on port: ' + app.get('port'));
})

app.post('/e', (req, res) => {
    console.log(req.sessionID);
    res.send({xd:2});
});

app.post('/users', (req, res) => {
    if(users[findIndex(req.body.id)]==undefined){
        res.send({error: "User not found"});   
    }else{
      res.send(users[findIndex(req.body.id)]);
    }
});



const users = [
    {
        id: 1,
        name: "John",
        age: 30,
        city: "New York"
    },
    {
        id: 2,
        name: "Jane",
        age: 25,
        city: "London"
    },
    {
        id: 3,
        name: "Bob",
        age: 40,
        city: "Paris"
    }
]

