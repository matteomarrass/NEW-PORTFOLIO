const changeName = function () {
  document.getElementById("hello").innerHTML = "Hello, I'm Matteo.";
};

const changeBorder = function () {
  document.getElementById("short-description").innerHTML =
    "I'm an UX designer based in Sardinia, Italy. I love music and harmony between elements, and I want to use the energy that this passion gives to me into the UX/UI world!";
};

document.addEventListener("click", changeName);
document.addEventListener("click", changeBorder);
