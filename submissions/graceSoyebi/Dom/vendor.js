let btns = document.querySelectorAll('.btn'),
badge = document.querySelector('.notification .badge');

let badgeCount = 0;
btns.forEach(btn => {
  btn.addEventListener('click', ()=>{
      if (btn.innerText === "Add to Cart"){
        btn.innerHTML = '<span class="remove-btn"><img src="/css/assets/FoodBag Task Assets(beginner)/remove.svg">Remove</span>'
        btn.style.backgroundColor = "grey"
        btn.style.color = "#fff";
        btn.style.border = "none";
        badge.style.display = "block";
        badgeCount++;
} 
else if (btn.innerText === "Remove"){
    btn.innerText = "Add to Cart";
    btn.style.backgroundColor = "#fff";
    btn.style.color = "#ad4c4c";
    badge.style.display = "block";
    btn.style.border = "1px solid #ad4c4c";
    badgeCount --;

}
if (badgeCount<=0){
    badge.style.display = "none";
} 
});
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////////////

// let grace = {
 //  myName:"Grace",
 //  age: 20,
//   state: "Ogun",
//   message: function(){
//    return this.age * 2
//     }
// }
// console.log(grace)
// console.log(grace.state)
// console.log(grace.message())

// class Laptop{
// constructor(name, model, year){
 //     this.name = name;
 //     this.model= model;
//     this.year = year
// }}

// let laptop1 = new Laptop("hp", "legion", 2022),
//     laptop2 = new Laptop("dell", "os", 2019)

 // console.log(laptop1)
// console.log(laptop2)
 // let myLaptop = new Object();

// myLaptop.name = "hp",
 // myLaptop.model = "legion",
// myLaptop.year = 2022

// console.log(myLaptop)
// console.log(myLaptop.model)

// let nums = [1,4,5,6]
// console.log(nums);

// class Student{
//     constructor(name, gender, age, classs){
//         this.name = name,
//         this. gender = gender,
//         this.age= age,
//         this.classs = classs
//     }
// }

// Student.prototype.status = function(){
//     return this.name + " is a student";
// }

// let graceinfo = new Student("grace", "f", 20, "200 level"),
//     ayinfo = new Student("ay", "m", 23, "100 level")

//     console.log(ayinfo.status())

// class Teacher extends Student{
//     constructor(name, gender, age, classs, course){
//         super(name, gender, age, classs);
//         this.course = course
//     }
// }

// let teacher1 = new Teacher("nana", "female", 50, "200 level", "computer science")
// console.log(teacher1.status())

