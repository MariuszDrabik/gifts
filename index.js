require('dotenv').config();
const express = require('express')
const methodOverride = require('method-override')
const { engine } = require('express-handlebars');
const { handleError } = require('./utils/errors.js');
const { homeRouter } = require('./routers/home.js');
const { childRouter } = require('./routers/child.js');
const { giftRouter } = require('./routers/gift.js');
const { handlebarsHelpers } = require('./utils/helpers.js');



const app = express();


app.use(methodOverride('_method'));

app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json());

app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers,
}));

app.set('view engine', '.hbs');
app.set('views', './views');

app.use('/', homeRouter);

app.use('/child', childRouter);
app.use('/gifts', giftRouter);

app.listen(process.env.PORT, process.env.HOST, () => {
    console.log(`Listening on http://localhost:${process.env.PORT}`);
})

app.use(handleError);