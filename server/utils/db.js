const { Client } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const connectDb = async () => {
  try {
    const pool = new Pool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      post: process.env.DB_PORT,
      database: process.env.DB_NAME
  });
  await pool.connect();
  console.info(`Database connection established ${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);
  } catch (error) {
    console.error(error);
  }
}

module.exports = connectDb