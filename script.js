var startMyDay = function () {
    return "Time for coffee and a shower!";
};

console.log(startMyDay());


var favoriteCookie = function (cookie) {
    return `My favorite cookie is ${cookie}`;
};

console.log(favoriteCookie("oatmeal raisin"));


var introduce = function (name, occupation) {
    return `My name is ${name} and I am a ${occupation}.`;
};

console.log(introduce("Kayla", "buying assistant"));
console.log(introduce("Josh", "CISO"));


var hydrationFeedback = function () {
    var numGlasses = Number(
        prompt("How many glasses of water did you have today?")
    );
    if (numGlasses >= 8) {
        console.log("Amazing! You must feel good.");
    } else if (numGlasses < 8) {
        console.log("Not bad, not bad. Let's try for a bit more tomorrow.");
    };
};

hydrationFeedback();