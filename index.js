"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrSet = exports.exists = exports.clear = exports.get = exports.set = void 0;
const set = (key, value) => {
    localStorage.setItem(key, value);
};
exports.set = set;
const get = (key) => {
    return localStorage.getItem(key);
};
exports.get = get;
const clear = () => {
    localStorage.clear();
};
exports.clear = clear;
const exists = (key) => {
    return (0, exports.get)(key) ? true : false;
};
exports.exists = exists;
/**
 * [GET the value of the key if exists if not the value will be set to that key]
 * @param  {[string]} key [description]
 * @param  {[string]} value [description]
 */
const getOrSet = (key, value) => {
    !(0, exports.exists)(key) ? (0, exports.set)(key, value) : (0, exports.set)(key, value);
};
exports.getOrSet = getOrSet;
