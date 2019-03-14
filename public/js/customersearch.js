//Search button clicked
//Items shown that their description includes the search term
$("#btnSearch").click(function(event) {
  event.preventDefault();
  var searchTerm = $("#searchValue").val();
  console.log(searchTerm);
  $.ajax("/api/items/", {
    type: "GET"
  }).then(function(dbItmes) {
    if (dbItmes) {
      //Clear current items table
      $("#itemTable").empty();

      //Loop through the items
      for (var i = 0; i < dbItmes.length; i++) {
        //if lower case search term is in lower case item description, then include the item
        if (
          searchTerm !== "" &&
          dbItmes[i].itemDesciption.toLowerCase().indexOf(searchTerm) !== -1
        ) {
          console.log("using search term to show items");

          var outerDiv = $("<div>").attr("class", "card mb-3");
          var nxtDiv = $("<div>").attr("class", "row no-gutters");
          var coldiv = $("<div>").attr("class", "col-md-4");
          var img = $("<img>")
            .attr("src", "./images/tropicamazon_logo_small.png")
            .attr("class", "card-img");
          coldiv.append(img);
          var nxtColDiv = $("<div>").attr("class", "col-md-8");
          var bodyDiv = $("<div>").attr("class", "card-body");
          var title = $("<h5>")
            .attr("class", "card-title")
            .text(dbItmes[i].itemName);
          var descP = $("<p>")
            .attr("class", "card-text")
            .text(dbItmes[i].itemDesciption);
          var price = $("<span>")
            .attr("class", "text-muted")
            .text("$" + dbItmes[i].itemPrice);
          var priceP = $("<p>")
            .attr("class", "card-text")
            .html(price);
          bodyDiv.append(title, descP, priceP);
          nxtColDiv.append(bodyDiv);
          nxtDiv.append(coldiv, nxtColDiv);
          outerDiv.append(nxtDiv);
          var tr = $("<tr>");
          var td4 = $("<td>").html("<input type='text' class='form-control'>");
          var td5 = $("<td>").html(
            "<button type='submit' class='btn btn-primary mb-2' id='addCart'>Add to Cart</button>"
          );
          tr.append(outerDiv, td4, td5);
          $("#itemTable").append(tr);
        }

        //if search term is blank then show all items
        if (searchTerm === "") {
          var outerDiv = $("<div>").attr("class", "card mb-3");
          var nxtDiv = $("<div>").attr("class", "row no-gutters");
          var coldiv = $("<div>").attr("class", "col-md-4");
          var img = $("<img>")
            .attr("src", "./images/tropicamazon_logo_small.png")
            .attr("class", "card-img");
          coldiv.append(img);
          var nxtColDiv = $("<div>").attr("class", "col-md-8");
          var bodyDiv = $("<div>").attr("class", "card-body");
          var title = $("<h5>")
            .attr("class", "card-title")
            .text(dbItmes[i].itemName);
          var descP = $("<p>")
            .attr("class", "card-text")
            .text(dbItmes[i].itemDesciption);
          var price = $("<span>")
            .attr("class", "text-muted")
            .text("$" + dbItmes[i].itemPrice);
          var priceP = $("<p>")
            .attr("class", "card-text")
            .html(price);
          bodyDiv.append(title, descP, priceP);
          nxtColDiv.append(bodyDiv);
          nxtDiv.append(coldiv, nxtColDiv);
          outerDiv.append(nxtDiv);
          var tr = $("<tr>");
          var td4 = $("<td>").html("<input type='text' class='form-control'>");
          var td5 = $("<td>").html(
            "<button type='submit' class='btn btn-primary mb-2' id='addCart'>Add to Cart</button>"
          );
          tr.append(outerDiv, td4, td5);
          $("#itemTable").append(tr);
        }
      }
    }
  });
});
