import { Router } from 'express';

const homeRouter = Router();

homeRouter
    .get('/', (req, res) => {
        res.redirect('/child');
    });

export {
    homeRouter
}