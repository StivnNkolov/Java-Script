function Salary(input) {
    let i = 0;
    let tabs = Number(input[0]);
    i++;
    let salary = Number(input[1]);
    i++;
    let isFinished = false;


    for (let index = 0; index <= tabs; index++) {
        let currentTab = input[i];
        i++;
        if (currentTab === "Facebook") {
            salary -= 150;
        } else if (currentTab === "Instagram") {
            salary -= 100;
        } else if (currentTab === "Reddit") {
            salary -= 50;
        }
        if (salary <= 0) {
            console.log("You have lost your salary.");
            isFinished = true
            break;
        }
    }if (!isFinished) {
        console.log(salary);
    }   
}
Salary(["10",
    "750",
    "Facebook",
    "Dev.bg",
    "Instagram",
    "Facebook",
    "Reddit",
    "Facebook",
    "Facebook"])




