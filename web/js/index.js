import {mixins} from './mixin/index'
require('../tags/app.html');
Object.keys(mixins).forEach(key => {
    console.log(mixins[key]);
    riot.mixin(key, mixins[key]);
});
riot.mount('*');