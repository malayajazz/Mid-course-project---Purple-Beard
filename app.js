// Days tabs
const tabs = document.querySelectorAll("[data-tab-target");
const tabContents = document.querySelectorAll("[data-tab-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.tabTarget);
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("active");
    });
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");
    target.classList.add("active");
  });
});

// Breakfast random options
let btn1 = document.getElementById("btn1");
let output1 = document.getElementById("output1");
let breakfast1 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn1.addEventListener("click", function () {
  let randomBreakfast1 =
    breakfast1[Math.floor(Math.random() * breakfast1.length)];
  output1.innerHTML = randomBreakfast1;
});

let btn4 = document.getElementById("btn4");
let output4 = document.getElementById("output4");
let breakfast4 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn4.addEventListener("click", function () {
  let randomBreakfast4 =
    breakfast4[Math.floor(Math.random() * breakfast4.length)];
  output4.innerHTML = randomBreakfast4;
});

let btn7 = document.getElementById("btn7");
let output7 = document.getElementById("output7");
let breakfast7 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn7.addEventListener("click", function () {
  let randomBreakfast7 =
    breakfast7[Math.floor(Math.random() * breakfast7.length)];
  output7.innerHTML = randomBreakfast7;
});

let btn10 = document.getElementById("btn10");
let output10 = document.getElementById("output10");
let breakfast10 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn10.addEventListener("click", function () {
  let randomBreakfast10 =
    breakfast10[Math.floor(Math.random() * breakfast10.length)];
  output10.innerHTML = randomBreakfast10;
});

let btn13 = document.getElementById("btn13");
let output13 = document.getElementById("output13");
let breakfast13 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn13.addEventListener("click", function () {
  let randomBreakfast13 =
    breakfast13[Math.floor(Math.random() * breakfast13.length)];
  output13.innerHTML = randomBreakfast13;
});

let btn16 = document.getElementById("btn16");
let output16 = document.getElementById("output16");
let breakfast16 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn16.addEventListener("click", function () {
  let randomBreakfast16 =
    breakfast16[Math.floor(Math.random() * breakfast16.length)];
  output16.innerHTML = randomBreakfast16;
});

let btn19 = document.getElementById("btn19");
let output19 = document.getElementById("output19");
let breakfast19 = [
  "🥣 " + " Cornflakes" + " 🥣",
  "🥞" + " Pancakes" + " 🥞",
  "🍓" + " Jam on toast" + " 🍞",
  "🍳" + " Eggs & beans on toast" + " 🍞",
  "🧀" + " Cheese toastie" + " 🥪",
  "🍫" + " Chocolate croissant" + " 🥐",
  "🍫" + " Chocolate waffles" + " 🧇",
];

btn19.addEventListener("click", function () {
  let randomBreakfast19 =
    breakfast19[Math.floor(Math.random() * breakfast19.length)];
  output19.innerHTML = randomBreakfast19;
});

// Lunch random options
let btn2 = document.getElementById("btn2");
let output2 = document.getElementById("output2");
let lunch2 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn2.addEventListener("click", function () {
  let randomLunch2 = lunch2[Math.floor(Math.random() * lunch2.length)];
  output2.innerHTML = randomLunch2;
});

let btn5 = document.getElementById("btn5");
let output5 = document.getElementById("output5");
let lunch5 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn5.addEventListener("click", function () {
  let randomLunch5 = lunch5[Math.floor(Math.random() * lunch5.length)];
  output5.innerHTML = randomLunch5;
});

let btn8 = document.getElementById("btn8");
let output8 = document.getElementById("output8");
let lunch8 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn8.addEventListener("click", function () {
  let randomLunch8 = lunch8[Math.floor(Math.random() * lunch8.length)];
  output8.innerHTML = randomLunch8;
});

let btn11 = document.getElementById("btn11");
let output11 = document.getElementById("output11");
let lunch11 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn11.addEventListener("click", function () {
  let randomLunch11 = lunch11[Math.floor(Math.random() * lunch11.length)];
  output11.innerHTML = randomLunch11;
});

let btn14 = document.getElementById("btn14");
let output14 = document.getElementById("output14");
let lunch14 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn14.addEventListener("click", function () {
  let randomLunch14 = lunch14[Math.floor(Math.random() * lunch14.length)];
  output14.innerHTML = randomLunch14;
});

let btn17 = document.getElementById("btn17");
let output17 = document.getElementById("output17");
let lunch17 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn17.addEventListener("click", function () {
  let randomLunch17 = lunch17[Math.floor(Math.random() * lunch17.length)];
  output17.innerHTML = randomLunch17;
});

let btn20 = document.getElementById("btn20");
let output20 = document.getElementById("output20");
let lunch20 = [
  "🐟" + " Tuna sandwich" + " 🥪",
  "🥚" + " Egg mayonnaise sandwich" + " 🥪",
  "🐟" + " Fish & Chips" + " 🍟",
  "🥗" + " Pasta salad" + " 🥗",
  "🥔" + " Jacket potato" + " 🥔",
  "🍚" + " Fried rice" + " 🍚",
];

btn20.addEventListener("click", function () {
  let randomLunch20 = lunch20[Math.floor(Math.random() * lunch20.length)];
  output20.innerHTML = randomLunch20;
});

// Dinner random options
let btn3 = document.getElementById("btn3");
let output3 = document.getElementById("output3");
let dinner3 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn3.addEventListener("click", function () {
  let randomDinner3 = dinner3[Math.floor(Math.random() * dinner3.length)];
  output3.innerHTML = randomDinner3;
});

let btn6 = document.getElementById("btn6");
let output6 = document.getElementById("output6");
let dinner6 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn6.addEventListener("click", function () {
  let randomDinner6 = dinner6[Math.floor(Math.random() * dinner6.length)];
  output6.innerHTML = randomDinner6;
});

let btn9 = document.getElementById("btn9");
let output9 = document.getElementById("output9");
let dinner9 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn9.addEventListener("click", function () {
  let randomDinner9 = dinner9[Math.floor(Math.random() * dinner9.length)];
  output9.innerHTML = randomDinner9;
});

let btn12 = document.getElementById("btn12");
let output12 = document.getElementById("output12");
let dinner12 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn12.addEventListener("click", function () {
  let randomDinner12 = dinner12[Math.floor(Math.random() * dinner12.length)];
  output12.innerHTML = randomDinner12;
});

let btn15 = document.getElementById("btn15");
let output15 = document.getElementById("output15");
let dinner15 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn15.addEventListener("click", function () {
  let randomDinner15 = dinner15[Math.floor(Math.random() * dinner15.length)];
  output15.innerHTML = randomDinner15;
});

let btn18 = document.getElementById("btn18");
let output18 = document.getElementById("output18");
let dinner18 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn18.addEventListener("click", function () {
  let randomDinner18 = dinner18[Math.floor(Math.random() * dinner18.length)];
  output18.innerHTML = randomDinner18;
});

let btn21 = document.getElementById("btn21");
let output21 = document.getElementById("output21");
let dinner21 = [
  "🍲" + " Beef soup" + " 🍲",
  "🍛" + " Chicken curry with rice" + " 🍛",
  "🍝" + " Spaghetti Bolognese" + " 🍝",
  "🍜" + " Fried noodles" + " 🍜",
  "🍕" + " Pizza" + " 🍕",
  "🍗" + " Roast chicken with vegetables" + " 🥬",
];

btn21.addEventListener("click", function () {
  let randomDinner21 = dinner21[Math.floor(Math.random() * dinner21.length)];
  output21.innerHTML = randomDinner21;
});
