const courseList = [];

courseList[0] = {
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
};

courseList[1] = {
    code: "ACIT 1515",
    name: " Scripting for IT"
};

courseList[2] = {
    code: "ACIT 1630",
    name: "Database Systems"
};

let finish = false;
let course_code;

while(!finish){
    course_code = prompt("Enter a 4-digit course code");
    if(!isNaN(course_code) && course_code.length == 4)
        done = true;
}

let found = false;

for(let items of courseList) {
    if(courseList[i].code.includes(course_code)) {
        console.log(`Yes I am taking the course: ${courseList[i].code} - ${courseList[i].name}`);
        found = true;
        break;
    }
}
