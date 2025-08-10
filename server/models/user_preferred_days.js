module.exports = (sequelize, DataTypes) => {
  const UserPreferredDay = sequelize.define(
    "UserPreferredDay",
    {
      user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      day: {
        type: DataTypes.ENUM("월", "화", "수", "목", "금", "토", "일"),
        primaryKey: true,
      },
      resume_id: {            // 이 부분 꼭 추가!
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "user_preferred_days",
      timestamps: false,
    }
  );

  UserPreferredDay.associate = (models) => {
    UserPreferredDay.belongsTo(models.Resume, {
      foreignKey: "resume_id",
      targetKey: "resume_id",
      as: "resume",
    });
  };

  return UserPreferredDay;
};
