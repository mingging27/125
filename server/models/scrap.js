module.exports = (sequelize, DataTypes) => {
  const Scrap = sequelize.define(
    "Scrap",
    {
      scrap_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      scrapped_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      post_type: {
        type: DataTypes.ENUM("job", "info", "community"),
        defaultValue: "job",
      },
      info_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      job_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      community_post_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: "scrap",
      timestamps: false,

      indexes: [
        {
          unique: true,
          fields: ["user_id", "community_post_id", "post_type"],
        },
      ],
    }
  );

  Scrap.associate = function (models) {
    // 사용자와의 관계
    Scrap.belongsTo(models.User, {
      foreignKey: "user_id",
      as: "user",
    });

    // 커뮤니티 게시글과의 관계
    Scrap.belongsTo(models.CommunityPost, {
      foreignKey: "community_post_id",
      as: "communityPost",
    });

    // 정보글(infoPost)과의 관계
    Scrap.belongsTo(models.InfoPost, {
      foreignKey: "info_post_id",
      as: "infoPost",
    });
  };

  return Scrap;
};
