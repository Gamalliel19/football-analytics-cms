CREATE DATABASE football_analysis;

\c football_analysis;

CREATE TABLE content (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    likes INT NOT NULL DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);


INSERT INTO content (id, title, image_url, description, likes) VALUES ('ba6eb330-4f7f-11eb-a2fb-67c34e9ac07c', 'title', 'https://www.google.com', 'description', 0);
INSERT INTO users (username, password, email) VALUES ('admin', 'admin', 'admin@admin.com')