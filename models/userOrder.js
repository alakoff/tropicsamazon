module.exports = function(sequelize, DataTypes) {
  var UserOrder = sequelize.define(
    "UserOrder",
    {
      // Defining the user order model
      orderId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      orderSubTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      taxAmount: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      orderTotal: {
        type: DataTypes.FLOAT,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    { freezeTableName: true }
  );
  UserOrder.associate = function(models) {
    UserOrder.belongsTo(models.OrderStatus, {
      foreignKey: "orderStatusId",
      targetKey: "orderStatusId"
    });
    UserOrder.belongsTo(models.UserProfile, {
      foreignKey: "userId",
      targetKey: "userId"
    });
  };
  return UserOrder;
};
