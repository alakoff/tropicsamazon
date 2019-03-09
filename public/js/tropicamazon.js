// // Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $("#managerLogin").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
  });

  $("#newItem").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
  });
  $("#newDept").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
  });
  $("#getItem").on("show.bs.modal", function(event) {
    var button = $(event.relatedTarget);
    var recipient = button.data("whatever");
    var modal = $(this);
    modal.find(".modal-body input").val(recipient);
  });
  //admin dashboard
  $("#mLoginSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var UserName = $("#UserName")
      .val()
      .trim();
    var PassWd = $("#PassWd")
      .val()
      .trim();
    if (UserName && PassWd) {
      var LoginUser = {
        userName: UserName,
        userPasswd: PassWd,
        userType: "admin"
      };
    }
    $.ajax("/api/signIn", {
      type: "POST",
      data: LoginUser
    }).then(function(result) {
      if (result) {
        console.log("Display the Dashboard");
        // Reload the page to get the updated list
        location.assign("/items");
      } else {
        alert("Not a valid entry");
      }
    });
  });
  $.ajax("/api/items/", {
    type: "GET"
  }).then(function(dbItmes) {
    if (dbItmes) {
      //console.log(dbItmes);
      var tableHead = $("<thead>");
      var theadTr = $("<tr>").html(
        "<th scope='col'>#</th><th scope='col'>ItemName</th><th scope='col'>ItemPrice</th><th scope='col'>StockQuantity</th><th scope='col'>Department</th><th scope='col'>ProductSale</th>"
      );
      tableHead.append(theadTr);
      var tbody = $("<tbody>");
      for (var i = 0; i < dbItmes.length; i++) {
        var tr = $("<tr>");
        var th = $("<th>")
          .attr("scope", "row")
          .text(dbItmes[i].itemId);
        var td1 = $("<td>").text(dbItmes[i].itemName);
        var td2 = $("<td>").text(dbItmes[i].itemPrice);
        var td3 = $("<td>").text(dbItmes[i].stockQuantity);
        var td4 = $("<td>").text(dbItmes[i].Department.departmentName);
        var td5 = $("<td>").text(dbItmes[i].productSales);
        var td6 = $("<td>").html(
          "<i id='getItem' data-toggle='modal' data-target='.bd-displayItem-modal-lg' onclick=editItem(" +
            dbItmes[i].itemId +
            "); data-id ='" +
            dbItmes[i].itemId +
            "'class='fa fa-pencil-square' aria-hidden='true' ></i>&nbsp;&nbsp;<i onclick=deleteItem(" +
            dbItmes[i].itemId +
            "); data-id=" +
            dbItmes[i].itemId +
            " class='fa fa-trash' aria-hidden='true'></i> "
        );
        tr.append(th, td1, td2, td3, td4, td5, td6);
        tbody.append(tr);
      }
      $("#itemTable").append(tableHead, tbody);
    } else {
      $("#tbody").text("Nothing to show");
    }

    $.ajax("/api/depts/", {
      type: "GET"
    }).then(function(dbDept) {
      if (dbDept) {
        var optionH = $("<option>").text("Select Department");
        $("#dept").append(optionH);
        for (var i = 0; i < dbDept.length; i++) {
          var option = $("<option>")
            .attr("value", dbDept[i].departmentId)
            .text(dbDept[i].departmentName);
          $("#dept").append(option);
        }
      } else {
        $("#tbody").text("Nothing to show");
      }
    });
  });

  $.ajax("/api/users/", {
    type: "GET"
  }).then(function(dbUsers) {
    if (dbUsers) {
      var tableHead = $("<thead>");
      var theadTr = $("<tr>").html(
        "<th scope='col'>#</th><th scope='col'>UserName</th><th scope='col'>UserEmail</th><th scope='col'>UserType</th>"
      );
      tableHead.append(theadTr);
      var tbody = $("<tbody>");
      for (var i = 0; i < dbUsers.length; i++) {
        var tr = $("<tr>");
        var th = $("<th>")
          .attr("scope", "row")
          .text(dbUsers[i].userId);
        var td1 = $("<td>").text(dbUsers[i].userName);
        var td2 = $("<td>").text(dbUsers[i].userEmail);
        var td3 = $("<td>").text(dbUsers[i].userType);
        var td4 = $("<td>").html(
          "<i onclick=editUser(" +
            dbUsers[i].userId +
            "); data-id ='" +
            dbUsers[i].userId +
            "'class='fa fa-pencil-square' aria-hidden='true' ></i>&nbsp;&nbsp;<i onclick=deleteUser(" +
            dbUsers[i].userId +
            "); data-id=" +
            dbUsers[i].userId +
            " class='fa fa-trash' aria-hidden='true'></i> "
        );

        tr.append(th, td1, td2, td3, td4);
        tbody.append(tr);
      }
      $("#userTable").append(tableHead, tbody);
    } else {
      $("#tbody").text("Nothing to show");
    }
  });

  $.ajax("/api/depts/", {
    type: "GET"
  }).then(function(dbDept) {
    if (dbDept) {
      var tableHead = $("<thead>");
      var theadTr = $("<tr>").html(
        "<th scope='col'>#</th><th scope='col'>DepartmentName</th><th scope='col'>OverHeadCost</th>"
      );
      tableHead.append(theadTr);
      var tbody = $("<tbody>");
      for (var i = 0; i < dbDept.length; i++) {
        var tr = $("<tr>");
        var th = $("<th>")
          .attr("scope", "row")
          .text(dbDept[i].departmentId);
        var td1 = $("<td>").text(dbDept[i].departmentName);
        var td2 = $("<td>").text(dbDept[i].overHeadCosts);
        var td3 = $("<td>").html(
          "<i onclick=editDepartment(" +
            dbDept[i].departmentId +
            "); data-id ='" +
            dbDept[i].departmentId +
            "'class='fa fa-pencil-square' aria-hidden='true' ></i>&nbsp;&nbsp;<i onclick=deleteDepartment(" +
            dbDept[i].departmentId +
            "); data-id=" +
            dbDept[i].departmentId +
            " class='fa fa-trash' aria-hidden='true'></i> "
        );
        tr.append(th, td1, td2, td3);
        tbody.append(tr);
      }
      $("#deptTable").append(tableHead, tbody);
    } else {
      $("#tbody").text("Nothing to show");
    }
  });

  $("#newDeptSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var DeptName = $("#dept-name")
      .val()
      .trim();
    var DeptOHC = $("#dept-ohc")
      .val()
      .trim();
    if (DeptName && DeptOHC) {
      var newDept = {
        departmentName: DeptName,
        overHeadCosts: DeptOHC
      };
      $.ajax("/api/createDept", {
        type: "POST",
        data: newDept
      }).then(function(result) {
        if (result) {
          console.log("Display the Dashboard");
          // Reload the page to get the updated list
          location.assign("/depts");
        }
      });
    } else {
      alert("Not a valid entry");
    }
  });

  $("#newItemSubmit").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var ItemName = $("#item-name")
      .val()
      .trim();
    var ItemPrice = $("#item-price")
      .val()
      .trim();
    var DepartmentId = $("#dept")
      .val()
      .trim();
    var StockQuantity = $("#stock-qty")
      .val()
      .trim();
    var ItemDescription = $("#item-description")
      .val()
      .trim();
    var ItemImage = $("#item-image")
      .val()
      .trim();
    if (
      ItemName &&
      ItemPrice &&
      StockQuantity &&
      DepartmentId &&
      ItemDescription
    ) {
      var newItem = {
        itemName: ItemName,
        itemPrice: ItemPrice,
        departmentId: DepartmentId,
        stockQuantity: StockQuantity,
        itemDesciption: ItemDescription,
        itemImage: ItemImage
      };
      $.ajax("/api/createItem/", {
        type: "POST",
        data: newItem
      }).then(function(result) {
        if (result) {
          console.log("Display the Dashboard");
          // Reload the page to get the updated list
          location.assign("/items");
        }
      });
    } else {
      alert("Not a valid entry");
    }
  });
});

//edit Item button click
// eslint-disable-next-line no-unused-vars
function editItem(recordId) {
  $.ajax("/api/items/" + recordId, {
    type: "GET"
  }).then(function(dbItem) {
    //console.log(dbItem.itemImage);
    $("#e_item-name").val(dbItem.itemName);
    $("#e_item-price").val(dbItem.itemPrice);
    $("#e_dept").empty();
    $.ajax("/api/depts/", {
      type: "GET"
    }).then(function(dbDept) {
      if (dbDept) {
        for (var i = 0; i < dbDept.length; i++) {
          var option = $("<option>")
            .attr("value", dbDept[i].departmentId)
            .text(dbDept[i].departmentName);
          if (dbDept[i].departmentId === dbItem.departmentId) {
            option.attr("selected");
          }
          $("#e_dept").append(option);
        }
      }
    });
    $("#e_stock-qty").val(dbItem.stockQuantity);
    $("#e_item_image").val(dbItem.itemImage);
    $("#e_item-description").val(dbItem.itemDesciption);

    //update item button
    $("#updateItemSubmit").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var ItemName = $("#e_item-name")
        .val()
        .trim();
      var ItemPrice = $("#e_item-price")
        .val()
        .trim();
      var DepartmentId = $("#e_dept")
        .val()
        .trim();
      var StockQuantity = $("#e_stock-qty")
        .val()
        .trim();
      var ItemDescription = $("#e_item-description")
        .val()
        .trim();
      var ItemImage = $("#e_item-image")
        .val()
        .trim();
      if (
        ItemName &&
        ItemPrice &&
        StockQuantity &&
        DepartmentId &&
        ItemDescription
      ) {
        var updatedItem = {
          itemName: ItemName,
          itemPrice: ItemPrice,
          departmentId: DepartmentId,
          stockQuantity: StockQuantity,
          itemDesciption: ItemDescription,
          itemImage: ItemImage
        };
        // Send the Put request.
        $.ajax("/api/items/" + recordId, {
          type: "PUT",
          data: updatedItem
        }).then(function() {
          console.log("updated!");
          // Reload the page to get the updated list
          location.assign("/items");
        });
      } else {
        alert("Not a valid entry");
      }
    });
  });
}
//delete Item button click
// eslint-disable-next-line no-unused-vars
function deleteItem(recordId) {
  // Send the DELETE request.
  $.ajax("/api/items/" + recordId, {
    type: "DELETE"
  }).then(function() {
    console.log("deleted id ", recordId);
    // Reload the page to get the updated list
    location.reload();
  });
}
//edit user button click
// eslint-disable-next-line no-unused-vars
function editUser(recordId) {
  alert(recordId);
}
//delete user button click
// eslint-disable-next-line no-unused-vars
function deleteUser(recordId) {
  alert(recordId);
}
//edit Department button click
// eslint-disable-next-line no-unused-vars
function editDepartment(recordId) {
  alert(recordId);
}
//delete department button click
// eslint-disable-next-line no-unused-vars
function deleteDepartment(recordId) {
  alert(recordId);
}
