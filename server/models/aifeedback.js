module.exports = (sequelize, DataTypes) => {
  const AIFeedback = sequelize.define(
    "AIFeedback",
    {
      feedback_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      resume_id: {
        type: DataTypes.BIGINT,
        allowNull: true,
      },
      job_role: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      industry: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      career_gap: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      career_history: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      expected_questions: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      model_answers: {
        type: DataTypes.TEXT,
        allowNull: true,
      },

      strengths: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      weaknesses: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
      recommended_keywords: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      recommended_activities: {
        type: DataTypes.STRING(300),
        allowNull: true,
      },
    },
    {
      tableName: "aifeedback",
      timestamps: false,
    }
  );

  return AIFeedback;
};
