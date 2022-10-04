const { Pool } = require('pg');

const PG_URI = 'postgres://iehawmdk:JIm-TS81Ef9tIu_tw4dWbDJhDAizUaeK@heffalump.db.elephantsql.com/iehawmdk'

const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};