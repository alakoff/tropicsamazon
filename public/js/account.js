$(document).ready(function() {
  var app = require("../../routes/api-routes");
  

  $("#button").on("click", function() {
    event.preventDefault();
    var firstName = $("#firstName")
      .val()
      .trim();

    var lastName = $("#lastName")
      .val()
      .trim();

    var email = $("#email")
      .val()
      .trim();

    var address = $("#address")
      .val()
      .trim();

    var address2 = $("#address2")
      .val()
      .trim();

    var city = $("#city")
      .val()
      .trim();

    var state = $("#state")
      .val()
      .trim();

    console.log("-------------------------------------");
    console.log("name: " + firstName + " " + lastName);
    console.log("Email: " + email);
    console.log("Address: " + address);
    console.log("Address2: " + address2);
    console.log("City: " + city);
    console.log("State: " + state);
  });
});
