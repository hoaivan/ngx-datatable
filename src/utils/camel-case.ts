/**
 * Converts strings from something to camel case
 * http://stackoverflow.com/questions/10425287/convert-dash-separated-string-to-camelcase
<<<<<<< HEAD
 * @param  {string} str
 * @return {string} camel case string
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function camelCase(str: string): string {
  // Replace special characters with a space
  str = str.replace(/[^a-zA-Z0-9 ]/g, ' ');
  // put a space before an uppercase letter
  str = str.replace(/([a-z](?=[A-Z]))/g, '$1 ');

  // Lower case first character and some other stuff
  str = str.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();

  // uppercase characters preceded by a space or number
  str = str.replace(/([ 0-9]+)([a-zA-Z])/g, function(a, b, c) {
    return b.trim() + c.toUpperCase();
  });

  return str;
}

/**
 * Converts strings from camel case to words
 * http://stackoverflow.com/questions/7225407/convert-camelcasetext-to-camel-case-text
<<<<<<< HEAD
 *
 * @export
 * @param {any} str
 * @returns string
=======
>>>>>>> 9e918305d8b1c12e10b273ef8864a0d9caff3cb2
 */
export function deCamelCase(str: string): string {
  return str
    .replace(/([A-Z])/g, (match) => ` ${match}`)
    .replace(/^./, (match) => match.toUpperCase());
}
