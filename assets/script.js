//accessing date and time
const currentDateStamp = moment();

$("#currentDay").text(moment().format("ddd, MMMM, YYYY HH:mm"));

// target save button
//const saveButton = $("#saveBtn");

//saveButton.on("click", function () {
// console.log("button clicked");
//});

$("#saveBtn").click(function () {
  console.log("button clicked");
});
