'use strict';

module.exports = (sequelize, DataTypes) => {
  const JobPost = sequelize.define('JobPost', {
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
    job_field: {
      type: DataTypes.STRING(50),
      allowNull: false,
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
    required_keword: DataTypes.TEXT,
    min_age: DataTypes.INTEGER,
    max_age: DataTypes.INTEGER,
    ai_match_result: DataTypes.TEXT,
    created_at: DataTypes.DATE,
    deadline: DataTypes.DATE,
  }, {
    tableName: 'JobPost',
    timestamps: false,
  });

  JobPost.associate = (db) => {
    if (db.Application) {
      JobPost.hasMany(db.Application, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });
    }

    if (db.Scrap) {
      JobPost.hasMany(db.Scrap, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });
    }

    if (db.Comment) {
      JobPost.hasMany(db.Comment, {
        foreignKey: 'job_post_id',
        sourceKey: 'job_post_id',
        onDelete: 'CASCADE',
      });
    }
  };

  return JobPost;
};
