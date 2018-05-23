DROP DATABASE IF EXISTS truffles_db;
CREATE DATABASE truffles_db;

USE truffles_db;

CREATE TABLE truffles (
  id INT(16) NOT NULL AUTO_INCREMENT,
  item_type VARCHAR(500) NOT NULL,
  item_type_description VARCHAR(100) NOT NULL,
  name VARCHAR(100) NOT NULL,
  img_src VARCHAR(100) NOT NULL,
  size VARCHAR(50) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE contact (
  id INT(16) NOT NULL AUTO_INCREMENT,
  contact_name VARCHAR(100) NOT NULL,
  contact_email VARCHAR(100) NOT NULL,
  contact_message VARCHAR(10000) NOT NULL,
  PRIMARY KEY (id)
);
