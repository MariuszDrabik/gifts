const handlebarsHelpers = {
    ifEquals: function(arg1, arg2,) {
    return (arg1 == arg2) ? true : false;
    },
    ifNotEquals: function(arg1, arg2,) {
        return (arg1 !== arg2) ? true : false;
        },
};


export {
    handlebarsHelpers
}