//Controller
//Denne funker til objekter men er en dårlig løsning i dette tilfellet
//da det er orddeling/space
// function randomFood() {
//     var result;
//     var count = 0;
//     for (var obj in allFood)
//         if (Math.random() < 1/++ count )
//             result = obj;
    
//      eatThisFood = result;
//         updateView()
// }


// Denne funker til listen og ikke listen med objektene
function randomFood() 
{       
        eatThisFood = food[Math.floor(Math.random() * food.length)];

    updateView()
}


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
