$(function() {
  $.ajax("/api/items/", {
    type: "GET"
  }).then(function(dbItmes) {
    if (dbItmes) {
      for (var i = 0; i < dbItmes.length; i++) {
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
    } else {
      $("#tbody").text("Nothing to show");
    }
  });

  $.ajax("/api/depts/", {
    type: "GET"
  }).then(function(dbDept) {
    if (dbDept) {
      var optionH = $("<option>").text("Select Category");
      $("#category").append(optionH);
      for (var i = 0; i < dbDept.length; i++) {
        var option = $("<option>")
          .attr("value", dbDept[i].departmentId)
          .text(dbDept[i].departmentName);
        $("#category").append(option);
      }
    }
  });
});

