DROP TABLE IF EXISTS employee_db;
CREATE DATABASE employee_db;
USE employee_db;

CREATE TABLE department(
    id INTEGER  AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id),
    UNIQUE (name)
);

CREATE TABLE role (
    id INTEGER  AUTO_INCREMENT,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER  NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (department_id) REFERENCES department(id)
        ON DELETE CASCADE,
    CONSTRAINT uq_role UNIQUE (title, department_id)
);

CREATE TABLE employee (
    id INTEGER  AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER  NOT NULL,
    manager_id INTEGER  references id,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES role(id)
        ON DELETE CASCADE,
    CONSTRAINT uq_person UNIQUE (first_name, last_name, role_id, manager_id)
);