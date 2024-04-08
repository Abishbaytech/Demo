

const AlterTable = async (sequelize) => {
    try {
      await sequelize.sync({ alter: true });
      console.log("Table synchronized successfully.");
    } catch (error) {
      console.error("Error synchronizing table:", error);
    }
  };
  
  module.exports = { AlterTable };
  