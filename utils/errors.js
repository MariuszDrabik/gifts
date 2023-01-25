

class ValidationError extends Error {}

class NotFoundError extends Error {}

function handleError(err, req, res, next) {
    if (err instanceof NotFoundError) {
        res.status(404);
        res.render('error', {
            error: '404 ' + err.message,
        });
        return
    }
    if (err instanceof ValidationError) {
        res.status(400);
        res.render('error', {
            error: err.message,
        });
        return
    } 
        console.log(err);
        res.status(500);
        res.render('error', {
            error: 'Coś poszło nie tak',
        });
        return

}


module.exports = {
    handleError,
    ValidationError,
    NotFoundError,
}