//Controller

function randomFood()
{   
    // let eatThisFood = allFood[1].forslag;

    // Map() - funksjon for å hente ut verdien av et felt for hvert objekt og lage en liste med dem.
    let = listOfFood = forslag.map( allFood => allFood.forslag);

    eatThisFood = allFood[].forslag [Math.floor(Math.random() * allFood[].forslag.length) ];

    console.log(eatThisFood);
    
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
