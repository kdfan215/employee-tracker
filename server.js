const inquirer = require("inquirer");
const mysql = require("mysql");
const contbl = require("console.table");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db"
});

connection.connect();
function addRole({ title, salary, department_id }) {
  connection.query(
    "INSERT INTO `role` (title, salary, department_id) VALUES (?, ?, ?)",
    [title, salary, department_id],
    function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    }
  );
}
function addDepartment({ name }) {
  connection.query(
    "INSERT INTO `department` (name) VALUES (?)",
    [name],
    function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    }
  );
}
function addEmployee({ first_name, last_name, role_id, manager_id }) {
  connection.query(
    "INSERT INTO `employee` (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
    [first_name, last_name, role_id, manager_id],
    function(error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
    }
  );
}

function viewRoles() {
  viewTable("role");
}

function viewTable(tableName) {
  connection.query(`SELECT * FROM ${tableName}`, function(
    error,
    results,
    fields
  ) {
    if (error) throw error;
    console.log("The solution is: ", results);
  });
}
//Inquireer asks the user for input and passes the nasers object to add role
// addrole({ title: "Engineer", salary: 100000, department_id: 65 });
//addDepartment({name:"sales"});
//addEmployee({first_name:"Fred", last_name:"Smith", role_id: 40, manager_id: 50});

viewRoles();
