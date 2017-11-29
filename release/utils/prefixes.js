"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camel_case_1 = require("./camel-case");
var cache = {};
var testStyle = typeof document !== 'undefined' ? document.createElement('div').style : undefined;
<<<<<<< HEAD
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var prefix = (function () {
    var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    var pre = typeof styles !== 'undefined' ? (Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/))[1] : undefined;
=======
var ɵ0 = function () {
    var styles = typeof window !== 'undefined' ? window.getComputedStyle(document.documentElement, '') : undefined;
    var match = typeof styles !== 'undefined' ?
        Array.prototype.slice.call(styles).join('').match(/-(moz|webkit|ms)-/) : null;
    var pre = match !== null ? match[1] : undefined;
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
    var dom = typeof pre !== 'undefined' ? ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1] : undefined;
    return dom ? {
        dom: dom,
        lowercase: pre,
        css: "-" + pre + "-",
        js: pre[0].toUpperCase() + pre.substr(1)
    } : undefined;
<<<<<<< HEAD
})();
=======
};
exports.ɵ0 = ɵ0;
// Get Prefix
// http://davidwalsh.name/vendor-prefix
var prefix = ɵ0();
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
function getVendorPrefixedName(property) {
    var name = camel_case_1.camelCase(property);
    if (!cache[name]) {
        if (prefix !== undefined && testStyle[prefix.css + property] !== undefined) {
            cache[name] = prefix.css + property;
        }
        else if (testStyle[property] !== undefined) {
            cache[name] = property;
        }
    }
    return cache[name];
}
exports.getVendorPrefixedName = getVendorPrefixedName;
//# sourceMappingURL=prefixes.js.map