var sides = [
"Miso Glazed Carrots",
"Coleslaw",
"Garden Salad",
"Crispy Potatoes",
"Sweet Potato Tots",
"Coconut Rice",
"Caeser Salad",
"Shrimp Summer Rolls",
"Garlic Butter Mushrooms",
"Hush Puppies"
];

var mains = [
"Spaghetti and Meatballs",
"Pineapple Chicken",
"Shakshuka",
"Thai Yellow Curry",
"Bibimbap",
"Chicken Parmesean",
"Butternut Squash Soup",
"BBQ Chicken Burgers",
"Ramen",
"Empanadas",
"Chicken Fried Rice",
"Sheet Pan Fajitas",
"Margarita Pizza"
];

var desserts = [
"Apple Pie",
"Lemon Meringue Pie",
"Black Forest Cake",
"Banana Bread",
"Peach Cobbler",
"Cheesecake",
"Funfetti Cake",
"Baklava",
"Flan",
"Macarons",
"Macaroons",
"Chocolate Cupcakes",
"Pavlova",
"Pumpkin Pie",
"Key Lime Pie",
"Tart Tatin",
"Croissants",
"Eclairs"
];


var sideButton = document.querySelector('#side');
var mainButton = document.querySelector('#main');
var dessertButton = document.querySelector('#dessert');
var entireMealButton = document.querySelector('#entire_meal');
var cookpot = document.querySelector('.cookpot');
var outputHeading = document.querySelector('.output-header');
var getRecipeButton = document.querySelector('#choose-recipe');
var output = document.querySelector('.output');

var chooseSide = ``;
var chooseMain = ``;
var chooseDessert = ``;
var wholeMeal = ``;

getRecipeButton.addEventListener("click", checkId);

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function checkId() {

    if(sideButton.checked) {
      chooseSide = sides[getRandomIndex(sides)];
      output.innerText = chooseSide;
    } if(mainButton.checked) {
      chooseMain = mains[getRandomIndex(mains)];
      output.innerText = chooseMain;
    } if(dessertButton.checked) {
      chooseDessert = desserts[getRandomIndex(desserts)];
      output.innerText = chooseDessert;
    } if(entireMealButton.checked) {
      wholeMeal = `${mains[getRandomIndex(mains)]} with a side of ${sides[getRandomIndex(sides)]} and ${desserts[getRandomIndex(desserts)]}`;
      output.innerText = wholeMeal;
    }
      updateDisplay();
  }


function updateDisplay() {
  cookpot.classList.add('hidden');
  output.classList.remove('hidden');
  outputHeading.classList.remove('hidden');
}



//create event listener attached to radio buttons
//function to identify which button was selected
//generate random number
//function to pull element from array at the random index
//update HTML with element Interpolated and hiding cookpot
