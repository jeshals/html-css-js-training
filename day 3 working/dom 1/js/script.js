// DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);

function sayHello () {
  var name =
   document.getElementById("name").value;
  //  document.getElementsByClass("className");
  //  document.getElementByTagName("tagName");
   var message = "<h2>Hello " + name + "!</h2>";
      message += "<br>";
      message += "<h2 class='hello'>Hello " + name + "!</h2>";
      message += `<h2 class="hello">Hello ${name}!</h2>`

  // document
  //   .getElementById("content")
  //   .textContent = message;

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
