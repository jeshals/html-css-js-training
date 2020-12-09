// Arrays
var array = new Array(); // var array = [];
// array[0] = "Jeashhal";
// array[1] = 2;
// array[2] = function (name) {
//   console.log("Hello " + name);
// };
// array[3] = {course: "HTML, CSS & JS"};

var array = [
  "Jeashhal",
  2,
  function (name) {
    console.log("Hello " + name);
  },
  "HTML, CSS & JS"
];

// console.log(array);
// array[2](array[0]);
// console.log(array[3].course);

// Short hand array creation
var names = ["Jeashhal", "John", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

names[100] = "Jim";
// console.log(names.length);
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

var names2 = ["Jeashhal", "John", "Joe"];

var myObj = {
  name: "Jeashhal",
  course: "HTML/CSS/JS",
  platform: "Google Meet"
};
// for (var key in myObj) {
//   console.log(key + ": " + myObj[key]); // obj.key
// }

// for (var i in names2) {
//   console.log("Hello " + names2[i]);
// }

names2.greeting = "Hi!";

for (var name in names2) {
  console.log("Hello " + names2[name]);
}
