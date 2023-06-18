//creation of fuction chechMarks 

function checkMarks (marks) {
    if (marks > 79) {
        console.log("A")
    }

    else if (marks => 60 && marks <= 79) {
        console.log("B-")
    }

    else if (marks <= 59 && marks > 49) {
        console.log("C-")
    }

    else if (marks <= 49 && marks >= 40) {
        console.log("D-")
    }

    else if (marks < 40) {
        console.log("E")
    }

    else{
        return "Invalid input "
    }
}

let marks = parseInt(60)
let grade = checkMarks(marks)
console.log(grade)
