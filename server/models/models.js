const { Pool } = require('pg');

const PG_URI = 'postgres://taysdhrk:p2yJGJ1aZDkdkUc7mHKhaJP0yFhMxvbh@lallah.db.elephantsql.com/taysdhrk';
//const PG_URI = process.env.REACT_APP_DATABASE_URL

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI
});

// Adding some notes about the database here will be helpful for future you or other developers.
// Schema for the database can be found below:
// https://github.com/CodesmithLLC/unit-10SB-databases/blob/master/docs/assets/images/schema.png

// We export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: async (text, params, callback) => {
    console.log('.env var: ', process.env.REACT_APP_DATABASE_URL)
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};
