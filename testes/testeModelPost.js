const { sequelize, Post } = require("../models");

Post.findAll({ include: ["comentarios", "usuario"] }).then((data) => {
  console.log(data.map((u) => u.toJSON()));
  sequelize.close();
});
