console.log("========= app.js running =========");

let elements = document.querySelectorAll("ul > li:last-child");

for (let elem of elements) {
  console.log(elem.innerHTML); // "test", "passed"
}

setInterval(() => {
  //console.log(document.querySelectorAll('.name'));
}, 300);

for (let elem of document.body.children) {
  if (elem.matches('div[class$="nam"]')) {
    console.log("The archive reference: " + elem);
  }
}
