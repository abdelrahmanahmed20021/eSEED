export const getLast30Days = () => {
  var today = new Date(); // Current date
  var days = []; // Array to store the last 30 days

  for (var i = 0; i < 30; i++) {
    var day = new Date(today); // Create a new date object for each day
    day.setDate(today.getDate() - i); // Subtract 'i' days from the current date
    days.push(day.toISOString().split("T")[0]); // Format the date as 'YYYY-MM-DD' and add it to the array
  }

  return { endDate: days[0], startDate: days[days.length - 1] };
};

export const formatDate = (dateArray) => {
  var formattedArray = [];

  for (var i = 0; i < dateArray.length; i++) {
    var date = new Date(dateArray[i]);
    var options = { day: "numeric", month: "short" };
    var formattedDate = date.toLocaleDateString("en-US", options);
    formattedArray.push(formattedDate);
  }

  return formattedArray;
};
