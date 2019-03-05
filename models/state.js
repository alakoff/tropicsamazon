module.exports = function(sequelize, DataTypes) {
  var State = sequelize.define(
    "State",
    {
      stateId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      stateCode: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      stateName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );
  return State;
};
