module.exports = (sequelize, DataTypes) => {
  const Like = sequelize.define('Like', {
    like_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    community_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    tableName: 'like',
    timestamps: false,
  });

  Like.associate = (models) => {
    Like.belongsTo(models.User, { foreignKey: 'user_id' });
    Like.belongsTo(models.CommunityPost, { foreignKey: 'community_post_id' });
  };

  return Like;
};
