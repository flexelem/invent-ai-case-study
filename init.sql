-- init.sql
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
    updatedAt TIMESTAMP NOT NULL
);

-- Insert seed data
INSERT INTO users (name, createdAt, updatedAt) VALUES ('John Doe', '2025-03-04 14:30:00', '2025-03-04 14:30:00')
