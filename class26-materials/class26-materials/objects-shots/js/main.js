//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
//we need an event listener 
function getDrink(){
    document.querySelector('input').value
}
// fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)

fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita") // the server URL
    .then(res => res.json()) // parse response as JSON
    .then(data => {  // everything that comes back from the server goes through this data function
        console.log(data.drinks[0]) //console.log data.drinks[0] deals with just the first index of our array
        // now we need to plug in where to put in the name, photo, and instructions
        document.querySelector('h2').innerText = data.drinks[0].strDrink; //strDrink is the property that has the name of the drink
        document.querySelector('img').src = data.drinks[0].strDrinkThumb; // src changes the image, strDrinkThumb is the pic of our drink
        document.querySelector('h3').innerText = data.drinks[0].strInstructions; //StrInstructions is the property that gives the instructions
    })
    .catch(err => {
        console.log(`error ${err}`)
    })

    //leons example