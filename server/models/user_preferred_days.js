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
    },
    {
      tableName: "user_preferred_days",
      timestamps: false,
    }
  );

  return UserPreferredDay;
};
