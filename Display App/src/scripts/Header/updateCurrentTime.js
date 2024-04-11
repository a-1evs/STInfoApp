import getCurrentDateTime from "../Time Stuff/getCurrentDateTime.js";
import getWeekLetter from "../Time Stuff/getWeekLetter.js";
export default () => {
    const currentWeekdayElement =
    document.getElementById("current-weekday");
  const currentTimeElement = document.getElementById("current-time");

  const time_info = getCurrentDateTime();
  const weekday = time_info["weekday"];
  const currentTime = `${time_info["hour"]}:${time_info[
    "minute"
  ].padStart(2, "0")}:${time_info["second"].padStart(2, "0")} ${time_info["ampm"]}`;

  // Display the time and day
  currentWeekdayElement.textContent = weekday;
  currentTimeElement.textContent = currentTime;

  //updates letter of the week
  const currentWeekLetterElement = document.getElementById("week-letter");
  const weekLetter = ``
  currentWeekLetterElement.textContent

};