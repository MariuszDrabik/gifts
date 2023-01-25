const handlebarsHelpers = {
    ifEquals: function(arg1, arg2,) {
    return (arg1 == arg2) ? true : false;
    },
    ifNotEquals: function(arg1, arg2,) {
        return (arg1 !== arg2) ? true : false;
        },
};


function escapeHtml(htmlStr) {
    return htmlStr.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&#39;");        
 
 }


export {
    handlebarsHelpers,
    escapeHtml
}