let greeting1 = function () {
    console.log("Hallo1");
}

let greeting2 = function () {
    console.log("Hallo2");
}

let greeting3 = function () {
    console.log("Hallo3");
}

greeting1()
setTimeout(greeting2, 1000);
greeting3()