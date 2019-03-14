$(function() {
  $("#customerLogin").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
  });

  $("#cLoginSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var userEmail = $("#UserName2")
      .val()
      .trim();
    var PassWd = $("#PassWd2")
      .val()
      .trim();

    console.log(PassWd);
    console.log(userEmail);
    if (UserName && PassWd) {
      var LoginUser2 = {
        userEmail: userEmail,
        userPasswd: PassWd,
        userType: "customer"
      };
    }
    $.ajax("/api/signInCustomer/", {
      type: "POST",
      data: LoginUser2
    }).then(function(dbUser) {
      if (dbUser) {
        console.log("hello");
        // Reload the page to get the updated list
        location.assign("/customers");
      } else {
        console.log("hello not here");
        // location.assign("/customers");
      }
    });
  });

  $("#createAccount").on("click", function() {
    location.assign("/createUser");
  });
});
// // Get references to page elements
// var $exampleText = $("#example-text");
// var $exampleDescription = $("#example-description");
// var $submitBtn = $("#submit");
// var $exampleList = $("#example-list");

// // The API object contains methods for each kind of request we'll make
// var API = {
//   saveExample: function(example) {
//     return $.ajax({
//       headers: {
//         "Content-Type": "application/json"
//       },
//       type: "POST",
//       url: "api/examples",
//       data: JSON.stringify(example)
//     });
//   },
//   getExamples: function() {
//     return $.ajax({
//       url: "api/examples",
//       type: "GET"
//     });
//   },
//   deleteExample: function(id) {
//     return $.ajax({
//       url: "api/examples/" + id,
//       type: "DELETE"
//     });
//   }
// };

// // refreshExamples gets new examples from the db and repopulates the list
// var refreshExamples = function() {
//   API.getExamples().then(function(data) {
//     var $examples = data.map(function(example) {
//       var $a = $("<a>")
//         .text(example.text)
//         .attr("href", "/example/" + example.id);

//       var $li = $("<li>")
//         .attr({
//           class: "list-group-item",
//           "data-id": example.id
//         })
//         .append($a);

//       var $button = $("<button>")
//         .addClass("btn btn-danger float-right delete")
//         .text("ｘ");

//       $li.append($button);

//       return $li;
//     });

//     $exampleList.empty();
//     $exampleList.append($examples);
//   });
// };

// // handleFormSubmit is called whenever we submit a new example
// // Save the new example to the db and refresh the list
// var handleFormSubmit = function(event) {
//   event.preventDefault();

//   var example = {
//     text: $exampleText.val().trim(),
//     description: $exampleDescription.val().trim()
//   };

//   if (!(example.text && example.description)) {
//     alert("You must enter an example text and description!");
//     return;
//   }

//   API.saveExample(example).then(function() {
//     refreshExamples();
//   });

//   $exampleText.val("");
//   $exampleDescription.val("");
// };

// // handleDeleteBtnClick is called when an example's delete button is clicked
// // Remove the example from the db and refresh the list
// var handleDeleteBtnClick = function() {
//   var idToDelete = $(this)
//     .parent()
//     .attr("data-id");

//   API.deleteExample(idToDelete).then(function() {
//     refreshExamples();
//   });
// };

// // Add event listeners to the submit and delete buttons
// $submitBtn.on("click", handleFormSubmit);
// $exampleList.on("click", ".delete", handleDeleteBtnClick);

//sends user to create an account
// $("#create").on("click", function() {
//   console.log("create account");
//   window.location.href = "/createUser";
// });

// $("#customer").on("click", function() {
//   console.log("customer");
//   window.location.href = "/customers";
// });
