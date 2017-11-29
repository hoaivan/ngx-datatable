"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prefixes_1 = require("./prefixes");
var camel_case_1 = require("./camel-case");
// browser detection and prefixing tools
var transform = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('transform') : undefined;
var backfaceVisibility = typeof window !== 'undefined' ? prefixes_1.getVendorPrefixedName('backfaceVisibility') : undefined;
var hasCSSTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('transform') : undefined;
var hasCSS3DTransforms = typeof window !== 'undefined' ? !!prefixes_1.getVendorPrefixedName('perspective') : undefined;
<<<<<<< HEAD
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : "Chrome";
=======
var ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
var isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);
function translateXY(styles, x, y) {
    if (typeof transform !== 'undefined' && hasCSSTransforms) {
        if (!isSafari && hasCSS3DTransforms) {
            styles[transform] = "translate3d(" + x + "px, " + y + "px, 0)";
            styles[backfaceVisibility] = 'hidden';
        }
        else {
            styles[camel_case_1.camelCase(transform)] = "translate(" + x + "px, " + y + "px)";
        }
    }
    else {
        styles.top = y + "px";
        styles.left = x + "px";
    }
}
exports.translateXY = translateXY;
//# sourceMappingURL=translate.js.map