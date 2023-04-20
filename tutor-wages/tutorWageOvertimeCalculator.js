function tutorOvertimeWageCalculator(timesheetOvertime, tutorLevel) {
    var sumOfHoursOvertime = 0;
    var wagesSumTotalOvertime = 0;
    var extraOvertime = 0;
    var timesheetArrayOvertime = timesheetOvertime.split("-")

    for (let i = 0; i < timesheetArrayOvertime.length; i++) {
        const elementDay = Number(timesheetArrayOvertime[i]);
        sumOfHoursOvertime = sumOfHoursOvertime + elementDay;
    }

    if (sumOfHoursOvertime > 40) {
        if (tutorLevel === 1) {
            wagesSumTotalOvertime = sumOfHoursOvertime* 75
        }else if (tutorLevel === 2) {
            wagesSumTotalOvertime = sumOfHoursOvertime* 90
        }else   if (tutorLevel ===3) {
            wagesSumTotalOvertime = sumOfHoursOvertime* 105
        }
    }
}