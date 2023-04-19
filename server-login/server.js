const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');

const {Pool } = require('pg');

const app = express();

// Change to your database settings
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '',
    port: 5432,
});

app.use(bodyParser.json());

const publicPath = path.resolve(__dirname, '../client-login/dist/client-login');
app.use('/', express.static(publicPath));

app.post('/login', async (req, res) => {
    const user = req.body;

    const text = `SELECT * FROM users WHERE users.email = $1 AND users.password = $2`;
    const values = [user.email, user.password];
    const result = await pool.query(text, values);
    res.send(result.rows[0]);
});

app.post('/signup', async (req, res) => {
    const newUser = req.body;
    const text = 'INSERT INTO public.users(name, email, password) VALUES ($1, $2, $3) RETURNING *;';
    const values = [newUser.name, newUser.email, newUser.password];
    const result = await pool.query(text, values);
    res.send(result.rows[0]);
 
});

app.listen(3000, ()=> {
    console.log('Listening on port 3000');
});