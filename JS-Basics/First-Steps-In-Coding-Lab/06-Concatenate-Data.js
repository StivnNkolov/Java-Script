function ConcatenateData(input_data){
    let firstName = String(input_data[0]);
    let lastName = String(input_data[1]);
    let age = String(input_data[2]);
    let town = String(input_data[3]);

    result = `You are ${firstName} ${lastName}, a ${age}-years old person from ${town}.`;

    console.log(result);
}

ConcatenateData(["Marin", "Marinov", 20, "Vratsa"]);