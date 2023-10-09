const users ={
    name:"Kiran",
    age:30,
    gender:"M",
    salary:4000,
    address:"Hyderabad"
};
//console.log(age)

//destructuring
const {name,age,gender,...others} = users;
console.log(name);
console.log(age);
console.log(gender)
console.log(others)