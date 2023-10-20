// Embed deferred end of body
const availableWeek = [
  { year: 2023, weekNumber: 43, introCall: false, weekDescription: '23 October - 29 October 2023' },
  { year: 2023, weekNumber: 44, introCall: false, weekDescription: '30 October - 05 November 2023' },
  { year: 2023, weekNumber: 45, introCall: false, weekDescription: '06 - 12 November 2023' },
  { year: 2023, weekNumber: 46, introCall: false, weekDescription: '13 - 19 November 2023' },
  { year: 2023, weekNumber: 47, introCall: false, weekDescription: '20 - 26 November 2023' },
  { year: 2023, weekNumber: 48, introCall: false, weekDescription: '27 November - 03 December 2023' },
  { year: 2023, weekNumber: 49, introCall: false, weekDescription: '04 - 10 December 2023' },
  { year: 2023, weekNumber: 50, introCall: true, weekDescription: '11 - 17 December 2023' },
  { year: 2023, weekNumber: 51, introCall: true, weekDescription: '18 - 24 December 2023' },
  { year: 2023, weekNumber: 52, introCall: true, weekDescription: '25 - 31 December 2023' },
  { year: 2024, weekNumber: 1, introCall: true, weekDescription: '01 - 07 January 2024' },
  { year: 2024, weekNumber: 2, introCall: false, weekDescription: '08 - 14 January 2024' },
  { year: 2024, weekNumber: 3, introCall: false, weekDescription: '15 - 21 January 2024' },
  { year: 2024, weekNumber: 4, introCall: false, weekDescription: '22 - 28 January 2024' },
  { year: 2024, weekNumber: 5, introCall: true, weekDescription: '29 January - 04 February 2024' },
  { year: 2024, weekNumber: 6, introCall: true, weekDescription: '05 - 11 February 2024' },
  { year: 2024, weekNumber: 7, introCall: true, weekDescription: '12 - 18 February 2024' },
  { year: 2024, weekNumber: 8, introCall: true, weekDescription: '19 - 25 February 2024' },
  { year: 2024, weekNumber: 9, introCall: true, weekDescription: '26 February - 03 March 2024' },
  { year: 2024, weekNumber: 10, introCall: true, weekDescription: '04 - 10 March 2024' },
  { year: 2024, weekNumber: 11, introCall: true, weekDescription: '11 - 17 March 2024' },
  { year: 2024, weekNumber: 12, introCall: true, weekDescription: '18 - 24 March 2024' },
  { year: 2024, weekNumber: 13, introCall: true, weekDescription: '25 - 31 March 2024' },
  { year: 2024, weekNumber: 14, introCall: true, weekDescription: '01 - 07 April 2024' },
  { year: 2024, weekNumber: 15, introCall: true, weekDescription: '08 - 14 April 2024' },
  { year: 2024, weekNumber: 16, introCall: true, weekDescription: '15 - 21 April 2024' },
  { year: 2024, weekNumber: 17, introCall: true, weekDescription: '22 - 28 April 2024' },
  { year: 2024, weekNumber: 18, introCall: true, weekDescription: '29 April - 05 May 2024' },
  { year: 2024, weekNumber: 19, introCall: true, weekDescription: '06 - 12 May 2024' },
  { year: 2024, weekNumber: 20, introCall: true, weekDescription: '13 - 19 May 2024' },
  { year: 2024, weekNumber: 21, introCall: true, weekDescription: '20 - 26 May 2024' },
  { year: 2024, weekNumber: 22, introCall: true, weekDescription: '27 May - 02 June 2024' },
  { year: 2024, weekNumber: 23, introCall: true, weekDescription: '03 - 09 June 2024' },
  { year: 2024, weekNumber: 24, introCall: true, weekDescription: '10 - 16 June 2024' },
  { year: 2024, weekNumber: 25, introCall: true, weekDescription: '17 - 23 June 2024' },
  { year: 2024, weekNumber: 26, introCall: true, weekDescription: '24 - 30 June 2024' },
  { year: 2024, weekNumber: 27, introCall: true, weekDescription: '01 - 07 July 2024' },
  { year: 2024, weekNumber: 28, introCall: true, weekDescription: '08 - 14 July 2024' },
  { year: 2024, weekNumber: 29, introCall: true, weekDescription: '15 - 21 July 2024' },
  { year: 2024, weekNumber: 30, introCall: true, weekDescription: '22 - 28 July 2024' },
  { year: 2024, weekNumber: 31, introCall: true, weekDescription: '29 July - 04 August 2024' },
  { year: 2024, weekNumber: 32, introCall: true, weekDescription: '05 - 11 August 2024' },
  { year: 2024, weekNumber: 33, introCall: true, weekDescription: '12 - 18 August 2024' },
  { year: 2024, weekNumber: 34, introCall: true, weekDescription: '19 - 25 August 2024' },
  { year: 2024, weekNumber: 35, introCall: true, weekDescription: '26 August - 01 September 2024' },
  { year: 2024, weekNumber: 36, introCall: true, weekDescription: '02 - 08 September 2024' },
  { year: 2024, weekNumber: 37, introCall: true, weekDescription: '09 - 15 September 2024' },
  { year: 2024, weekNumber: 38, introCall: true, weekDescription: '16 - 22 September 2024' },
  { year: 2024, weekNumber: 39, introCall: true, weekDescription: '23 - 29 September 2024' },
  { year: 2024, weekNumber: 40, introCall: true, weekDescription: '30 September - 06 October 2024' },
  { year: 2024, weekNumber: 41, introCall: true, weekDescription: '07 - 13 October 2024' },
  { year: 2024, weekNumber: 42, introCall: true, weekDescription: '14 - 20 October 2024' },
  { year: 2024, weekNumber: 43, introCall: true, weekDescription: '21 - 27 October 2024' },
  { year: 2024, weekNumber: 44, introCall: true, weekDescription: '28 October - 03 November 2024' },
  { year: 2024, weekNumber: 45, introCall: true, weekDescription: '04 - 10 November 2024' },
  { year: 2024, weekNumber: 46, introCall: true, weekDescription: '11 - 17 November 2024' },
  { year: 2024, weekNumber: 47, introCall: true, weekDescription: '18 - 24 November 2024' },
  { year: 2024, weekNumber: 48, introCall: true, weekDescription: '25 November - 01 December 2024' },
  { year: 2024, weekNumber: 49, introCall: true, weekDescription: '02 - 08 December 2024' },
  { year: 2024, weekNumber: 50, introCall: true, weekDescription: '09 - 15 December 2024' },
  { year: 2024, weekNumber: 51, introCall: true, weekDescription: '16 - 22 December 2024' },
  { year: 2024, weekNumber: 52, introCall: true, weekDescription: '23 - 29 December 2024' },
  { year: 2025, weekNumber: 1, introCall: true, weekDescription: '30 December - 05 January 2025' },
  { year: 2025, weekNumber: 2, introCall: true, weekDescription: '06 - 12 January 2025' },
  { year: 2025, weekNumber: 3, introCall: true, weekDescription: '13 - 19 January 2025' },
  { year: 2025, weekNumber: 4, introCall: true, weekDescription: '20 - 26 January 2025' },
  { year: 2025, weekNumber: 5, introCall: true, weekDescription: '27 January - 02 February 2025' },
  { year: 2025, weekNumber: 6, introCall: true, weekDescription: '03 - 09 February 2025' },
  { year: 2025, weekNumber: 7, introCall: true, weekDescription: '10 - 16 February 2025' },
  { year: 2025, weekNumber: 8, introCall: true, weekDescription: '17 - 23 February 2025' },
  { year: 2025, weekNumber: 9, introCall: true, weekDescription: '24 February - 02 March 2025' },
  { year: 2025, weekNumber: 10, introCall: true, weekDescription: '03 - 09 March 2025' },
  { year: 2025, weekNumber: 11, introCall: true, weekDescription: '10 - 16 March 2025' },
  { year: 2025, weekNumber: 12, introCall: true, weekDescription: '17 - 23 March 2025' },
  { year: 2025, weekNumber: 13, introCall: true, weekDescription: '24 - 30 March 2025' },
  { year: 2025, weekNumber: 14, introCall: true, weekDescription: '31 March - 06 April 2025' },
  { year: 2025, weekNumber: 15, introCall: true, weekDescription: '07 - 13 April 2025' },
  { year: 2025, weekNumber: 16, introCall: true, weekDescription: '14 - 20 April 2025' },
  { year: 2025, weekNumber: 17, introCall: true, weekDescription: '21 - 27 April 2025' },
  { year: 2025, weekNumber: 18, introCall: true, weekDescription: '28 April - 04 May 2025' },
  { year: 2025, weekNumber: 19, introCall: true, weekDescription: '05 - 11 May 2025' },
  { year: 2025, weekNumber: 20, introCall: true, weekDescription: '12 - 18 May 2025' },
  { year: 2025, weekNumber: 21, introCall: true, weekDescription: '19 - 25 May 2025' },
  { year: 2025, weekNumber: 22, introCall: true, weekDescription: '26 May - 01 June 2025' },
  { year: 2025, weekNumber: 23, introCall: true, weekDescription: '02 - 08 June 2025' },
  { year: 2025, weekNumber: 24, introCall: true, weekDescription: '09 - 15 June 2025' },
  { year: 2025, weekNumber: 25, introCall: true, weekDescription: '16 - 22 June 2025' },
  { year: 2025, weekNumber: 26, introCall: true, weekDescription: '23 - 29 June 2025' },
  { year: 2025, weekNumber: 27, introCall: true, weekDescription: '30 June - 06 July 2025' },
  { year: 2025, weekNumber: 28, introCall: true, weekDescription: '07 - 13 July 2025' },
  { year: 2025, weekNumber: 29, introCall: true, weekDescription: '14 - 20 July 2025' },
  { year: 2025, weekNumber: 30, introCall: true, weekDescription: '21 - 27 July 2025' },
  { year: 2025, weekNumber: 31, introCall: true, weekDescription: '28 July - 03 August 2025' },
  { year: 2025, weekNumber: 32, introCall: true, weekDescription: '04 - 10 August 2025' },
  { year: 2025, weekNumber: 33, introCall: true, weekDescription: '11 - 17 August 2025' },
  { year: 2025, weekNumber: 34, introCall: true, weekDescription: '18 - 24 August 2025' },
  { year: 2025, weekNumber: 35, introCall: true, weekDescription: '25 - 31 August 2025' },
  { year: 2025, weekNumber: 36, introCall: true, weekDescription: '01 - 07 September 2025' },
  { year: 2025, weekNumber: 37, introCall: true, weekDescription: '08 - 14 September 2025' },
  { year: 2025, weekNumber: 38, introCall: true, weekDescription: '15 - 21 September 2025' },
  { year: 2025, weekNumber: 39, introCall: true, weekDescription: '22 - 28 September 2025' },
  { year: 2025, weekNumber: 40, introCall: true, weekDescription: '29 September - 05 October 2025' },
  { year: 2025, weekNumber: 41, introCall: true, weekDescription: '06 - 12 October 2025' },
  { year: 2025, weekNumber: 42, introCall: true, weekDescription: '13 - 19 October 2025' },
  { year: 2025, weekNumber: 43, introCall: true, weekDescription: '20 - 26 October 2025' },
  { year: 2025, weekNumber: 44, introCall: true, weekDescription: '27 October - 02 November 2025' },
  { year: 2025, weekNumber: 45, introCall: true, weekDescription: '03 - 09 November 2025' },
  { year: 2025, weekNumber: 46, introCall: true, weekDescription: '10 - 16 November 2025' },
  { year: 2025, weekNumber: 47, introCall: true, weekDescription: '17 - 23 November 2025' },
  { year: 2025, weekNumber: 48, introCall: true, weekDescription: '24 - 30 November 2025' },
  { year: 2025, weekNumber: 49, introCall: true, weekDescription: '01 - 07 December 2025' },
  { year: 2025, weekNumber: 50, introCall: true, weekDescription: '08 - 14 December 2025' },
  { year: 2025, weekNumber: 51, introCall: true, weekDescription: '15 - 21 December 2025' },
  { year: 2025, weekNumber: 52, introCall: true, weekDescription: '22 - 28 December 2025' },
  { year: 2026, weekNumber: 1, introCall: true, weekDescription: '29 December - 04 January 2026' },
];

// Make sure you have Moment.js and moment-timezone-with-data loaded

// Get the current date and time
var now = moment();

// Set the target day of the week to Wednesday (3 represents Wednesday, where Sunday is 0)
var targetDay = 3;

// Create a moment object for the current date at 19:00 CET
var nextWednesdayCET = moment.tz(now, "Europe/Paris") // "Europe/Paris" is the time zone for CET
  .day(targetDay)
  .hour(19)
  .minute(0)
  .second(0);

// Check if the specified time has already passed today
if (nextWednesdayCET.isBefore(now)) {
  // If it has passed, add one week to get next week's Wednesday
  nextWednesdayCET.add(1, 'weeks');
}

var weekNr = nextWednesdayCET.isoWeek();
for(var j = 0; j < availableWeek.length; j++) { // postpone if unavailable
    console.log(weekNr);
    console.log(availableWeek[j]);
    if (availableWeek[j].weekNumber !== weekNr) {
        console.log('fast-forwarding to week ' + weekNr + ' now at ' + availableWeek[j].weekNumber);
        continue;
    }
    if (availableWeek[j].year !== nextWednesdayCET.year()) {
        console.log('fast-forwarding to year ' + nextWednesdayCET.year() + ' now at ' + availableWeek[j].year);
        continue;
    }
    if (availableWeek[j].introCall !== true) {
        console.log('no availability here:');
        console.log(availableWeek[j]);
        nextWednesdayCET.add(1, 'weeks');
        weekNr = nextWednesdayCET.isoWeek();
        continue;
    }
    break;
}

// Convert the date and time to the user's local time zone
var userLocalTime = nextWednesdayCET.clone().tz(moment.tz.guess());

// Format the date and time as a string in the desired format
var formattedTime = userLocalTime.format("dddd D MMMM @ HH:mm A z");

(function() {
    var elements = document.getElementsByClassName('webinar-date-time');
    for(var i = 0, element = null; element = elements[i++];) {
        element.innerText = '🗓️' + formattedTime;
    }

    var addToCalendarButtons = document.getElementsByTagName('add-to-calendar-button');
    if(addToCalendarButtons.length) {
        addToCalendarButtons[0].setAttribute("startDate", userLocalTime.format('YYYY-MM-DD'));
        addToCalendarButtons[0].setAttribute("startTime", userLocalTime.format('HH:mm'));
        addToCalendarButtons[0].setAttribute("endTime", userLocalTime.add(1, 'hours').format('HH:mm'));
    }
})();
