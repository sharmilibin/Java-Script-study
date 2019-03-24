
/*Function constructor*/
/***********************/

var john = {
    name:'john',
    yearOfBirth:'1991',
    job: 'teacher'
}


var Person = function (name,yearOfBirth,job)
{
    this.name = name ;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
   
}
Person.prototype.calculateAge=function(){
    console.log(2019-this.yearOfBirth);
}
Person.prototype.lastName='smith';
var john = new Person ('john',1993,'developer');
var jane = new Person ('jane',1893,'developer1');
var mark = new Person ('mark',1991,'teacher');
john.calculateAge();
jane.calculateAge();
mark.calculateAge();
console.log(john.lastName);
console.log(jane.lastName);
console.log(mark.lastName);