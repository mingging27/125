'use strict';

module.exports = (sequelize, DataTypes) => {
  const Application = sequelize.define('Application', {
    application_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    resume_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    applied_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    status: {
      type: DataTypes.ENUM('read', 'unread'),
      defaultValue: 'unread',
    },
  }, {
    tableName: 'Application',
    timestamps: false,
  });

  Application.associate = models => {
    Application.belongsTo(models.JobPost, {
      foreignKey: 'job_post_id',
      targetKey: 'job_post_id',
    });
  };

  return Application;
};
