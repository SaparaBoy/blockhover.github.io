var block = document.getElementsByTagName("span");
var row = document.getElementsByClassName("box");
var txt = document.getElementsByTagName("h1");
var number = Math.random() * 10;
if (window.innerWidth <= 768) {
  for (var i = 0; i < 10; i++) {
    row[i].style.display = "none";
  }
}
console.log(number);
var name = prompt("enter your name...");
if (number <= 3 && number >= 0) {
  txt[0].textContent = `${name} you are good.`;
} else if (number <= 6 && number >= 3) {
  txt[0].textContent = `${name} you are great. `;
} else {
  txt[0].textContent = `${name} you are awesome.`;
}
for (var i = 0; i < block.length; i++) {
  block[i].addEventListener("mouseenter", function() {
    this.style.top = 100 + "%";
    this.style.zIndex = "99";
  });
}
