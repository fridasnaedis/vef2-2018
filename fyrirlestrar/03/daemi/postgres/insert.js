const { Client } = require('pg')

const connectionString = 'postgres://:@localhost/examples';

const client = new Client({
  connectionString,
})
client.connect();

const query = 'INSERT INTO texts(name, text) VALUES($1, $2) RETURNING *';
const values = ['Foo', 'Foo bar'];

client.query(query, values, (err, res) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(res.rows);
  client.end();
});
