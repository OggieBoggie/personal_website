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
let code;

while(!finish){
    code = prompt("Enter a 4-digit course code");
    if(!isNaN(code) && code.length == 4)
        done = true;
}

