// import employee constructor
const Employee = require('./Employee');

//constructor for engineer extending employee constructor
class Engineer extends Employee{
  constructor(name, id, email, github){
    //call for employee constructor
    super (name, id, email);
    this.github = github;
  }
  //github input
  getGithub (){
    return this.github;
  }

  //change employee role
  getRole (){
    return 'Engineer';
  }
}

//export
module.exports = Engineer;