//accessing date and time
const currentDateTimeStamp = moment();

//current hour
const currentHour = moment().hour();

currentDateTimeStamp.format("ddd, Do MMM, YYYY");

console.log(currentDateTimeStamp);

console.log(currentHour);
