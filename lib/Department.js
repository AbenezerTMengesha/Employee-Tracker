const mysql = require('mysql2');
const db = require('../db/connection');

class Department{
    constructor(name){
        this.name = name;
    }

    add(){
        db.promise().query(`INSERT INTO department (name)
        VALUES (?)`, [this.name])
        .then(([rows, fields]) => {
            console.log(`\nAdded ${this.name} department  sucessfully!`);
        })
    }

    delete(id){
        db.promise().query('delete from department where id = ?',  id)
        .then(([rows, fields]) => {
            console.log(`\n${this.name} department deleted!`);
        })
    }

    budget(id){
        db.promise().query('select SUM(salary) as budget from role where department_id = ?', id)
        .then(([rows,fields]) => {
            const depart = rows.map(({budget}) => budget);
            let departBudget = [{name: this.name, budget: depart[0]}];
            console.log('\n');
            console.table(departBudget);
        })
    }
}

module.exports = Department;