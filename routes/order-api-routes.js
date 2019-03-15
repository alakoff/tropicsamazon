var db = require("../models");

module.exports = function(app) {
  app.post("/api/userorder/", function(req, res) {
    db.UserOrder.create(req.body).then(function(dbOrder) {
      res.json(dbOrder);
    });
  });

  app.post("/api/orderdetails/", function(req, res) {
    db.OrderDetails.create(req.body).then(function(dbOrderDetails) {
      res.json(dbOrderDetails);
    });
  });
  // PUT route for updating orderdetails
  app.put("/api/orderdetails/:id/:userid", function(req, res) {
    db.OrderDetails.update(req.body, {
      where: {
        itemId: req.params.id,
        userId: req.params.userid,
        orderStatusId: 1
      }
    }).then(function(dbOrderDetails) {
      res.json(dbOrderDetails);
    });
  });
  // GET route for getting all items in cart by user
  app.get("/api/incart/", function(req, res) {
    var query = {};
    if (req.query.itemId) {
      query.itemId = req.query.itemId;
    }
    //join Item table and orderDetails table to get all line item in cart by user
    db.OrderDetails.findAll({
      group: "itemId",
      attributes: [
        "itemId",
        [db.sequelize.fn("SUM", db.sequelize.col("ItemQuantity")), "quantity"],
        [db.sequelize.fn("SUM", db.sequelize.col("lineItemTotal")), "totalAmt"]
      ],
      include: [
        {
          model: db.Item,
          as: "Item",
          attributes: ["itemName", "itemImage", "itemDesciption", "itemPrice"]
        }
      ],
      where: {
        orderStatusId: 1,
        userId: 2
      }
    }).then(function(dbItems) {
      res.json(dbItems);
    });
  });

  // GET route for getting all items in cart by user
  app.get("/api/confirmorder", function(req, res) {
   
  });
};
