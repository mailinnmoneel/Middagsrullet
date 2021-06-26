
updateView();

function updateView() 
{
    for (let i = 0; i < allFood.length; i++) 
   
    app.innerHTML=`
    <div class="parent">
        <h1> Usikker på hva du vil spise til middag i dag?</h1>
        <button id="rulletDiv" onclick="randomFood(this, ${i})">Få et middagsforslag</button>
        <div id="suggestionDiv">${allFood.forslag}</div>
        <div id="addField">
            <h2>Legg til middagsforslag:</h2>
            <div>
                <input id="foodSuggestions" type="text">
                <button id="registerButton" onclick="addFood(this, ${i})">Legg til</button>
            </div>
        </div>
    </div>
    `;
}



