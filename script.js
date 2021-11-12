function pizzaOven(crust, sauce, cheeses, toppings) {
    var pizza = {};
    pizza.crust = crust;
    pizza.sauce = sauce;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var crusts = [
    "deep dish",
    "hand tossed",
    "traditional",
    "thin and crispy",
    "stuffed"
];

var sauces = [
    "traditional",
    "bbq",
    "marinara",
    "garlic sauce",
    "alfredo sauce"
];

var cheeses = [
    "mozzarella",
    "feta",
    "cheddar",
    "three cheese blend",
    "parmesan"
];

var toppings = [
    "pepperoni",
    "sausage",
    "mushrooms",
    "olives",
    "tomatos",
    "bell peppers",
    "chicken",
    "beef",
    "banana peppers",
    "ham",
    "pineapples"
];

var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(pizza1);

var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(pizza2);

var pizza3 = pizzaOven("thin and crispy", "traditional", ["mozzarella"], ["ham", "sausage"]);
console.log(pizza3);

var pizza4 = pizzaOven("traditional", "marinara", ["mozzarella"], ["banana peppers", "ham", "onions"]);
console.log(pizza4);

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

//Couldn't figure this one out unfortunately, but taking from solution for future knowledge/use
function randomPizza() {
    var pizza = {};
    pizza.crust = randomPick(crusts);
    pizza.sauce = randomPick(sauces);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(4, 0); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());