/**
 * @param {function} - any handler function
 * @returns {function} a function that accepts a Synthetic Event
 */
export default function withVal(fn) {
  return e => fn(e.target.value);
}
