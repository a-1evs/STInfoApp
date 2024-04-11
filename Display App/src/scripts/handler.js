import test from "./Test Scripts/test.js";
import updateCurrentTime from "./Header/updateCurrentTime.js";
import updateWeather from "./Header/updateWeather.js";
import nextSection from "./nextSection.js";
import populate_events from "./populate_events.js";


//code that controls rotating sections by id

const sectionsContainer = document.getElementById("sections-container");



// Set intervals to switch sections every 10 seconds, update time every second, and update weather every 30 minutes
//const sectionIntervalId = setInterval(nextSection, 10000);
const timeIntervalId = setInterval(updateCurrentTime, 100);
const weatherIntervalId = setInterval(updateWeather, 1800000); // Update every 30 minutes

// ON UNLOAD
  // clear all intervals
window.addEventListener("unload", () => {
  //clearInterval(sectionIntervalId);
  clearInterval(timeIntervalId);
  clearInterval(weatherIntervalId);
});

// ON LOAD
    // Display First Section
    // Load Weather and Time 
window.addEventListener("load", () => {
  test();
  populate_events();
  //nextSection();
  updateWeather();
  updateCurrentTime();
});

  

    /*

      // Display events in the table
      function displayEvents(events) {
        const tableBody = document.querySelector("#events-table tbody");
        tableBody.innerHTML = "";
        events.forEach((event) => {
          const row = tableBody.insertRow();
          Object.values(event).forEach((value) => {
            const cell = row.insertCell();
            cell.textContent = value;
          });
        });
      }
*/
      