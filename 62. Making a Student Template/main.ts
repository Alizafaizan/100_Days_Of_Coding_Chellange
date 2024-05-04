//Creating a blueprint (interface) for student information
interface student {
    name: string;
    age: number;
    courses: string[];
}

//Filling in the blueprint with an example student
let student: student = {
    name: "Aliza",
    age: 24,
    courses: ["Math", "Science", "History"]
};

//showing the student's information 
console.log(student);
// We're using the blueprint to make sure our students has  a name, age, and list of courses.
