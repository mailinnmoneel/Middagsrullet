
updateView();

function updateView() {

    app.innerHTML=`
    <div class="parent">
        <h1> Usikker på hva du vil spise til middag i dag?</h1>
        <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
        <div id="suggestionDiv">${eatThisFood}</div>
        <div id="addField">
            <input id="foodSuggestions" type="text">
            <button id="registerButton" onclick="addFood()">Legg til egne middagsønsker</button>
          </div>
    </div>
    `;
}