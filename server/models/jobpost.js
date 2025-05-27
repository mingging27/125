// models/jobpost.js (대충 포스트맨 전용)
'use strict';

module.exports = (sequelize, DataTypes) => {
  const JobPost = sequelize.define('JobPost', {
    job_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // 기타 필드들...
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
