const connect = require('connect');
const serveStatic = require('serve-static');
const path = require('path');

connect().use(serveStatic(path.resolve(__dirname, 'www'))).listen(1993, () => {
    console.log('Server running on 1993...');
});