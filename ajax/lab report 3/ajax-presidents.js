// var loadBtn = document.getElementById("loadBtn");
// var tableBody = document.getElementById("presidentsBody");
// var dataLoaded = false;

// loadBtn.addEventListener("click", function () {
//     if (dataLoaded) {
//         return;
//     }

//     var xhr = new XMLHttpRequest();

//     xhr.open(
//         "GET",
//         "https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json",
//         true
//     );

//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             if (xhr.status === 200) {
//                 var presidents = JSON.parse(xhr.responseText);
//                 renderTable(presidents);
//                 dataLoaded = true;

//                 loadBtn.textContent = "Data Loaded";
//                 loadBtn.disabled = true;
//                 loadBtn.classList.add("btn-disabled");
//             } else {
//                 alert("Error loading data. Status: " + xhr.status);
//             }
//         }
//     };

//     xhr.send();
// });

// // Create table rows from JSON data
// function renderTable(data) {
//     var rowsHtml = "";

//     for (var i = 0; i < data.length; i++) {
//         var p = data[i];

//         rowsHtml +=
//             "<tr>" +
//             "<td>" + (p.number || "") + "</td>" +
//             "<td>" + (p.president || "") + "</td>" +
//             "<td>" + (p.birth_year || "") + "</td>" +
//             "<td>" + (p.death_year === null ? "" : p.death_year) + "</td>" +
//             "<td>" + (p.took_office || "") + "</td>" +
//             "<td>" + (p.left_office || "") + "</td>" +
//             "<td>" + (p.party || "") + "</td>" +
//             "</tr>";
//     }

//     tableBody.innerHTML = rowsHtml;
// }


var tableBody = document.getElementById("presidentsBody");
var loadBtn = document.getElementById("loadBtn");

loadBtn.addEventListener("click", function(){
        var ourRequest = new XMLHttpRequest();
        ourRequest.open("GET", "https://raw.githubusercontent.com/hitch17/sample-data/master/presidents.json", true);
        
        ourRequest.onload = function(){
        var ourData = JSON.parse(ourRequest.responseText);
        renderTable(ourData);
        
    };
    ourRequest.send();
    loadBtn.classList.add("hide-me");    
});


function renderTable(data) {
    var tableData = "";

    for (var i = 0; i < data.length; i++) {
        var p = data[i];

        tableData += 
            "<tr>" +
            "<td>" + (p.number || "") + "</td>" +
            "<td>" + (p.president || "") + "</td>" +
            "<td>" + (p.birth_year || "") + "</td>" +
            "<td>" + (p.death_year === null ? "" : p.death_year) + "</td>" +
            "<td>" + (p.took_office || "") + "</td>" +
            "<td>" + (p.left_office || "") + "</td>" +
            "<td>" + (p.party || "") + "</td>" +
            "</tr>";
    }

    tableBody.innerHTML = tableData;
}