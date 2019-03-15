var USERID = 2;
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
          .attr("src", "./images/"+dbItmes[i].itemImage)
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
        var td4 = $("<td>").html(
          "<input data-id='" +
            dbItmes[i].itemId +
            "' type='text' id='qty_" +
            dbItmes[i].itemId +
            "' class='form-control'>"
        );
        var td5 = $("<td>").html(
          "<button type='submit' data-id='" +
            dbItmes[i].itemId +
            "' class='btn btn-primary mb-2' id='addCart' onclick=addToCart(" +
            dbItmes[i].itemId +
            ");>Add to Cart</button>"
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
  //Fetch all items in cart with user info
  $("#cartItems").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    $.ajax("/api/incart/", {
      type: "GET"
    }).then(function(dbItems) {
      $("#cartList").empty();
      var orderSubTotal = 0 ;
      for (var i = 0; i < dbItems.length; i++) {
        orderSubTotal = parseFloat(orderSubTotal) +parseFloat(dbItems[i].totalAmt);
      var div = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
          <img src="./images/${dbItems[i].Item.itemImage}" class="card-img" alt="...">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title" style="float:left;">${dbItems[i].Item.itemName}</h5>
              <div style="float:right; font-weight:bolder;">$${dbItems[i].totalAmt}</div><br/>
              <div>&nbsp;<p class="card-text">Quantity : ${dbItems[i].quantity}</p></div>
              <p class="card-text">
              <small class="text-muted">Unit Price: ${dbItems[i].Item.itemPrice}</small></p>
            </div>
          </div>
        </div>
      </div>
      ` 
       
        $("#cartList").append(div);
      }
    var subtotal = `
    <span>Your Order Total: ${orderSubTotal}</span> 
    `
    $("#total").append(subtotal);
    });
  });

  $("#placeOrder").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    $.ajax("/api/incart/", {
      type: "GET"
    }).then(function(dbItems) { 
      var orderSubTotal = 0;
      var  taxAmount = 0;
      var orderTotal = 0;
      //update order details
       for (var i = 0; i < dbItems.length; i++) { 
         
        updatedOrder = {
          orderStatusId:2
        };
         orderSubTotal = parseFloat(orderSubTotal) +parseFloat(dbItems[i].totalAmt);
         orderTotal = parseFloat(taxAmount) + orderSubTotal

      $.ajax("/api/orderdetails/"+ dbItems[i].itemId + "/"+ USERID ,{
        type: "PUT",
        data: updatedOrder
      }).then(function(result) {
        console.log("order table updated");
      });
    }
    var userorderData ={
      orderSubTotal :orderSubTotal,
      taxAmount:taxAmount,
      orderTotal:orderTotal,
      orderStatusId:2,
      userId:USERID
    };
    $.ajax("/api/userorder/", {
      type: "POST",
      data:userorderData
    }).then(function(dbOrder) { 
      console.log(dbOrder);

      // $.ajax("/api/confirmorder/", {
      //   type: "POST",
      //   data:userorderData
      // }).then(function(dbOrder) { 
      //   console.log(dbOrder);
        location.assign("/confirmorder");
      //});
     
    });
    $.ajax("/api/Orderplaced/", {
      type: "GET"
    }).then(function(results) {

    });
    });
  });
});
//add cart button click
// eslint-disable-next-line no-unused-vars
function addToCart(itemId) {
  var alertMsg;
  $("#alertDiv").empty();
  var qty = $("#qty_" + itemId).val();
  if (qty > 0) {
    $.ajax("/api/items/" + itemId, {
      type: "GET"
    }).then(function(dbItem) {
      console.log(dbItem);
      var lineItemTotal = parseInt(qty) * dbItem.itemPrice;
      var orderData = {
        lineItemTotal: lineItemTotal,
        orderStatusId: 1,
        userId: USERID,
        itemId: itemId,
        itemQuantity: qty
      };
      console.log(orderData);
      // orderDetails Table row created
      $.ajax("/api/orderdetails/", {
        type: "POST",
        data: orderData
      }).then(function(result) {
        if (result) {
          console.log("Record inserted into orderDetails");
          alertMsg = $("<div>")
            .attr("class", "alert alert-success")
            .attr("role", "alert")
            .text("Product added to the cart");
          $("#alertDiv").append(alertMsg);
          $("#qty_" + itemId).val("");
        }
      });
    });
  } else {
    alertMsg = $("<div>")
      .attr("class", "alert alert-warning")
      .attr("role", "alert")
      .text("Quantity needed");
    $("#alertDiv").append(alertMsg);
  }
}
