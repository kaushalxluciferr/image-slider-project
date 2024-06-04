let arr = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg"];
let count = 0;
let btn1 = document.querySelector(".btn1");
let btn2 = document.querySelector(".btn2");
let diva = document.querySelector(".img-container");

btn1.addEventListener("click", () => {
  let a = arr[count];
  diva.style.backgroundImage = "url(" + a + ")";
  count = (count + 1) % arr.length;
});

diva.style.backgroundImage = "url(" + arr[0] + ")";

btn2.addEventListener("click", () => {
  count = (count - 1 + arr.length) % arr.length; 
  let b = arr[count];
  diva.style.backgroundImage = "url(" + b + ")";
});
