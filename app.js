const express = require ('express');
const cors = require('cors');
const pg = require('pg')

const app = express();

app.use(cors());
app.use(express.json());
app.set('port', 3000)



app.get('/', (req, res) => {
  res.send('Hello Worldx!');
});

app.listen(app.get('port'), '', ()=>{
    console.log('Server is running on port: ' + app.get('port'));
})

app.post('/e', (req, res) => {
    console.log(req.body);
    res.send({xd:2});
});

app.get('/users', (req, res) => {
    console.log("hi")
    res.send(users[findIndex(req.body.id)]);
});

function findIndex(id){
    return users.findIndex(user => user.id === id);
}



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

