/**
 * polyfill Object.is
 * https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 * @param {*} x 
 * @param {*} y 
 * @returns 
 */
function is(x, y) {
  return (x === y && (x !==0 || 1 / x !== 1 / y)) || (x !== x && y !== y);
}

function objectIs() {
  return typeof Object.is === 'function' ? Object.is : is;
}