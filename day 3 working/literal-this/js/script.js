// Object literals and "this"
var literalCircle = {
  radius: 10,

  getArea: function () {
    var self = this;
    console.log(self);

    var increaseRadius = function () {
      // self.radius = 20;

      var _self = self;
      console.log(_self);

      var anotherNestedFunction = function () {
        _self.radius = 30;
      }

      anotherNestedFunction();
    };
    increaseRadius();
    console.log(this.radius);

    return Math.PI * Math.pow(this.radius, 2);
  }
};

console.log(literalCircle.getArea());
