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

  return Scrap;
};
