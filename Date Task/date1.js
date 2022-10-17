/*****************************************************************
 * Vanilla Date Exercises
 ******************************************************************/

// 1. Write a function that tests if something is a Date object or not. (Hint: Remember that Date is a class, so this would have to be an instance of that class...)

var dateNow = new Date();

function testDate (object){
  return object instanceof Date
}

 console.log(testDate(dateNow))

// 2. Create today's date

console.log (new Date())

// 3. Get the current timestamp (using a static method of Date)

var timestamp = new Date("2022-10-13T09:53:10");
console.log(timestamp.toLocaleDateString())

// 4. Create a date to represent next Christmas Day

var Xmas = new Date ("2022-12-25");

console.log(Xmas);

// 5. Work out how many days it is until christmas

var timeDif = Xmas.getTime() - dateNow.getTime()
var dayDif = Math.ceil(timeDif / (1000*60*60*24))

console.log(dayDif)


// 6. I'm going to make 2 random dates. I want you to log out which one is earlier (or if they are the same?!)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
  
  const date1 = new Date(
    new Date().getFullYear(),
    getRandomIntInclusive(0, 1),
    getRandomIntInclusive(1, 27)
  );
  
  console.log("date1", date1);
  
  const date2 = new Date(
    new Date().getFullYear(),
    getRandomIntInclusive(0, 1),
    getRandomIntInclusive(1, 27)
  );
  
  console.log("date2", date2); 

  function testTimeDif (date1, date2) {
    if (date1 < date2){
      return "date 1 is earlier"
    } else if (date1 > date2) {
      return "date 2 is earlier"
    } else {(date1 === date2)
      return "both dates are the same"
    }  
}
console.log (testTimeDif(date1, date2))
  
//   // 7. How do I test if a date is valid? ****
  
var date3 = new Date ("xyz")
console.log(date3)

// 8. Output today in the following format: MM-DD-YYYY - using the getter methods on the date object

console.log(`${dateNow.getMonth()} - ${dateNow.getDate()} - ${dateNow.getFullYear()}`);

// 9. Now output it using toLocaleDateString in english ('en-GB') and in german ('de-DE')

console.log (dateNow.toLocaleDateString(`en-GB`))
console.log (dateNow.toLocaleDateString(`de-DE`))

// 10. Output the current time in hours, mins & seconds

console.log (`${dateNow.getHours()} - Hours ${dateNow.getMinutes()} - Minutes ${dateNow.getSeconds()} - Seconds`)

// 11. Make a clock by starting with the current time and then every second adds a second to the date and prints it.

// var clock = new Date ()
// setInterval (function (){
//   clock.setSeconds(clock.getSeconds()+1)  
//   console.log(clock)
// },1000)



// 12. Create a copy of today

var Today = new Date()
var copyOfToday = new Date()

// 13. Use the setter methods to find out what is 3years, 2months and 1 day from now

var now = Date.now();
var future = new Date ()
future.setFullYear(future.getFullYear() + 3);
future.setMonth(future.getMonth() + 2);
future.setDate(future.getDate() + 1)


console.log(future)


// 14. Get your timezone from today (remember it's in mins and the sign is inverted)

var offset = new Date().getTimezoneOffset();
console.log(offset)

// Timezone is UTC +1

// 15. Use the Intl module formatter (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/format) to get the time in Sydney (https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)


const date4 = new Date();
options = {timeZone: "Australia/Sydney", hour: "numeric", minute: "numeric", second: "numeric"};
console.log(new Intl.DateTimeFormat('en-GB', options).format(date4));

// 16. Write a function that creates a years/months/days/hours/mins/secs/ms duration in ms.

function createDuration(
  years = 0,
  days = 0,
  hours = 0,
  mins = 0,
  secs = 0,
  ms = 0
) {
  console.log(
    `Creating a duration of: ${years} years, ${days} days, ${hours} hours, ${mins} mins, ${secs} secs, ${ms} ms`
  );

  const oneSecond = 1000; // because one second is 1000 milliseconds
  const oneMin = oneSecond * 60;
  const oneHour = oneMin * 60;
  const oneDay = oneHour * 24;
  const oneYear = oneDay * 365;
  return (
    ms +
    secs * oneSecond +
    mins * oneMin +
    hours * oneHour +
    days * oneDay +
    years * oneYear
  );
}

console.log(createDuration(undefined, undefined, undefined, 1, 6, 0)); // <-- 1 min 6 secs duration

// 17. Write a function that returns an object with the years/months/days/hours/mins/secs/ms between 2 dates

function dates(
  date8,
  date9
){
var timeDif = date8-date9
var years =  Math.floor(timeDif / 1000 / 60 / 60 / 24 / 365)
var days =  Math.floor((timeDif / 1000 / 60 / 60 / 24) - years*365)
var hours =  Math.floor(timeDif / 1000 / 60 / 60) - ( years*365) - (days*24)
var mins = Math.floor(timeDif / 1000 / 60)
var secs = Math.floor(timeDif / 1000)
var ms = timeDif
return console.log({years: years, days: days, hours: hours, mins: mins, secs: secs, ms:ms})

}

question17 = new Date()
question17a = new Date("2018-9-24")

dates(question17,question17a)

/*****************************************************************
 * For date-fns Exercises follow link on page
 ******************************************************************/

