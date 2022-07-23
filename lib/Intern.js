// import employee constructor
const Employee = require('./Employee');

//intern constructor extending employee constructor
class Intern extends Employee {
  constructor (name, id, email, school) {
    //call for employee constructor
    super(name, id, email);
    this.school = school;
  }
  //input for school
  getSchool(){
    return this.school;

  }
  // change employee role
  getRole(){
    return 'Intern';
  }
}

//export
module.exports = Intern;