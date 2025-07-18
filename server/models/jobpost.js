'use strict';

module.exports = (sequelize, DataTypes) => {
  const JobPost = sequelize.define('JobPost', {
    job_post_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    job_field: {
      type: DataTypes.ENUM(
        '전체', '기획·경영', '마케팅·영업', '회계·인사·지원',
        'IT·데이터', '디자인·콘텐츠', '생산·물류',
        '교육·의료·연구', '공공·금융'
      ),
      allowNull: true,
    },
    location_city: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    employment_type: {
      type: DataTypes.ENUM('fulltime', 'parttime', 'contract'),
      defaultValue: 'fulltime',
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
      type: DataTypes.ENUM('open', 'closed'),
      defaultValue: 'open',
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
    career: {
      type: DataTypes.STRING(255),
    },
    education: {
      type: DataTypes.STRING(255),
    },
    skills: {
      type: DataTypes.STRING(255),
    },
    preference: {
      type: DataTypes.STRING(255),
    },
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
