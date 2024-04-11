import getWeekLetter from "./Time Stuff/getWeekLetter.js";
import getCurrentDateTime from "./Time Stuff/getCurrentDateTime.js";
export default () => {
    var weekLetter = getWeekLetter();
    var weekDay = getCurrentDateTime()["weekday"];
    if (weekLetter == "Z"){
        weekDay = "default";
    } 

    var path = `url('../images/Themes/Week${weekLetter}/${weekDay}.jpg')`;
    var body = document.getElementById("body");
    body.style.backgroundImage = path;
    body.style.backgroundSize = "cover";
    body.style.backgroundPosition = "center";


};