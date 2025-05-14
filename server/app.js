const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const nunjucks = require('nunjucks');
const {sequelize} = require('./models');

dotenv.config();
const indexRouter = require('./routes');
const userRouter = require('./routes/user');
const jobPostRouter = require('./routes/jobPost.route');
const infoPostRouter = require('./routes/infoPost.route');

const app = express();
app.use(express.json());

app.use('/api', indexRouter);  //FE에서 작성
app.set('port', process.env.PORT || 3002);  //node 서버가 사용할 포트 번호, 리액트의 포트번호(3000)와 충돌하지 않게 다른 번호로 할당
app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
  watch: true,
})
sequelize.sync({force: false})
  .then(() => {
    console.log("데이터베이스 연결 성공");
  })
  .catch((err) => {
    console.error(err);
  })

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

app.use('/', indexRouter);
app.use('/user', userRouter);
app.use('/jobPosts', jobPostRouter);
app.use('/infoPosts', infoPostRouter);

app.use((req, res, next) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});