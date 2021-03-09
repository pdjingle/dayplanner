$(document).ready(function() {
    // button for save
    $(".saveBtn").on("click", function() {
      var value = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      // Local storage api 
      localStorage.setItem(time, value);
    });
  
    function hourUpdater() {
      // Hours 
      var currentHour = moment().hours();
  
      //Time loop
      $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split("-")[1]);
  
        if (blockHour < currentHour) {
          $(this).addClass ("past");
        } 
        else if (blockHour === currentHour) {
          $(this).removeClass("past");
          $(this).addClass("present");
        } 
        else {
          $(this).removeClass ("past");
          $(this).removeClass ("present");
          $(this).addClass ("future");
        }
      });
    }
  
    hourUpdater();
  
    // Each time variation 
    var interval = setInterval(hourUpdater, 20000);
  
    //LocalStorage hours 
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));
    $("#hour-18 .description").val(localStorage.getItem("hour-18"));
    $("#hour-19 .description").val(localStorage.getItem("hour-19"));
    $("#hour-20 .description").val(localStorage.getItem("hour-20"));

    // display 
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
  });
