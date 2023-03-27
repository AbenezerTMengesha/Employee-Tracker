USE employee_db;

INSERT INTO department (name)
VALUES 
    ('Engineering'),
    ('Finance'),
    ('Legal'),
    ('Marketing'),
    ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES
    ('Software Engineer', 100000, 1),
    ('Project Manager', 90000, 1),
    ('Financial Analyst', 70000, 2),
    ('Accountant', 60000, 2);
    ('Attorney', 110000, 3),
    ('Paralegal', 60000, 3),
    ('Marketing Manager', 77000, 4),
    ('Marketing Associate', 55000, 4),
    ('Sales Representativ', 50000, 5),
    ('Sales Manager', 70000, 5);
    
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Annabel', 'Nelson', 1, 2),
    ('Arun', 'Norris', 2, NULL),
    ('Zainab', 'Estes', 3, 4),
    ('Edith', 'Mccoy', 4, NULL),
    ('Daniel', 'Baird', 9, 4),
    ('Isobella', 'Vaughan', 10, 5),
    ('Everly', 'Pacheco', 11, 2),
    ('Jazmin', 'Connolly', 12, NULL), 
    ('Serena', 'Walker', 13, 7),
    ('Marcus', 'Welch', 14, NULL);  