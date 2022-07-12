export const set = (key: string, value: string | '') => {
    localStorage.setItem(key, value)
}

export const get = (key: string) => {
    return localStorage.getItem(key)
}

export const clear = () => {
    localStorage.clear()
}

export const exists = (key: string) => {
    return get(key) ? true : false
}

/**
 * [GET the value of the key if exists if not the value will be set to that key]
 * @param  {[string]} key [description]
 * @param  {[string]} value [description]
 */

export const getOrSet = (key: string, value: string) => {
    !exists(key) ? set(key, value) : set(key, value)

}
