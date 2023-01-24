// https://www.devtools.tech/questions/s/implement-lodashpick-from-scratch-or-problem-solving-or-frontend-interview-question---qid---5Q0SKd6PFVE7Kfkw0F1A

function pick(object, keys) {
    if (toString.call(object) !== '[object Object]') return {};
    try {
        if (![...keys] instanceof Array) return {};
    } catch (e) {
        return {};
    }
    let obj = {};
    for (let key of keys) {
        if (key in object) {
            obj[key] = object[key];
        } else return {}

    }
    return obj;
}