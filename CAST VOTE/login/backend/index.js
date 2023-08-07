import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

const app = express();

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'matafurros9000',
    database: 'voting'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('Entrando a backend');
})

app.post('/checkUser', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const instrucSQL = 'SELECT * FROM voter';

    db.query(instrucSQL, (error, results, fields) => {
        if (error) {
            console.error(error);
        }

        const checkUser = results.find(object => 
            object.voter_email === email 
            && object.voter_password === password);

        if (checkUser) {
            return res.json(true);
        }
        else {
            return res.json(false);
        }
    })
})

app.listen(8800, () => {
    console.log('Conectado');
})