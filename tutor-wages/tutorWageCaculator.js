// create function called tutorWageCalculator that will take two params
// create var to take total sum of hours(sumOfHours) and total of wage (wagesTotal)
// first param (timeSheetStr) is string that shows hours worked per day separated by dash
// second param is tutor level (level) Shows hourly rate
// function must multiply sumOfHours with level and assign answer to wagesTotal
//return wagesTotal

function tutorWageCalculator(timesheetStr,level) {
    var sumOfHours = 0;
    var wagesSumTotal = 0;
    var timesheetArray = timesheetStr.split("-")

    if (timesheetArray.length <5 || timesheetArray>7) {
        var message = "invalid";
        
    }else{
        for (let i = 0; i < timesheetArray.length; i++) {
            const element = Number(timesheetArray[i]);
            sumOfHours = sumOfHours + element;
        }
    
        if (level === 1) {
            wagesSumTotal = sumOfHours* 75
        }else if (level === 2) {
            wagesSumTotal = sumOfHours* 90
        }else   if (level ===3) {
            wagesSumTotal = sumOfHours* 105
        }
    }

    return wagesSumTotal;

}
