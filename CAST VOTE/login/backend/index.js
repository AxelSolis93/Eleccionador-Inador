import express from 'express';
import mysql from 'mysql'
import cors from 'cors'

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';

const app = express();

app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET'],
    credentials: true
}))
app.use(express.json())
app.use(cookieParser());
app.use(bodyParser.json());

app.use(session({
    key: 'userId',
    secret: '1234567890',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24,
    }
}))

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'matafurros9000',
    database: 'voting'
})

app.get('/', (req, res) => {
    res.json('Entrando a backend');
})

app.post('/login', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const instrucSQL = `SELECT * FROM voter WHERE voter_email = "${email}" and voter_password = "${password}"`;

    db.query(instrucSQL, (error, results) => {
        if (error) {
            console.error(error);
        }

        if (results.length > 0) {
            req.session.user = results[0].voter_email;
            console.log(req.session.user);
            return res.json({login: true, user: req.session.user});
        }
        else {
            return res.json({login: false});
        }
    })
})

app.get("/login", (req, res) => {

    if (req.session.user) {
        return res.json({valid: true, user: req.session.user});
    } else {
        return res.json({valid: false});
    }

})

app.listen(8800, () => {
    console.log('Conectado');
})