require('dotenv').config();
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const verifyToken = require('./middlewares/verifyToken');
const can = require('./middlewares/permission');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const coursesRouter = require('./routes/courses');
const mediaRouter = require('./routes/media');
const ordersRouter = require('./routes/orders');
const paymentsRouter = require('./routes/payments');
const refreshTokenRouter = require('./routes/refreshToken');
const mentorRouter = require('./routes/mentors');
const chapterRouter = require('./routes/chapters');
const lessonRouter = require('./routes/lessons');
const imageCourseRouter = require('./routes/image-courses');
const myCourseRouter = require('./routes/my-courses');
const reviewRouter = require('./routes/reviews');
const webhookRouter = require('./routes/webhook');
const orderRouter = require('./routes/orders');

const app = express();

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: "50mb" }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/courses', coursesRouter);
app.use('/media', verifyToken, can('admin', 'student'), mediaRouter);
app.use('/payments', paymentsRouter);
app.use('/refresh-tokens', refreshTokenRouter);
app.use('/mentors', verifyToken, can('admin'), mentorRouter);
app.use('/chapters', verifyToken, can('admin'), chapterRouter);
app.use('/lessons', verifyToken, can('admin'), lessonRouter);
app.use('/image-courses', verifyToken, can('admin'), imageCourseRouter);
app.use('/my-courses', verifyToken, can('admin', 'student'), myCourseRouter);
app.use('/reviews', verifyToken, can('admin', 'student'), reviewRouter);
app.use('/webhook', webhookRouter);
app.use('/orders', verifyToken, orderRouter);


module.exports = app;
