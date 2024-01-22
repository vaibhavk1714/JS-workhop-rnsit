// Example 2 - Difference in handling this 

const person1 = {
    fname: "abc",
    lname: "xyz",
    fullName: function () {
        return this.fname + " " + this.lname;
    }
}

const person2 = {
    fname: "abc",
    lname: "xyz",
    fullName: () => {
        return this.fname + " " + this.lname;
    }
}

console.log(person1.fullName())
console.log(person2.fullName())