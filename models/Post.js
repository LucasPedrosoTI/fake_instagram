module.exports = (sequelize, DataType) => {
  const Post = sequelize.define(
    "Post",
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
      img: {
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
      n_likes: {
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      tableName: "posts",
      timestamps: false,
    }
  );

  Post.associate = (models) => {
    Post.hasMany(models.Comentario, {
      foreignKey: "posts_id",
      as: "comentarios",
    });
    Post.belongsTo(models.Usuario, {
      foreignKey: "usuarios_id",
      as: "usuario",
    });
  };

  return Post;
};
