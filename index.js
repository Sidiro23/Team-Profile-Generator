const inquirer = require('inquirer');
const fs = require('fs');
//generate html
const generateHTML = require('./src/generateHTML');
//Employee profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
//array for employees 
const empArray = [];

//manager prompt info
const addManager = ()=>{
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Who is the Manager of this team?'
    },
    {
      type: 'input',
      name: 'id',
      message: 'Please enter your ID number'

    },
    {
      type: 'input',
      name: 'email',
      message:"Please enter your email"
    },
    {
      type: 'input',
      name: 'officeNumber',
      message: 'Please enter your office number'
    }
  ])
  .then(managerInput=>{
    const {name, id, email, officeNumber} = managerInput;
    const manager = new Manager (name, id, email, officeNumber);

    empArray.push(manager);
    console.log(manager);
  })
};

const addEmployee = ()=>{
  console.log(
    'adding employees to the team'
  );

  return inquirer.prompt ([
    {
      type: 'list',
      name: 'role',
      message: 'Who do you want to add next?',
      choises: ['Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of the employee?'
    },
    {
      type: 'input',
      name:'id',
      message:'What is your ID number?'

    },
    {
      type:'input',
      name: 'email',
      message: 'Please enter your email'
    },
    {
      type: 'input',
      name:'github',
      message:'Please enter your github username',
      when: (input)=> input.role === 'Engineer'
    },
    {
      type:'input',
      name:'school',
      message: 'What school did you attend?',
      when: (input)=> input.role === 'Intern'
    },
    {
      type:'confirm',
      name:'confirmAddEmployee',
      message: 'Would you like to add more team members?',
      default:false
    }
  ])
  .then(employeeData =>{
    let{name, id, email, role, github, school,confirmAddEmployee}
= employeeData;  
let employee;
if (role === 'Engineer'){
  employee = new Engineer (name, id, email, github);
  console.log(employee);
}else if (role === 'Intern'){
  employee = new Intern (name, id, email, school);
  console.log(employee);
}

empArray.push(employee);

if (confirmAddEmployee){
  return addEmployee(empArray);
}else {
  return empArray;
}
})
};