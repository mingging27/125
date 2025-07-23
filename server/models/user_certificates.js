module.exports = (sequelize, DataTypes) => {
  const UserCertificate = sequelize.define(
    "UserCertificate",
    {
      cert_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      certificate_name: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      acquisition_year: {
        type: DataTypes.INTEGER, // Sequelize에는 YEAR 타입 없음 → 정수로 처리
        allowNull: true,
      },
    },
    {
      tableName: "user_certificates",
      timestamps: false,
    }
  );

  return UserCertificate;
};
