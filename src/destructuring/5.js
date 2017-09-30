//default value as function result

function defaultLastName() {
    console.log("function was called");
    return "Snow";
}

let [firstName, lastName=defaultLastName()] = ["Jon"];

console.log(firstName, lastName);

let [firstName2, lastName2=defaultLastName()] = ["Daenerys", "Targaryen"];

console.log(firstName2, lastName2);