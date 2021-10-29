var sides = [
  Miso Glazed Carrots
Coleslaw
Garden Salad
Crispy Potatoes
Sweet Potato Tots
Coconut Rice
Caeser Salad
Shrimp Summer Rolls
Garlic Butter Mushrooms
Hush Puppies
];

var mains = [
  Spaghetti and Meatballs
Pineapple Chicken
Shakshuka
Thai Yellow Curry
Bibimbap
Chicken Parmesean
Butternut Squash Soup
BBQ Chicken Burgers
Ramen
Empanadas
Chicken Fried Rice
Sheet Pan Fajitas
Margarita Pizza
];

var desserts = [
  Apple Pie
Lemon Meringue Pie
Black Forest Cake
Banana Bread
Peach Cobbler
Cheesecake
Funfetti Cake
Baklava
Flan
Macarons
Macaroons
Chocolate Cupcakes
Pavlova
Pumpkin Pie
Key Lime Pie
Tart Tatin
Croissants
Eclairs
];

var getRecipeButton = document.querySelector('.get-recipe-button');
var sideButton = document.querySelector('#side');
var output = document.querySelector('.output');


getRecipeButton.addEventListener("click", checkId);

function getRandomIndex(array) {
  var randomNum = Math.floor(Math.random() * array.length);
}
var chooseSide = sides[getRandomIndex(sides)]
var chooseMain = mains[getRandomIndex(mains)]
var chooseDessert = desserts[getRandomIndex(desserts)]

function checkId() {
  for(var i = 0; i < array.length; i++) {
    if(sideButton.checked) {

    }
  }




//create event listener attached to radio buttons
//function to identify which button was selected
//generate random number
//function to pull element from array at the random index
//update HTML with element Interpolated and hiding cookpot
