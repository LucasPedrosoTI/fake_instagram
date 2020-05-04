module.exports = (sequelize, DataType) => {
  const Comentario = sequelize.define(
    "Comentario",
    {
      id: {
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      texto: {
        type: DataType.STRING,
        allowNull: false,
      },
      usuarios_id: {
        type: DataType.INTEGER,
        allowNull: false,
        // references: {
        //   model: "usuarios",
        //   key: "id",
        // },
      },
      posts_id: {
        type: DataType.INTEGER,
        allowNull: false,
        // references: {
        //   model: "posts",
        //   key: "id",
        // },
      },
    },
    {
      tableName: "comentarios",
      timestamps: false,
    }
  );

  Comentario.associate = (models) => {
    Comentario.belongsTo(models.Post, { foreignKey: "posts_id", as: "post" });
    Comentario.belongsTo(models.Usuario, {
      foreignKey: "usuarios_id",
      as: "usuario",
    });
  };
  return Comentario;
};
