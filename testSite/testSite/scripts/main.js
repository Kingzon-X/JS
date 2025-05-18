var myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

// Листинг фото по клику
var myImage = document.querySelector("img");
myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/city.jpg") {
    myImage.setAttribute("src", "images/image.jpg");
  } else {
    myImage.setAttribute("src", "images/city.jpg");
}
};

document.querySelector("h1").onclick = function () {
  alert("Ouch! Stop poking me!");
};

// Приветствие
var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Введите ваше имя.");
  localStorage.setItem("Имя", myName);
  myHeading.textContent = "Добро пожаловать в персональный гид, " + myName;
}

if (!localStorage.getItem("Имя")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("Имя");
  myHeading.textContent = "Добро пожаловать в персональный гид, " + storedName + "!";
}

myButton.onclick = function () {
  setUserName();
};
   