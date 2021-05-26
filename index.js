const personsData = document.querySelector(".list");

let dataRequest = new XMLHttpRequest();
dataRequest.open('GET', 'data/data.json');
dataRequest.onload = function() {
    let personData = JSON.parse(dataRequest.responseText);
    console.log(personData);
    for (let i = 0; i < personData.length; i++) {
        // console.log(personData[i])
        personsData.innerHTML += "<div>" + "<p>" + "ID: " + personData[i].id + "</p>" + 
        "<p> Name: " + personData[i].first_name + " " + personData[i].last_name + "</p>" +
        "<p> Gender: " + personData[i].gender + "</p>" +
        "<p> Email: " + personData[i].email + "</p>" +
        "<p> IP Address: " + personData[i].ip_address + "</p>" + "</div>";
    }
    
};
dataRequest.send()



