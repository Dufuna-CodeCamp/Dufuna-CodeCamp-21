class Person {
    constructor (firstname, surname, age){
    this.firstname = firstname;
    this.lastname = surname;
    this.age = age;
    }

    fullname(){
        return 'My name is ' + this.firstname + ' ' + this.lastname;
    }

    static fullnames(obj){
        return 'My name is ' + obj.firstname + ' ' + obj.lastname;
    }
}
//var Mymine = new Person("Francis", "Chiny",34);
//console.log(Mymine);
//console.log(Mymine.fullname());
//console.log(Person.fullnames(Mymine));


class Parent extends Person{
    constructor(firstname, lastname, occupation){
        super(firstname, lastname);
        this.occupation = occupation;
    }
}
var Mymine = new Parent("Francis", "Chiny","SD");
//console.log(Mymine);
//console.log(Mymine.fullname());
console.log(Mymine);