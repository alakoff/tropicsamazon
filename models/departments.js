module.exports = function(sequelize, DataTypes) {
  var Departments = sequelize.define(
    "departments",
    {
      departmentId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      departmentName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      overHeadCosts: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    },
    {
      freezeTableName: true
    }
  );
  return Departments;
};
