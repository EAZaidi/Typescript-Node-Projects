#! /usr/bin/env node

import inquirer from "inquirer"


let todos: string [] = ["Reading", "Coding"]

async function createTodo (todos:string[]){
    let exitLoop = false; 

do{
    let answer = await inquirer.prompt({
        name: "select",
        message: "Please select an operation: ",
        type: "list",
        choices:["add", "update", "view", "delete", "exit"] 
    })
    if(answer.select == "add"){
        let additem = await inquirer.prompt({
            name: "todo",
            message: "Add an item in todo list: ",
            type: "input"
        });
        todos.push(additem.todo)
        console.log(todos);
    }
    if(answer.select == "update"){
        let updateItem = await inquirer.prompt({
            name: "todo",
            message: "Select an item for update: ",
            type: "list",
            choices:todos.map(item => item)
        });
        let additem = await inquirer.prompt({
            name: "todo",
            message: "Add an item in todo list: ",
            type: "input"
        });

        let newItem = todos.filter(val => val !== updateItem.todo)
        todos = [...newItem,additem.todo]
        console.log(todos);
    }
    if(answer.select == "view"){
        console.log(todos);
    }
    if(answer.select == "delete"){
        let deleteItem = await inquirer.prompt({
            name: "todo",
            message: "Select an item to delete: ",
            type: "list",
            choices:todos.map(item => item)

    })
    let newItem = todos.filter(val => val !== deleteItem.todo);
    todos=[...newItem];
    console.log(todos);
    }
    else if(answer.select == "exit"){
        exitLoop = true;
    }
    } while (!exitLoop);

}
createTodo(todos);