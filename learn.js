function myFunc(theObject) {
    theObject.make = "Toyota";
}

const myCar = {
    make: "Camry",
    model: "New",
    year: 2020,
}

console.log(myCar.make);

myFunc(myCar);

console.log(myCar.make);