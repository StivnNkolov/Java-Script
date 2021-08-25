function ProjectsCreation(input_data) {
    let name = String(input_data[0]);
    let numberOfProjects = Number(input_data[1]);

    let timeForOneProject = 3;
    let timeForAllProjects = numberOfProjects * timeForOneProject;
    let outputResult = String(`The architect ${name} will need ${timeForAllProjects} hours to complete ${numberOfProjects} project/s.`);

    console.log(outputResult);
}
ProjectsCreation(["George", "4"]);
