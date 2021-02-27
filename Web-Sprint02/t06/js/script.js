let firstName = String(prompt("What is your first name?"));
let lastName = String(prompt("What is your last name?"));
let firstResult = firstName.match(/^[a-z]+$/i)
let lastResult = lastName.match(/^[a-z]+$/i)

if (firstResult && lastResult) {
    firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1).toLowerCase();
    lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1).toLowerCase();
    console.log(`Hello, ${firstName} ${lastName}`);
    alert(`Hello, ${firstName} ${lastName}`);
}
else {
    console.log("Wrong input !");
    alert("Wrong input !");
}