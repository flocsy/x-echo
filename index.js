module.exports = function(headers){
    return function(req, res, next){
        if ("undefined" == typeof headers) {headers = Object.keys(req.headers);}
        else if ("string" == typeof headers) {headers = [headers];}

        headers.forEach(function(header){
            header = header.toLowerCase();
            res.set('x-echo-' + header, req.headers[header]);
        });
        next();
    }
};
