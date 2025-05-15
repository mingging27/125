'use strict';

module.exports = (sequelize, DataTypes) => {
  const JobPost = sequelize.define('JobPost', {
    job_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    company_id: DataTypes.INTEGER,
    title: DataTypes.STRING(255),
    content: DataTypes.TEXT,
    location_city: DataTypes.STRING(100),
    employment_type: DataTypes.ENUM('fullTime', 'partTime', 'contract'),
    work_hour: DataTypes.STRING(50),
    salary_info: DataTypes.STRING(100),
    status: DataTypes.ENUM('open', 'closed'),
    published_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    }
  }, {
    tableName: 'JobPost',
    timestamps: false,
  });

  JobPost.associate = models => {
    JobPost.hasMany(models.Application, {
      foreignKey: 'job_post_id',
      sourceKey: 'job_post_id',
    });
  };

  return JobPost;
};
