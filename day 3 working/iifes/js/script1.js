(function (window) {
  var jeashhalGreeter = {};
  jeashhalGreeter.name = "Jeashhal";
  var greeting = "Hello ";
  jeashhalGreeter.sayHello = function () {
    console.log(greeting + jeashhalGreeter.name);
  }

  window.jeashhalGreeter = jeashhalGreeter;

})(window);
