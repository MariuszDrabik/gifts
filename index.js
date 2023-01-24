import * as dotenv from 'dotenv' 
dotenv.config()
import express from 'express';
import methodOverride from 'method-override';
import { engine } from 'express-handlebars';
import { handleError } from './utils/errors.js';
import { homeRouter } from './routers/home.js';
import { childRouter } from './routers/child.js';
import { giftRouter } from './routers/gift.js';
import { handlebarsHelpers } from './utils/helpers.js';



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