import { getVendorPrefixedName } from './prefixes';
import { camelCase } from './camel-case';

// browser detection and prefixing tools
const transform = typeof window !== 'undefined' ? getVendorPrefixedName('transform') : undefined;
const backfaceVisibility = typeof window !== 'undefined' ? getVendorPrefixedName('backfaceVisibility') : undefined;
const hasCSSTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('transform') : undefined;
const hasCSS3DTransforms = typeof window !== 'undefined' ? !!getVendorPrefixedName('perspective') : undefined;
<<<<<<< HEAD
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : "Chrome";
=======
const ua = typeof window !== 'undefined' ? window.navigator.userAgent : 'Chrome';
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
const isSafari = (/Safari\//).test(ua) && !(/Chrome\//).test(ua);

export function translateXY(styles: any, x: number, y: number) {
  if (typeof transform !== 'undefined' && hasCSSTransforms) {
    if (!isSafari && hasCSS3DTransforms) {
      styles[transform] = `translate3d(${x}px, ${y}px, 0)`;
      styles[backfaceVisibility] = 'hidden';
    } else {
      styles[camelCase(transform)] = `translate(${x}px, ${y}px)`;
    }
  } else {
    styles.top = `${y}px`;
    styles.left = `${x}px`;
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
