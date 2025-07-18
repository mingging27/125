const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');
const { sequelize } = require('./models');

dotenv.config();

const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const authRouter = require('./routes/auth');
const mypageRouter = require('./routes/mypage');
const communityRouter = require('./routes/community');
const jobPostRouter = require('./routes/jobPost.route');
const infoPostRouter = require('./routes/infoPost.route');

const app = express();

app.set('port', process.env.PORT || 3002); // node 서버 포트 설정
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
});

sequelize.sync({ force: false })
  .then(() => {
    console.log('데이터베이스 연결 성공');
  })
  .catch((err) => {
    console.error(err);
  });

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: process.env.COOKIE_SECRET,
  cookie: {
    httpOnly: true,
    secure: false,
  },
  name: 'session-cookie',
}));

// 라우팅 설정
app.use('/api', indexRouter);
app.use('/api/user', userRouter);
app.use('/api/jobPosts', jobPostRouter);
app.use('/api/infoPosts', infoPostRouter);
app.use('/auth', authRouter);
app.use('/mypage', mypageRouter);
app.use('/api/community', communityRouter);

// 에러 처리
app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

// 서버 실행
app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
