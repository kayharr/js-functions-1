var hobbies = ["disc golfing", "mixology", "reading", "dancing", "crocheting", "baking"];

// console.log(hobbies.length);
hobbies.push("playing Dungeons & Dragons");

// console.log(hobbies[2]);
hobbies.pop();
// console.log(hobbies);
hobbies.splice(2,0, "running", "flying");
// console.log(hobbies);
hobbies.shift();
hobbies.unshift("tennis");
// console.log(hobbies);

var goals = ["exercising", "needleworking", "reading history books"];
// console.log(goals);

var allTheThings = hobbies.concat(goals);
// console.log(allTheThings);

var num = allTheThings.indexOf("dancing");
// console.log(num);

allTheThings.splice(5,1);
// console.log(allTheThings);

var plans = allTheThings.map(function(item){
    return `I can't wait to start ${item}.`;
});

console.log(plans);