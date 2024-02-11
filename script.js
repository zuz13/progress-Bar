const currentDate  =  new Date();
let currentDayOfMonth = currentDate.getDate();
let currentYear = currentDate.getFullYear();


let date = document.getElementById('date-times');

// let updateProgress = (percent) => document.getElementById('progress-bar-fill').style.width = percent = '%';

function updateProgress(percent) {
    document.getElementById('progress-bar-fill').style.width = percent + '%';
}

// Example usage: Update progress to 50%
// updateProgress(50);


function getAllYearDays(year) {
    var days = [];
    var date = new Date(year, 0, 1); // January 1st of the given year
    
    // Loop through all days of the year
    while (date.getFullYear() === year) {
        var formattedDate = date.toISOString().slice(0, 10); // Format as "YYYY-MM-DD"
        days.push(formattedDate);
        date.setDate(date.getDate() + 1); // Move to the next day
    }
    
    return days;
}

// Usage example:
var currentYearA = new Date().getFullYear(); // Get the current year
var allYearDays = getAllYearDays(currentYearA);
console.log(allYearDays);



// let getPercent =(quantity,total) =>{
//     return (quantity / total)*100;

// }
// updateProgress(getPercent(sumDaysUntilStartOfYear(),allYearDays-1));
updateProgress((sumDaysUntilStartOfYear() / (allYearDays.length-1))*100);

console.log((sumDaysUntilStartOfYear() / (allYearDays.length-1))*100);

// var currentDate = new Date();
//  
console.log("Today is the " + currentDayOfMonth + "th day of the month. " + currentYear);




function sumDaysUntilStartOfYear() {
    var today = new Date();
    var startOfYear = new Date(today.getFullYear(), 0, 1);
    var oneDayInMilliseconds = 1000 * 60 * 60 * 24;
    var differenceInMilliseconds = today - startOfYear;
    var daysElapsed = Math.floor(differenceInMilliseconds / oneDayInMilliseconds);
    return daysElapsed;
}

console.log("Sum of days until the start of the current year:", sumDaysUntilStartOfYear());
date.innerHTML = `${currentYear} is ${parseInt((sumDaysUntilStartOfYear() / (allYearDays.length-1))*100)}% complete.`;


function updateProgress(percent) {
    var progressBarFill = document.getElementById('progress-bar-fill');
    progressBarFill.style.width = percent + '%';
    
    // Cambiar el color gradualmente
    var red = Math.floor(255 * (100 - percent) / 100);
    var green = Math.floor(255 * percent / 100);
    progressBarFill.style.backgroundColor = 'rgb(' + red + ',' + green + ',0)';
}

if ((sumDaysUntilStartOfYear() / (allYearDays.length-1))*100 === 100) {
    date.innerHTML = `Happy New Year`;
}else{
    date.innerHTML = `${currentYear} is ${parseInt((sumDaysUntilStartOfYear() / (allYearDays.length-1))*100)}% complete.`;
}