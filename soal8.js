const getPeriodTimes = (seconds) => {
    if (isNaN(seconds)) return seconds + "is not number"
    seconds = number(seconds);
    var days = Math.floor(seconds / (3600*24));
    var hr = Math.floor(seconds % (3600*24) / 3600);
    var mnts = Math.floor(seconds % 3600 /60);
    var scnd = Math.floor(seconds % 3600 % 60);

    var daysDisplay = days > 0 ? days + (days == 1 ? "day," : "days,") : "";
    var hrDisplay = hr > 0 ? hr + (hr == 1 ? "hour," : "hours,") : "";
    var mntsDisplay = mnts > 0 ? mnts + (mnts == 1 ? "minute," : "minutes,") : "";
    var scndDisplay = scnd > 0 ? scnd + (scnd == 1 ? "second," : "seconds,") : "";

    return daysDisplay + hrDisplay + mntsDisplay + scndDisplay;
}
console.log(getPeriodTimes("700005A"))
console.log(getPeriodTimes("700005"))
