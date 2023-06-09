const mysql = require('mysql2');
const db = require('../db/connection');

class Employee{
    constructor(firstName, lastName, roleId, managerId){
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    add(){
        db.promise().query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES ( ?, ?, ?, ?)`, [this.firstName, this.lastName, this.roleId, this.managerId])
                    .then(([rows, fields]) => {
                        console.log(`Added employee ${this.firstName} ${this.lastName} sucessfully!`);
                    })
    }

    updateRole(){
        db.promise().query(`SELECT id FROM employee WHERE first_name = ? AND last_name = ?`, [this.firstName, this.lastName])
            .then(([rows, fields]) => {
                db.promise().query(`update employee set role_id = ? where id = ?`, [this.roleId, rows[0].id])
                    .then(([rows, fields]) => {
                        console.log(`\nUpdated employee ${this.firstName} ${this.lastName}'s role sucessfully!`);
                    })
            })
    }

    updateManager(){
        db.promise().query(`SELECT id FROM employee WHERE first_name = ? AND last_name = ?`, [this.firstName, this.lastName])
            .then(([rows, fields]) => {
                db.promise().query(`update employee set manager_id = ? where id = ?`, [this.managerId, rows[0].id])
                    .then(([rows, fields]) => {
                        console.log(`\nUpdated employee ${this.firstName} ${this.lastName}'s manager sucessfully!`);
                    })
            })
    }

    delete(id){
        db.promise().query('delete from employee where id = ?',  id)
        .then(([rows, fields]) => {
            console.log(`\nEmployee ${this.firstName} ${this.lastName} deleted!`);
        })
    }
}


module.exports = Employee;