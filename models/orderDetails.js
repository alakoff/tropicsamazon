module.exports = function(sequelize, DataTypes) {
  var OrderDetails = sequelize.define(
    "OrderDetails",
    {
      itemQuantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      lineItemTotal: {
        type: DataTypes.DECIMAL(11, 2),
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    { freezeTableName: true }
  );
  OrderDetails.associate = function(models) {
    OrderDetails.belongsTo(models.UserOrder, {
      foreignKey: "orderDetailsId",
      targetKey: "orderId"
    });
    OrderDetails.belongsTo(models.Item, {
      foreignKey: "itemId",
      targetKey: "itemId"
    });
  };
  return OrderDetails;
};
