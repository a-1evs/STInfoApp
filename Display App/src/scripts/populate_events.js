import getCurrentDateTime from "./Time Stuff/getCurrentDateTime.js";
export default async () => {
    fetch('../json/events.json')
    .then(response => response.json())
    .then(data => {
    const weekday = getCurrentDateTime()["weekday"];
    const eventDisplayContainer = document.getElementById("events-display");
    // Create HTML elements to display the JSON data
    const events = data["Sunday"];
    console.log(events.length);

    for(var i = 0; i<events.length; i++){

        // container element for each event
        const eventDivElement = document.createElement("div");
        eventDivElement.classList.add("event")

        const nameElement = document.createElement("p");
        nameElement.textContent = events[i].Name;
        nameElement.classList.add("event-name");
        
        const staffDivElement = document.createElement('div');
        staffDivElement.classList.add("event-staff");
        events[i].Staff.forEach(staffMember => {
            const staffElement = document.createElement('p');
            staffElement.textContent = staffMember;
            staffDivElement.appendChild(staffElement);
        });

        const locationElement = document.createElement("p");
        locationElement.textContent = events[i].Location;


        // appends event container as child to events section 
        eventDisplayContainer.appendChild(eventDivElement);
        // appends each event element as a child to event container
        eventDivElement.appendChild(nameElement);
        eventDivElement.appendChild(staffDivElement);
        eventDivElement.appendChild(locationElement);
    }
    })
    .catch(error => console.error("Error fetching JSON data:", error));
};
  