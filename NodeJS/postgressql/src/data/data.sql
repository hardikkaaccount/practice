CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  age INT NOT NULL
);
INSERT INTO users (name, email, age) VALUES
('John Doe', 'john.doe@example.com', 30),
('Jane Smith', 'jane.smith@example.com', 25),
('Mike Johnson', 'mike.johnson@example.com', 35);
SELECT * FROM users;
