import getCurrentDateTime from "./getCurrentDateTime.js"
export default () => {
    // Week A: June 23 - June 28
    // Week B: June 30 – July 5
    // Week C: July 7 – 12
    // Week D: July 14 – 19
    // Week E: July 21 – 26
    // Week F: July 28 – August 2
    var day = getCurrentDateTime()["day"];
    var month = getCurrentDateTime()["month"];
    if (month == "June"){
        if (day >= 20 && day < 29){
            return "A"
        }
        else if(day >= 29){
            return "B";
        }
    }
    else if (month == "July"){
        if (day < 6){
            return "B";
        }
        else if(day >= 6 && day < 13){
            return "C";
        }
        else if(day >= 13 && day < 20){
            return "D";
        }
        else if(day >= 20 && day < 27){
            return "E";
        }
        else{
            return "F"
        }
    }
    else if (month == "August"){
        if (day < 3){
            return "F";
        }
    }
    return "Z";
    
    
    

};