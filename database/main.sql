CREATE DATABASE IF NOT EXISTS art_gallery;

\c art_gallery;

CREATE TABLE art_pieces (
    id UUID PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    image_url TEXT NOT NULL,
    description TEXT NOT NULL,
    likes INT NOT NULL DEFAULT 0,
);

INSERT INTO art_pieces(id, image_url, description) VALUES ('ba6eb330-4f7f-11eb-a2fb-67c34e9ac07c', 'https://upload.wikimedia.org/wikipedia/commons/b/b4/Lionel-Messi-Argentina-2022-FIFA-World-Cup_%28cropped%29.jpg', 'ANCARA MESSI!');

INSERT INTO art_pieces(id, image_url, description) VALUES ('ba6eb330-4f7f-11eb-a2fb-67c34e9ac04e', 'https://test.com', 'STEVEN GERRARD!');