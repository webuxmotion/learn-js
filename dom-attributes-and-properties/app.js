console.log("app.js running");
console.log("==================");

const externalLinks = document.querySelectorAll('a[href*="://"]:not([href^="http://internal.com"])');

for (const link of externalLinks) {
    link.style.color = 'orange';
}