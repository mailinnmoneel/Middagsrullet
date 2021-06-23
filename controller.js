//Controller
function randomFood() 
{   
        eatThisFood = food[Math.floor(Math.random() * food.length)];

    updateView()
}


function addFood()
{   
    foodInputField = document.getElementById("foodSuggestions"); 
    let newFood = foodInputField.value;

    food.push(newFood);

    alert('Ønsket er registrert!');

    updateView()
}
