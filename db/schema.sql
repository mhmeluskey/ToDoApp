CREATE DATABASE productive_db;
USE productive_db; 

CREATE TABLE items
(
    id int NOT NULL AUTO_INCREMENT, 
    name varchar (255) NOT NULL,
    done BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

INSERT INTO items (name, done) VALUES ('Go to the gymr', false);
INSERT INTO items (name, done) VALUES ('Start wash', false);
