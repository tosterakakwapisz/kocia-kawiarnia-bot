import profanityList from './profanityList.js';

/**
 * Checks if name is ok
 * @param {String} name name to check
 * @returns {Boolean} true on ok, else or error -> false
 */
export function isNameOk(name) {
  try {
    for (word of profanityList.words) {
      if (name.includes(word)) return false;
    }
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
}