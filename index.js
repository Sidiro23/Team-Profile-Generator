// link to page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

 
const fs = require('fs'); 
const inquirer = require('inquirer');

// employee array
const empArray = []; 

// manager questions
const addManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'managerName',
            message: 'Who is the manager of this team?', 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's ID.",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email.",
            
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number",
            
        }
    ])
    .then(answers=> {
         
        const manager = new Manager (answers.managerName, answers.id, answers.email, answers.officeNumber);

        empArray.push(manager); 
        console.log(manager); 
        
    });
};

//employee questions
const addEmployee = () => {
    console.log('Adding employees to the team');

    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            message: "Please choose your employee's role",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: "What's the name of the employee?", 
            
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the employee's ID.",
            
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the employee's email.",
            
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the employee's github username.",
            when: (input) => input.role === "Engineer",
            
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school",
            when: (input) => input.role === "Intern",
            
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
    .then(employeeData => {
        // employee types 

        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData; 
        let employee; 

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);

            console.log(employee);
        }

        empArray.push(employee); 

        if (confirmAddEmployee) {
            return addEmployee(empArray); 
        } else {
            return empArray;
        }
    })

};


// function to generate HTML 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the html has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

addManager()
  .then(addEmployee)
  .then(empArray => {
    return generateHTML(empArray);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
  });