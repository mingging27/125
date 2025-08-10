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
      resume_id: {            // 이 부분 꼭 추가!
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "user_language_scores",
      timestamps: false,
    }
  );

  UserLanguageScore.associate = (models) => {
    UserLanguageScore.belongsTo(models.Resume, {
      foreignKey: "resume_id",
      targetKey: "resume_id",
      as: "resume",
    });
  };

  return UserLanguageScore;
};
