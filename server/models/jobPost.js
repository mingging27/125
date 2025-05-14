const { Model, DataTypes } = require('sequelize');

class JobPost extends Model {
  static init(sequelize) {
    return super.init({
      job_post_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      company_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
      },
      location_city: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      employment_type: {
        type: DataTypes.ENUM('fullTime', 'partTime', 'contract'),
        defaultValue: 'fullTime',
      },
      work_hour: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      salary_info: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM('read', 'unread'),
        defaultValue: 'unread',
      },
      required_keword: {
        type: DataTypes.TEXT,
      },
      min_age: {
        type: DataTypes.INTEGER,
      },
      max_age: {
        type: DataTypes.INTEGER,
      },
      ai_match_result: {
        type: DataTypes.TEXT,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      deadline: {
        type: DataTypes.DATE,
      },
    }, {
      sequelize,
      modelName: 'JobPost',
      tableName: 'JobPost',
      timestamps: false,
    });
  }

  static associate(db) {
    if (db.Application) {  // 임시로 오류 방지 - 합친뒤 삭제
      db.JobPost.hasMany(db.Application, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });
    }
    
    if (db.Scrap) {
      db.JobPost.hasMany(db.Scrap, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });
    }

    if (db.Comment) {
      db.JobPost.hasMany(db.Comment, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });      
    }
  }
}

module.exports = JobPost;
