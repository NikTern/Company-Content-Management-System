const inquirer = require('inquirer')
const express = require('express')
const queries = require('./prompts')
const mysql = require('mysql2/promise');

async function askDepartment() {  
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'Input department name:',
        name: 'department_name',
      }
    ])
    .then((response) => {
      return response.department_name
    })
}

async function askRole() {  
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'Input role name:',
        name: 'role_name',
      },
      {
        type: 'input',
        message: 'Input role salary:',
        name: 'role_salary',
      },
      {
        type: 'input',
        message: 'Input department number:',
        name: 'role_department',
      }
    ])
    .then((response) => {
      return [response.role_name, parseFloat(response.role_salary), parseInt(response.role_department)]
    })
}

async function askEmployee() {  
  return inquirer
    .prompt([
      {
        type: 'input',
        message: 'Input employee first name:',
        name: 'first_name',
      },
      {
        type: 'input',
        message: 'Input employee last name:',
        name: 'last_name',
      },
      {
        type: 'input',
        message: 'Input employee role ID:',
        name: 'employee_role',
      },
      {
        type: 'input',
        message: 'Input employee manager ID:',
        name: 'employee_manager',
      }
    ])
    .then((response) => {
      return [response.first_name, response.last_name, parseInt(response.employee_role), parseInt(response.employee_manager)]
    })
}

async function updateEmployee(db_employees) {  
  return inquirer
    .prompt([
      {
        type: 'list',
        message: 'Select an employee to update their role:',
        name: 'employee_toUpdate',
        choices: db_employees 
      },
      {
        type: 'input',
        message: 'Input new role id:',
        name: 'employee_newRole',
      }
    ])
    .then((response) => {
      return [response.employee_toUpdate, response.employee_newRole]
    })
}

module.exports = {askDepartment, askRole, askEmployee, updateEmployee}