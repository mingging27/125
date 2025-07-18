'use strict';

module.exports = (sequelize, DataTypes) => {
  const InfoPost = sequelize.define('InfoPost', {
    info_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    source_url: DataTypes.TEXT,
    title: DataTypes.STRING(255),
    content: DataTypes.TEXT,
    category: {
      type: DataTypes.ENUM('info_support', 'info_edu', 'info_trend', 'info_recommend'),
      defaultValue: 'info_support',
    },
    published_at: DataTypes.DATE,
    summary: DataTypes.TEXT,
    thumbnail: DataTypes.TEXT,
  }, {
    tableName: 'InfoPost',
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
