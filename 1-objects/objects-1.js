// Example 1 - creation and properties

// Creating an object using object literal syntax
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    email: "john.doe@example.com",
    getFullName: function () {
        return this.firstName + " " + this.lastName;
    }
};
// Can also add properties dynamically
// person.salary = 6000;

// Accessing object properties
console.log(person.firstName);
console.log(person["lastName"]);
console.log(person.age);
console.log(person.getFullName());    