INSERT INTO department (department_name)
VALUES ("Writing"),
("Editorial"),
("Research"),
("Publishing");

INSERT INTO role (job_title, salary, department_id)
VALUES ("Journalist", 55000, 1),
("Editor", 65000, 2),
("Researcher", 55000, 3),
("Publisher", 80000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jeremy", "Clarkson", 1, null),
("Ricky", "Bobby", 1, null),
("Nuke", "Dukem", 2, 2),
("Jim", "Newman", 3, 2),
("Baron", "Meyer", 4, 1);