var koa = require('koa');
var app = module.exports = koa();
var views = require('koa-views');
var staticServer = require('koa-static');
var mount = require('koa-mount');
var path = require('path');

app.use(views(path.join(__dirname, '../views'), { map: { html: 'swig' }}));

app.on('error', function(err){
    logger.error(err);
});


app.use(mount('/node_modules', staticServer(path.join(__dirname, '../../node_modules'))));
app.use(mount('/web', staticServer(path.join(__dirname, '../../web'))));

app.use(function*(){
    yield this.render('todo');
})

app.listen(3000, '127.0.0.1');
