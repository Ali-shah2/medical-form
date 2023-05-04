password:  705cs5qq3p
username: medical-form-35303131648d
url/ host: sdb-55.hosting.stackcp.net

<!-- table columns -->
first_name
last_name
res_address
zip_address
email
number

<!-- sequal qeury to create table -->
CREATE TABLE medicalform (
  id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  res_address VARCHAR(255) NULL,
  zip_address VARCHAR(100) NULL,
  email VARCHAR(100) NULL,
  number VARCHAR(20) NOT NULL
);

