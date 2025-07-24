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
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      resume_id: {            // 이 부분 꼭 추가!
        type: DataTypes.BIGINT,
        allowNull: false,
      },
    },
    {
      tableName: "user_certificates",
      timestamps: false,
    }
  );

  UserCertificate.associate = (models) => {
    UserCertificate.belongsTo(models.Resume, {
      foreignKey: "resume_id",
      targetKey: "resume_id",
      as: "resume",
    });
  };

  return UserCertificate;
};
