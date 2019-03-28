
/*Function constructor
/**********************

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
console.log(mark.lastName);*/


/*Objects and functions

var obj1 ={ 
    name : 'sharmi',
    Age : 28
};
var obj2 = obj1;
obj1.age = 27;
console.log(obj1.age);
console.log(obj2.age);
 

var age = 25;
var obj = {
    name : 'libin',
    city :'portland'
};

function change(a,b)
{
    a=30,
    b.city='florida'
};

change(age,obj)
console.log(age);
console.log(obj);*/


//Passing Function as Arguements

var years = [1990,1995,1989,2013,1983,1940];

function arraycalc(arr,fn)
{
  
    var arres=[];
    for(var i=0; i < arr.length ; i++){
    arres.push(fn(arr[i]));
    }
    return arres;
}

function calcAge(el)
{
  return 2019-el;
}
function isfullAge(el)
{
    return el >= 18;
}
function heartBeat(el)
{
if( el >=18 && el <= 70){
    return Math.round(206.9-(0.67*el));
}
else{
    return 0;
}
}
var ages = arraycalc(years,calcAge);
var fullAge = arraycalc(ages,isfullAge);
var heartrate = arraycalc(ages,heartBeat);
console.log(ages);
console.log(fullAge);
console.log(heartrate);




