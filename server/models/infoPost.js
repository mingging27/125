const { Model, DataTypes } = require('sequelize');

class InfoPost extends Model {
  static init(sequelize) {
    return super.init({
      info_post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      source_url: {
        type: DataTypes.TEXT,
      },
      title: {
        type: DataTypes.STRING(255),
      },
      content: {
        type: DataTypes.TEXT,
      },
      category: {
        type: DataTypes.ENUM('info_support', 'info_edu', 'info_trend', 'info_recommend'),
        defaultValue: 'info_support',
      },
      published_at: {
        type: DataTypes.DATE,
      },
    }, {
      sequelize,
      modelName: 'InfoPost',
      tableName: 'InfoPost',
      timestamps: false,
    });
  }

  static associate(db) {
    if (db.like) {
      db.InfoPost.hasMany(db.Like, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });      
    }

    if (db.Scrap) {
      db.InfoPost.hasMany(db.Scrap, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });      
    }

    if (db.Comment) {
      db.InfoPost.hasMany(db.Comment, {
        foreignKey: 'info_post_id',
        sourceKey: 'info_post_id',
        onDelete: 'CASCADE',
      });      
    }
  }
}

module.exports = InfoPost;
