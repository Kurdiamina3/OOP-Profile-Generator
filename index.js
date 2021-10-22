const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const fs = require('fs');

const inquirer = require('inquirer');

const teamArray = [];

const addManager = () => {
  return inquirer.prompt ([
    {
      type: 'input',
      name: 'name',
      message: "What is the Team Manager's name?",
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the Manager's name!")
          return false;
        }
      }
    },

    {
      type: 'input',
      name: 'id',
      message: "Please enter the Manager's ID number!",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log ("Please enter the Manger's ID")
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: "Please enter the Manager's email.",
      validate: email => {
        valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
        if (valid) {
          return true;
        } else {
          console.log ('Please enter an email')
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: "Please enter the Manager's office number",
      validate: nameInput => {
        if (isNaN(nameInput)) {
          console.log ("Please enter an office number")
          return false;
        } else {
          return true;
        }
      }
    }
  ])
  .then(managerInput => {
    const { name, id, email, officeNumber } = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    teamArray.push(manager);
    console.log(manager);
  })
};


