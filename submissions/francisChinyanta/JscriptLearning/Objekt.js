let person = {
    name: "Francis",
    age: 34,
    gender: "Male",
    interests:["Music","Sports"],
    greeting: function(){
        return "Hi! I'm " + this.name + '.';
    }
};
console.log(person.greeting())
console.log(person.age);
console.log(person.gender);
console.log(person.interests[1]);

console.log(person);
person.occupation = "Software Developer";
console.log(person);
console.log(person.occupation);