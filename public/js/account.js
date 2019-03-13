$(document).ready(function() {
  $.ajax("/api/states/", {
    type: "GET"
  }).then(function(states) {
    if (states) {
      for (var i = 0; i < states.length; i++) {
        var option = $("<option>")
          // .attr("value", dbStates[i].stateId)
          .text(states[i].stateName);
        $("#state").append(option);
      }
    } else {
      $("#tbody").text("Nothing to show");
    }

    $("#button").on("click", function() {
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

      var city = $("#city")
        .val()
        .trim();

      var state = $("#state")
        .val()
        .trim();

      var zip = $("#inputZip")
        .val()
        .trim();

      console.log("-------------------------------------");
      console.log("name: " + firstName + " " + lastName);
      console.log("Email: " + email);
      console.log("Address: " + address);
      console.log("City: " + city);
      console.log("State: " + state);
      console.log("Zip code: " + zip);
      // var form = $("form");
      // if (form === "") {
      //   alert("addfaada");
      // }
      if (firstName && lastName && email && address && city && state && zip) {
        var newCustomer = {
          userName: firstName + lastName,
          userEmail: email,
          useAddress: address,
          city: city,
          state: state,
          zipcode: zip,
          userType: "customer",
          userPasswd: "1"
        };
        $.ajax("/api/account/", {
          type: "POST",
          data: newCustomer
        }).then(function(result) {
          if (result) {
            console.log("Display the Dashboard");
            // Reload the page to get the updated list
            // window.location.href("/customers");
            location.assign("/customers");
          }
        });
      } else {
        // alert("Not a valid entry");
      }
      reset();
    });
  });
});

function reset() {
  $("#form").trigger("reset");
}
