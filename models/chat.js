const Sequelize = require("sequelize");
const sequelize = require("../connection/database");

const Chat = sequelize.define("Chats", {
  id: {
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
    type: Sequelize.INTEGER,
  },
  chat: {
    allowNull: false,
    type: Sequelize.STRING,
  },
});

module.exports = Chat;
