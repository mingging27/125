const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config')[env];
const db = {};

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, 
  config
);

// 모델 import
const JobPost = require('./jobPost');
const InfoPost = require('./infoPost');

// db에 등록
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.JobPost = JobPost;
db.InfoPost = InfoPost;

// init() 먼저 실행
JobPost.init(sequelize);
InfoPost.init(sequelize);

// associate()는 모든 init 후 실행해야 함
JobPost.associate(db);
InfoPost.associate(db);


module.exports = db;