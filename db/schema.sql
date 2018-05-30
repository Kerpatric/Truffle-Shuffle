DROP DATABASE IF EXISTS truffle_db;
CREATE DATABASE truffle_db;

USE truffle_db;

CREATE TABLE truffle (
  id INT(16) NOT NULL AUTO_INCREMENT,
  item_type VARCHAR(500) NOT NULL,
  name VARCHAR(100) NOT NULL,
  img_src VARCHAR(100) NOT NULL,
  size VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);
