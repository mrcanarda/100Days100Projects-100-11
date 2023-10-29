const monday__link = document.querySelector(".monday__link");
const tuesday__link = document.querySelector(".tuesday__link");
const wed__link = document.querySelector(".wed__link");
const thu__link = document.querySelector(".thu__link");
const fri__link = document.querySelector(".fri__link");
const sat__link = document.querySelector(".sat__link");
const sun__link = document.querySelector(".sun__link");
const mon__price = document.querySelector(".mon__price");
const tue__price = document.querySelector(".tue__price");
const wed__price = document.querySelector(".wed__price");
const thu__price = document.querySelector(".thu__price");
const fri__price = document.querySelector(".fri__price");
const sat__price = document.querySelector(".sat__price");
const sun__price = document.querySelector(".sun__price");

// MONDAY

monday__link.addEventListener("mouseover", function () {
  mon__price.classList.remove("hidden");
});

monday__link.addEventListener("mouseout", function () {
  mon__price.classList.add("hidden");
});

// TUESDAY

tuesday__link.addEventListener("mouseover", function () {
  tue__price.classList.remove("hidden");
});

tuesday__link.addEventListener("mouseout", function () {
  tue__price.classList.add("hidden");
});

// WEDNESDAY

wed__link.addEventListener("mouseover", function () {
  wed__price.classList.remove("hidden");
});

wed__link.addEventListener("mouseout", function () {
  wed__price.classList.add("hidden");
});

// THURSDAY
thu__link.addEventListener("mouseover", function () {
  thu__price.classList.remove("hidden");
});

thu__link.addEventListener("mouseout", function () {
  thu__price.classList.add("hidden");
});

// FRIDAY

fri__link.addEventListener("mouseover", function () {
  fri__price.classList.remove("hidden");
});

fri__link.addEventListener("mouseout", function () {
  fri__price.classList.add("hidden");
});

// SATURDAY

sat__link.addEventListener("mouseover", function () {
  sat__price.classList.remove("hidden");
});

sat__link.addEventListener("mouseout", function () {
  sat__price.classList.add("hidden");
});

// SUNDAY

sun__link.addEventListener("mouseover", function () {
  sun__price.classList.remove("hidden");
});

sun__link.addEventListener("mouseout", function () {
  sun__price.classList.add("hidden");
});
