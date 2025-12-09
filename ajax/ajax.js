var pageCounter = 0;
var animalContainar = document.getElementById("animal-info");
var btn = document.getElementById("btn");

// Function to handle the button click
btn.addEventListener("click", function(){
    pageCounter++;
     if (pageCounter > 1) {
        btn.classList.add("hide-me");
    }
    else {
    var ourRequest = new XMLHttpRequest();
    ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
    ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderAnimal(ourData);
        
    };
    ourRequest.send();
}

    // Hide button after 3 clicks
    
});

// Function to render the fetched data
function renderAnimal(data) {
    var readData = "";

    // Loop through the array of animals
    for (i = 0; i < data.length; i++) {
        readData += "<p>" + data[i].name +" eat ";

        // Loop through the 'likes' foods array
        for (ii = 0; ii < data[i].foods.likes.length; ii++) {
            if (ii == 0) {
                readData += data[i].foods.likes[ii];
            } else {
                readData +=  " and "+ data[i].foods.likes[ii];
            }
        }

        readData += "and also catnim that is a" +data[i].species;

        readData += " it does not like ";

        // Loop through the 'dislikes' foods array
        for (ii = 0; ii < data[i].foods.dislikes.length; ii++) {
            if (ii == 0) {
                readData += data[i].foods.dislikes[ii];
            } else {
                readData += " nothing " + data[i].foods.dislikes[ii];
            }
        }

        readData += '.</p>';
    }

    // Insert the data into the HTML div
    animalContainar.insertAdjacentHTML('beforeend', readData);
}
