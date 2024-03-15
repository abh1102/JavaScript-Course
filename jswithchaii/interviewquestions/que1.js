let students = [{
    name: "Abhishek", roll: "03", marks: "80"
},
{ name: "pragya", roll: "4", marks: "89" },
{ name: "amit", roll: "9", marks: "90" },
{ name: "amit kr.", roll: "10", marks: "89" }


]
let updatedstudent = students.map((student) => student.name.toUpperCase());
console.log(updatedstudent);
let morethana60 = students.filter((student) => student.marks > 80

)
console.log(morethana60);
let marksandrollgreater = students.map((student) => student.marks > 60 && student.roll > 4)
console.log(marksandrollgreater);

let marksandrollgreater1 = students.filter((student) => student.marks > 60 && student.roll > 4)
console.log(marksandrollgreater1);
let sum = students.reduce((acc, curr) => acc + parseInt(curr.marks), 0)
console.log(sum);
//RETRURN NAMES WHERE MARKS IS GREATER THAN 80
//CHAINING OF MAP AND FILTER
const names = students.filter((student) => student.marks > 80).map((student) => student.name);
console.log(names);