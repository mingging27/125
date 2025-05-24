// models/communityPost.js

'use strict';

module.exports = (sequelize, DataTypes) => {
  const CommunityPost = sequelize.define('CommunityPost', {
    community_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    like_count: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  }, {
    tableName: 'communitypost',
    timestamps: false,
  });

  // 필요하면 관계 정의
  CommunityPost.associate = function(models) {
    // 예: CommunityPost.belongsTo(models.User, { foreignKey: 'user_id' });
  };

  return CommunityPost;
};
