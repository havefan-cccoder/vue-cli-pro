//封装操作localstorage本地存储的方法

var storage = {
    set(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key) {
        return JSON.parse(localStorage.getItem(key))
    },
    remove(key) {
        localStorage.removeItem(key)
    }
}

export default storage;