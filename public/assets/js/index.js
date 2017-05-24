 /* global moment */

// When user clicks add-btn
$("#add-submit").on("click", function(event) {
  event.preventDefault();

  // Make a newBurger object
  var newBurger = {
    burger_name: $("#author").val().trim(),
    burger_descript: $("#chirp-box").val().trim(),
    created_at: moment().format("YYYY-MM-DD HH:mm:ss")
  };

  console.log(newBurger);

  // Send an AJAX POST-request with jQuery
  $.post("/api/new", newBurger)
    // On success, run the following code
    .done(function() {

      var row = $("<div>");
      row.addClass("burger");

      row.append("<p>" + newBurger.burger_name + " chirped: </p>");
      row.append("<p>" + newBurger.burger_descript + "</p>");
      row.append("<p>At " + moment(newBurger.created_at).format("h:mma on dddd") + "</p>");

      $(".leftSideDiv").append(row);

    });

  // Empty each input box by replacing the value with an empty string
  $("#burger_name").val("");
  $("#burger_descript").val("");
});

// When the page loads, grab all of our chirps
$.get("/all", function(data) {

  if (data.length !== 0) {

    for (var i = 0; i < data.length; i++) {

      var row = $("<div>");
      row.addClass("chirp");

      row.append("<p>" + data[i].burger_name + "</p>");
      row.append("<p>" + data[i].burger_descript + "</p>");
      row.append("<p>At " + moment(data[i].created_at).format("h:mma on dddd") + "</p>");

        $(".leftSideDiv").append(row);

    }

  }

});
