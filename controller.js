//Controller

function randomFood(index) 
{    
    const allFood = allFood[index];
    allFood.forslag = allFood[index][Math.floor(Math.random() * allFood[index]) ];

    updateView()
}


// function randomFood() 
// {       
//         eatThisFood = food[Math.floor(Math.random() * food.length)];

//     updateView()
// }


function addFood()
{
    foodInputField = document.getElementById("foodSuggestions"); 
    let newFood = foodInputField.value;

    if (isEmptyOrSpaces(newFood) == true) { alert("Du må skrive noe i feltet"); return; }


    food.push(newFood);
    alert('Ønsket er registrert!');
        
    updateView()
}

function isEmptyOrSpaces(newFood)
{
    return newFood === null || newFood.match(/^ *$/) !== null;
}
