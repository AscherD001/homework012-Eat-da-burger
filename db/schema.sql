CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

DROP TABLE IF EXISTS burgers;
CREATE TABLE burgers
(
id int(5) NOT NULL,
burger_name varchar(255) NOT NULL,
devoured boolean DEFAULT false,
PRIMARY KEY (id)
);

SELECT * FROM burgers;