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
        references: {
          model: "usuarios",
          key: "id",
        },
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

  return Post;
};
