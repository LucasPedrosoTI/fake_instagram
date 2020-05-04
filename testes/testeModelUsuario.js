const { sequelize, Usuario } = require("../models");

Usuario.findAll({ include: ["posts"] }).then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
