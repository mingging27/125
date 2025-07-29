module.exports = (sequelize, DataTypes) => {
  const Scrap = sequelize.define("Scrap", {
    scrap_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    scrapped_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW
    },
    post_type: {
      type: DataTypes.ENUM("job", "info", "community"),
      defaultValue: "job"
    },
    info_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    job_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    community_post_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: "scrap",
    timestamps: false
  });

  Scrap.associate = function(models) {
  // 사용자와의 관계
    Scrap.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'user'
    });

    // 커뮤니티 게시글과의 관계
    Scrap.belongsTo(models.CommunityPost, {
      foreignKey: 'community_post_id',
      as: 'communityPost'
    });

    // 필요하면 info_post, job_post도 여기에 연결 가능
  };

  return Scrap;
};


