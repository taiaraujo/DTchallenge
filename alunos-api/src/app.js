const express = require('express')
const app = express()
const cors = require('cors')
/*
const axios = require('axios');

const url = 'https://direto-tweet.herokuapp.com/1/';

const getInfo = async () =>{
    const result = await axios.get(
        url,
        {
            headers: { Authorization : "Mq6Rbkubf8kQBLa6"               }
        }
    );

    return result.data[0].text;
}


app.get('/', function (req, res){
    res.send(getInfo())
    print(getInfo())
})

*/

const alunos = [
    {
        nome : 'Aluno1',
        idade : 10,
        turma : 'a'
    },
    {
        nome : 'Aluno2',
        idade : 11,
        turma : 'b'
    },
    {
        nome : 'Aluno3',
        idade : 12,
        turma : 'c'
    }
]

app.use(cors()) //habilitando cors na nossa aplicacao

app.get('/alunos', function (req, res){
    res.send(alunos)
})

app.listen(3000)