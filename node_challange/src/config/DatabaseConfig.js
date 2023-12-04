const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');

// Function to create the database if it doesn't exist
// async function createDatabase() {
//   const connection = await mysql.createConnection({
//     user: 'root',
//     password: 'Rohit@8540',
//   });

//   try {
//     await connection.query('CREATE DATABASE IF NOT EXISTS express;');
//     console.log('Database created or already exists');
//   } catch (error) {
//     console.error('Error creating database:', error);
//   } finally {
//     await connection.end();
//   }
// }

// // Create the database
// createDatabase();

// Sequelize configuration
const sequelize = new Sequelize('mysql://root:Rohit@8540@localhost/express', {
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;

// const mysql = require('mysql2/promise');
    
//     mysql.createConnection({
//         user     : config.sequelize.username,
//         password : config.sequelize.password
//     }).then((connection) => {
//         connection.query('CREATE DATABASE IF NOT EXISTS myRandomDb;').then(() => {
//             // Safe to use sequelize now
//         })
//     })