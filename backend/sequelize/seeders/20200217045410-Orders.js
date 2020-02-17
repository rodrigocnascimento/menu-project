module.exports = {
  up: async (queryInterface, Sequelize) => {

    try {
      return queryInterface.bulkInsert('Orders', require("./resources/orders.json"));
    } catch (e) {
      return Promise.reject(e)
    }
  },

  down: (queryInterface, Sequelize) => {
    return Promise.reject(e)
  }
}
