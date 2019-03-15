module.exports = function(sequelize, DataTypes) {
  var OrderDetails = sequelize.define(
    "OrderDetails",
    {
      orderDetailsId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
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
    OrderDetails.belongsTo(models.OrderStatus, {
      foreignKey: "orderStatusId",
      targetKey: "orderStatusId"
    });
    OrderDetails.belongsTo(models.Item, {
      foreignKey: "itemId",
      targetKey: "itemId"
    });
    OrderDetails.belongsTo(models.UserProfile, {
      foreignKey: "userId",
      targetKey: "userId"
    });
  };
  return OrderDetails;
};
