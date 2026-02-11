console.log("app.js running");


console.log(document.body.constructor.name);
console.log(document.body.toString());

console.log(document.body instanceof HTMLBodyElement); // true
console.log(document.body instanceof HTMLElement); // true
console.log(document.body instanceof Element); // true
console.log(document.body instanceof Node); // true
console.log(document.body instanceof EventTarget); // true

console.dir(document.body);

console.log(document.body.nodeName);
console.log(document.body.tagName);

console.log(document.body.childNodes);

console.log("==================");

for (let node of document.body.childNodes) {
    console.log(node.nodeName);
}

console.log("==================");

for (let node of document.body.childNodes) {
    console.log(node.tagName);
}

console.log("==================");

console.log(document.body.innerHTML);

console.log(document.body.querySelector("ul li p"));
document.body.querySelector("ul li p").innerHTML = "Some new text";

console.log(document.body.outerHTML);
document.body.firstElementChild.hidden = true;