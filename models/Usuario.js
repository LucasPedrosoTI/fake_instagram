let Usuario = (sequelize, DataTypes) => {
  return sequelize.define(
    "Usuario",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      senha: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuarios",
      timestamps: false,
    }
  );
};

Usuario.associate = (models) => {
  Usuario.hasMany(models.Comentario, {
    foreignKey: "usuarios_id",
    as: "comentarios",
  });
  Usuario.hasMany(models.Post, {
    foreignKey: "usuarios_id",
    as: "posts",
  });
};

module.exports = Usuario;
