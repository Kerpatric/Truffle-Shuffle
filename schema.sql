DROP DATABASE IF EXISTS truffles_db;
CREATE DATABASE truffles_db;

USE truffles_db;

CREATE TABLE truffles (
  id INT(16) NOT NULL AUTO_INCREMENT,
  name VARCHAR(100) NOT NULL,
  price DECIMAL(4,2) NOT NULL,
  stock_quantity INT(10) NOT NULL,
  PRIMARY KEY (id)
);

SELECT * FROM truffles;
