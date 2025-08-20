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

  // 관계 정의
  CommunityPost.associate = function(models) {
    // 사용자와의 관계
    CommunityPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });

    // 좋아요와의 관계
    CommunityPost.hasMany(models.Like, {
      foreignKey: 'community_post_id',
      as: 'likes'
    });

    // 댓글과의 관계 (post_type='community' 스코프 조건 포함)
    CommunityPost.hasMany(models.Comment, {
      foreignKey: 'post_id',
      scope: {
        post_type: 'community'
      },
      as: 'comments'
    });
  };

  CommunityPost.associate = function(models) {
    CommunityPost.hasMany(models.Scrap, {
      foreignKey: 'community_post_id',
      as: 'scraps'
    });
  };

  return CommunityPost;
};
