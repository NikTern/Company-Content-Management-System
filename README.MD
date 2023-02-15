# Content Management System!
Content management system (CMS) built using Node.js, Inquirer and MySQL. 

## Description

This project is a CMS command line interface application for managing a company's employee database, using Node.js, Inquirer and MySQL.

The app connects to a MySQL database and provides various options to view or add new departments, roles, and employees, as well as update an employee's role. The application uses the Inquirer.js package to prompt the user for input and the mysql2/promise package to interact with the database.

## Installation

The project can be accessed at: 

Installation steps:
1. Install Node.js and MySQL if not already installed on your machine.
2. Install the dependencies with 'npm install' in the command line
3. Modify the password field in the index.js file with your own MySQL root password.
4. Create a MySQL database using the schema.sql file provided in the repository.
5. Run the application with 'node index.js'

## Usage

If the user selects an option to view departments, roles, or employees, the relevant formatted tables will be displayed in the console.

If the user selects an option to add a department, role, or employee, the application prompts the user for the required information and the user's input is subsequently added to the database.

If the user selects the option to update an employee's role, they are prompted to select an employee to update and the new role for that employee, which is subsequently updated. 

If the user selects the option to exit the application, the database connection is closed and the application terminates.

Github Repository:
[![A video thumbnail shows the command-line employee management application.](./Assets/12-sql-homework-video-thumbnail.png)](https://2u-20.wistia.com/medias/2lnle7xnpk

Walkthrough Video:
![Note App](Assets/Note-taking-screenshot.png)


## License

MIT License

Copyright (c) [2022] [NikolasTernezis]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.