'use strict';

module.exports = (sequelize, DataTypes) => {
  const CommunityPost = sequelize.define('CommunityPost', {
    community_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
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
    },
  }, {
    tableName: 'CommunityPost', // 실제 DB 테이블 이름
    timestamps: false,          // createdAt/updatedAt 자동 컬럼 비활성
  });

  /** 📌 관계 정의 */
  CommunityPost.associate = models => {
    // 예: 작성자(User)와 1:N 관계
    CommunityPost.belongsTo(models.User, {
      foreignKey: 'user_id',
      targetKey: 'user_id',
    });

    // 예: 댓글(Comment)과 1:N 관계 (필요할 경우)
    // CommunityPost.hasMany(models.Comment, {
    //   foreignKey: 'post_id',
    //   sourceKey: 'community_post_id',
    // });
  };

  return CommunityPost;
};
