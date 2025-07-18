'use strict';

module.exports = (sequelize, DataTypes) => {
  const InfoPost = sequelize.define('InfoPost', {
    info_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    source_url: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    category: {
      type: DataTypes.ENUM('info_support', 'info_edu', 'info_trend', 'info_recommend'),
      allowNull: true,
      defaultValue: 'info_support',
    },
    published_at: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  }, {
    tableName: 'infopost', // 소문자 테이블 이름에 맞춤
    timestamps: false,
  });

  InfoPost.associate = (db) => {
    if (db.Like) {
      InfoPost.hasMany(db.Like, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });
    }

    if (db.Scrap) {
      InfoPost.hasMany(db.Scrap, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });
    }

    if (db.Comment) {
      InfoPost.hasMany(db.Comment, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });
    }
  };

  return InfoPost;
};
