// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    console.log("dom loaded");

    function sayHello (event) {
      event.stopPropagation(); // conceot of even bubbling and capturing

      this.textContent = "Said it!";
      var name =
       document.getElementById("name").value;
       var message = "<h2>Hello " + name + "!</h2>";

      document
        .getElementById("content")
        .innerHTML = message;

      if (name === "student") {
        var title =
          document
            .querySelector("#title")
            .textContent;
        title += " & Lovin' it!";
        document
            .querySelector("h1")
            .textContent = title;
      }
    }

    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", sayHello);
  }
);

document.addEventListener("click",
  function (event) {
    console.log("dom clicked");
  }
);

// document.addEventListener("keypress",
//   function (event) {
//     console.log("dom key pressed " + event.keycode);
//
//     event.preventDefault();
//     // event.stopPropogation();
//   }
// );



// document.querySelector("button")
//   .onclick = sayHello;
