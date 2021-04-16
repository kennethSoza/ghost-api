const { Pool } = require('pg');
const { parse } = require('pg-connection-string');

const connectionString = 'postgres://qqedpnsaieoahw:cd2168e8272420433cf5d4eb235674d8f070de5d73280357f1fbfa2c2cce449b@ec2-18-215-111-67.compute-1.amazonaws.com:5432/d6rtt9s497tbh4';

const config = parse(connectionString);

config.ssl = {
    rejectUnauthorized: false
}

const pool = new Pool(config);

const welcome = async(req, res)=>{
    res.status(200).json({ 
        message: 'Aloha'
    });
}

const getGhostPkmn = async (req, res) =>{
    const response = await pool.query('SELECT * FROM pokemon;');
    res.status(200).json(response.rows);
}

module.exports = {
    welcome, 
    getGhostPkmn
}