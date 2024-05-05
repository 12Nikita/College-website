//Q13.Delete the rollno property from the following object and print it:

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

console.log("Before deletion:", student);
delete student.rollno;
console.log("After deletion:", student);
