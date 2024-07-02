let prompt = require('prompt-sync')();

// Define menu options

let menu_options = ["1. Search a Student", "2. Add a new student", "3. Remove a student"];
let student_list = ["Modesta", "Kinyanjui", "Marion", "Albert", "Ashly", "Winnie"];

function display_menu_options() {
    console.log("Welcome to CLI student inventory: ")
    menu_options.forEach(element => {
        console.log(element);
    });
}
// Search student from the list
function search_student() {
    let keyed_in_student_name = prompt("Kindly enter the student name: ");
    const found_student = student_list.find((student_name) => student_name.toLowerCase() === keyed_in_student_name.toLowerCase());

    if(found_student){
        console.log(`${found_student} is in the system`)
    }else{
        console.log("OH no! Student is not found");
        const addStudentConfirmation = prompt("Do you want to add " + keyed_in_student_name + " to the system? ");

        if(addStudentConfirmation.toLowerCase() === "yes"){
            student_list.push(keyed_in_student_name);
            console.log("Hooray! New student added to the system, below is your new list.");
            console.log(student_list);
        }
    }
}

// write a function to add new student.

function main() {
    display_menu_options();
    let userInput = parseInt(prompt("Kindly choose your action today, from the above options: "));

    switch (userInput) {
        case 1: search_student()
            break;
        case 2: console.log("option 2 selected")
            break;
        case 3: console.log("option 3 selected")
            break;
        default:
            console.log("Invalid input")
    }
}

main();