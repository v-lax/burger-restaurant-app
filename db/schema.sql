DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USER burgers_db;

CREATE TABLE burgers (
    id int AUTP_INCREMENT NOT NULL,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

