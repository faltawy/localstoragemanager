const set =(key:string,value:string|'') =>{
    localStorage.setItem(key,value)
}

const get =(key:string)=>{
    return localStorage.getItem(key)
}

const clear =()=>{
    localStorage.clear()
}

const exists = (key:string)=>{
    return get(key)?true:false
}

/**
 * [GET the value of the key if exists if not the value will be set to that key]
 * @param  {[string]} key [description]
 * @param  {[string]} value [description]
 */

const getOrSet =(key:string,value:string)=>{
    !exists(key)?set(key,value):set(key,value)

}
