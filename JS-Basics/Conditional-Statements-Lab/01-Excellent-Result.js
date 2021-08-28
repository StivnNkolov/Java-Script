function Grade(user_input) {
    let grade = Number(user_input[0]);

    if (grade >= 5.5) {
        console.log("Excellent!");
    }
}
Grade(["6"])