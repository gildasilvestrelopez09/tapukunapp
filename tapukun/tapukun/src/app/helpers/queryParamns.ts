//import { CONNECT_AND, CONNECT_EQUAL } from "./constants";

import { CONNECT_AND, CONNECT_EQUAL } from "./constants";

/**
 * Transform an object to query params
 *
 * @param {object} obj - object to convert
 * @returns {string} query params
 */
// eslint-disable-next-line prefer-arrow/prefer-arrow-functions
export function objectToQueryString(obj) {
  return Object.keys(obj).map((key) => key + CONNECT_EQUAL + obj[key]).join(CONNECT_AND);
}
