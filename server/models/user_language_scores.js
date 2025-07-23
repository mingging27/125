module.exports = (sequelize, DataTypes) => {
  const UserLanguageScore = sequelize.define(
    "UserLanguageScore",
    {
      lang_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      test_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      score: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },
      acquisition_year: {
        type: DataTypes.INTEGER, // Sequelize는 YEAR 타입 없음 → INTEGER 사용
        allowNull: true,
      },
    },
    {
      tableName: "user_language_scores",
      timestamps: false,
    }
  );

  return UserLanguageScore;
};
