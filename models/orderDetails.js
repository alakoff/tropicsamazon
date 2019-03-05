module.exports = function(sequelize, DataTypes) {
    var orderDetails = sequelize.define(
      "orderDetails",
      {
        // Defining the user order model
        orderDetailsId: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          validate: {
            len: [1]
          }
        },
        itemId: {
          type: DataTypes.INTEGER,
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
    return orderDetails;
  };
  