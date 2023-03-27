const mysql = require('mysql2');
const db = require('../db/connection');

class Role{
    constructor(name, salary, department){
        this.title = name;
        this.salary = salary;
        this.department = department;
    }

    add(){
        db.promise().query(`INSERT INTO role (title, salary, department_id)
        VALUES (?, ?, ?)`, [this.title, this.salary, this.department])
                    .then(([rows, fields]) => {
                        console.log(`\nAdded ${this.title} role  sucessfully!`);
                    })
    }
    delete(id){
        db.promise().query('delete from role where id = ?',  id)
        .then(([rows, fields]) => {
            console.log(`\n${this.title} role was deleted!`);
        })
    }
}


module.exports = Role;