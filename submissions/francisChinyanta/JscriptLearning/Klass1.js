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

    get fname(){
        return this.firstname;
    }

    set fname(value){
        this.firstname = value;
    }
}

var Mymine = new Person("Francis", "Chiny",34);
console.log(Mymine.fname);

Mymine.fname = "Bethar";
console.log(Mymine.fname);