
updateView();

function updateView() {

    app.innerHTML=`
    <div class="parent">
        <h1> Usikker på hva du vil spise til middag i dag?</h1>
        <button id="rulletDiv" onclick="randomFood()">Få et middagsforslag</button>
        <div id="suggestionDiv">${eatThisFood}</div>
        <div id="addField">
            <h2>Legg til middagsforslag:</h2>
            <div>
                <input id="foodSuggestions" type="text">
                <button id="registerButton" onclick="addFood()">Legg til</button>
            </div>
        </div>
    </div>
    `;
}