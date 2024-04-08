const { DataTypes } = require("sequelize");
const sequelize = require("../Config/Config");
const { AlterTable } = require("../Utils/Utils-Model");

const User = sequelize.define(
  "tbl_users",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  },
  { timestamps: false }
);


(async () => {
    await AlterTable(sequelize);
  })();

module.exports = User;
