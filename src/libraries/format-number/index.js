/* eslint-disable */

/*
 * Exposes number format capability
 *
 * @copyright Copyright (c) 2013 Kevin van Zonneveld (http://kvz.io) and Contributors (http://phpjs.org/authors).
 * @license See CREDITS.md
 * @see https://github.com/kvz/phpjs/blob/ffe1356af23a6f2512c84c954dd4e828e92579fa/functions/strings/number_format.js
 */
function toFixedFix(n, prec) {
  const k = Math.pow(10, prec);
  return `${(Math.round(n * k) / k).toFixed(prec)}`;
}

export default function number_format(number, decimals, decPoint, thousandsSep) {
  number = `${number}`.replace(/[^0-9+\-Ee.]/g, '');
  const n = !isFinite(+number) ? 0 : +number;
  const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
  const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
  const dec = typeof decPoint === 'undefined' ? '.' : decPoint;
  let s = '';
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }

  if (Number(s[1]) === 0) {
    return s[0];
  }

  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
