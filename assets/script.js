const workingHours = [
  {
    label: "9AM",
    key: 9,
  },
  {
    label: "10AM",
    key: 10,
  },
  {
    label: "11AM",
    key: 11,
  },
  {
    label: "12AM",
    key: 12,
  },
  {
    label: "1PM",
    key: 13,
  },
  {
    label: "2PM",
    key: 14,
  },
  {
    label: "3PM",
    key: 15,
  },
  {
    label: "4PM",
    key: 16,
  },
  {
    label: "5PM",
    key: 17,
  },
];

const timeBlocks = $("#time-blocks");

//accessing date and time
//const currentDateStamp = moment();

const renderDate = () => {
  return moment().format("dddd, MMMM Do YYYY");
};

// target save button
//const saveButton = $("#saveBtn");

//saveButton.on("click", function () {
// console.log("button clicked");
//});

$("#currentDay").text(renderDate);

$("#saveBtn").click(function () {
  console.log("button clicked");
});

const getEventForTimeBlock = (workingHour) => {};

const getClassName = (workingHour) => {
  const currentHour = moment().hour();
  //if workingHour is present
  if (workingHour === currentHour) {
    return "present";
  }
  //if workingHour is future
  if (workingHour > currentHour) {
    return "future";
  }
  return "past";
  //else past
};

const renderTimeBlocks = () => {
  //for each working hour create and append time block to time-blocks

  const renderTimeBlock = (workingHour) => {
    console.log(workingHour);
    //create timeblock
    const timeBlock = `<div class="row p-2 my-2 ${getClassName(
      workingHour.key
    )}">
    <div class="col-md-1 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">${
      workingHour.label
    }</div>
    <textarea class="col-md-9 col-sm-12" rows="3" data-textarea-key = ${
      workingHour.key
    }>${getEventForTimeBlock(workingHour.key)}</textarea>
    <div class="col-md-2 col-sm-12 text-center my-1 d-flex flex-column justify-content-center">
      <button type="button" data-hour=${
        workingHour.key
      } class="btn btn-success">Save</button>
    </div>
  </div>`;

    //append to parent (timeBlocks)
    timeBlocks.append(timeBlock);
  };
  workingHours.forEach(renderTimeBlock);
};

const onReady = () => {
  console.log("ready");
  renderDate();
  renderTimeBlocks();
  readFromLocalStorage();
};

const readFromLocalStorage = (key, defaultValue) => {
  //get from LS with key name
  const dataFromLS = localStorage.getItem(key);

  //parse data
  const parsedData = JSON.parse(dataFromLS);

  if (parsedData) {
    return parsedData;
  } else {
    return defaultValue;
  }
};

const saveToLocalStorage = (event) => {
  const target = $(event.target);
  if (target.is("button")) {
    console.log("click");
    const key = target.attr("data-hour");
    console.log(key);

    const value = $(`textarea[data-textarea-key="${key}"]`).val().trim();
    console.log(value);

    // const planner = readFromLocalStorage("planner", {});

    // planner[key] = value;

    // writeToLocalStorage("planner", planner);
    writeToLocalStorage(key, value);
  }
};

const writeToLocalStorage = (key, value) => {
  //value turned to string
  const stringifiedValue = JSON.stringify(value);

  localStorage.setItem(key, stringifiedValue);
};

timeBlocks.click(saveToLocalStorage);

$(document).ready(onReady);
