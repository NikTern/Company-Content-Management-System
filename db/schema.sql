DROP DATABASE IF EXISTS company;

CREATE DATABASE company;
USE company;

CREATE TABLE department(
    id INT AUTO_INCREMENT PRIMARY KEY,
    department_name VARCHAR(30)
);

CREATE TABLE role(
    id INT AUTO_INCREMENT PRIMARY KEY,
    job_title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee(
    id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);
