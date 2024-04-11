export default () => {
    const now = new Date();
    const day = now.getDate();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    // Convert to 12-hour format
    const hours12 = hours % 12 || 12;

    // Get the day of the week
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthsOfYear = ["January", "February", "March", "April", "May", "June", "July","August","September", "October", "November", "December"];
    
    const dayOfWeek = daysOfWeek[now.getDay()];
    const monthOfYear = monthsOfYear[now.getMonth()];
    var date_time_info = new Object();
    date_time_info["weekday"] = dayOfWeek;
    date_time_info["day"] = day;
    date_time_info["month"] = monthOfYear;
    date_time_info["hour"] = hours12.toString();
    date_time_info["minute"] = minutes.toString();
    date_time_info["second"] = seconds.toString()
    date_time_info["ampm"] = ampm;
    return date_time_info;
};