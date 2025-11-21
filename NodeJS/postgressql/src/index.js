import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import pool from './config/db.js';
import useRoute from './routes/userRoutes.js';
import errorHandler from './middlewares/errorHandler.js';
import createUserTable from '../src/data/createUserTable.js';

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());

// Handle JSON parsing errors
app.use(express.json({ limit: '10mb' }));

// Routes
app.use("/api", useRoute);

// Error Handler for JSON parsing
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
    return res.status(400).json({
      statusCode: 400,
      message: 'Invalid JSON in request body',
      data: null
    });
  }
  next(err);
});

app.use(errorHandler);

// Create table
createUserTable();

// Test database connection
app.get('/', (req, res) => {
  pool.query("SELECT current_database()", (err, result) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    } else {
      return res.status(200).json({ db_name: result.rows });
    }
  });
});

// Server listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});