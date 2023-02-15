const inquirer = require('inquirer')
const mysql = require('mysql2/promise');
const prompts = require('./prompts');

// Connect to database
let db;
async function initializeDb() {
  db = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'YourPassword',
    database: 'company'
  });
  return db
}

initializeDb()

async function prompter() {  
  const response = await inquirer.prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'option',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        "Exit"
      ]
    }
  ]);

//---VIEWING DEPARTMENTS/ROLES/EMPLOYEES---//

  //---DEPARTMENTS---//
  if (response.option === 'View all departments') {
    //check connection is established to db
    if (!db) {
      await initializeDb();
    }
    
    //use await to run asynchronous functions such as reading/writing to database
    const [rows, fields] = await db.execute("SELECT * FROM department")

    //log results
    console.table(rows)

    //recurse function
    return prompter()
  }

  //---ROLES---//
  if (response.option === 'View all roles') {
    if (!db) {
      await initializeDb();
    }
    
    const [rows, fields] = await db.execute("SELECT role.id, role.job_title, role.salary, department.department_name FROM role JOIN department on role.department_id = department.id")
    console.table(rows)

    return prompter()
  }

  //---EMPLOYEES---//
  if (response.option === 'View all employees') {
    if (!db) {
      await initializeDb();
    }
    
    const [rows, fields] = await db.execute("SELECT employee.id, employee.first_name, employee.last_name, employee.manager_id, role.job_title, role.salary, department.department_name FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id")
    console.table(rows)
    
    return prompter()
  }

//---ADDING DEPARTMENTS/ROLES/EMPLOYEES---//
  //---DEPARTMENTS---//
  if (response.option === 'Add a department') {
    if (!db) {
      await initializeDb();
    }
    
    //Unpack inquirer questions to variables which then go into the query
    let newDepartment;
    await prompts.askDepartment().then((department) => {newDepartment = department})

    const [rows, fields] = await db.execute("INSERT INTO department (department_name) VALUES (?)", [newDepartment])
    console.log(`Department '${newDepartment}' added successfully!`)

    return prompter()
  }

  //---ROLES---//
  if (response.option === 'Add a role') {
    if (!db) {
      await initializeDb();
    }
    
    let title, salary, department_id
    await prompts.askRole().then((data) => {[title, salary, department_id] = data})

    const [rows, fields] = await db.execute("INSERT INTO role (job_title, salary, department_id) VALUES (?, ?, ?)", [title, salary, department_id])
    console.log(`Role '${title}' with salary ${salary} and department ${department_id} added successfully!`)

    return prompter()
  }

  //---EMPLOYEES---//
  if (response.option === 'Add an employee') {
    if (!db) {
      await initializeDb();
    }
    
    let first_name, last_name, employee_role, employee_manager
    await prompts.askEmployee().then((data) => {[first_name, last_name, employee_role, employee_manager] = data})

    const [rows, fields] = await db.execute("INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)", [first_name, last_name, employee_role, employee_manager])
    console.log(`Employee ${first_name} ${last_name} with role ${employee_role} and manager ${employee_manager} added successfully!`)


    return prompter()
  }

//---UPDATING EMPLOYEE ROLE---//
  if (response.option === 'Update an employee role') {
    if (!db) {
      await initializeDb();
    }
    
    const [rows, fields] = await db.execute("SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employee")
    let fullNames = rows.map(row => row.full_name)

    let employee_toUpdate, employee_newRole
    await prompts.updateEmployee(fullNames).then((data) => {[employee_toUpdate, employee_newRole] = data})

    const [updaterows, updatefields] = await db.execute("UPDATE employee SET role_id = ? WHERE CONCAT(first_name, ' ', last_name) = ?", [employee_newRole, employee_toUpdate])

    console.log(`Employee ${employee_toUpdate} role_id updated to ${employee_newRole} successfully!`)

    return prompter()
  }

//---EXIT---//
  else {
      console.log('Content Management System Closed')
      db.end()
      return
  }
}

prompter()
