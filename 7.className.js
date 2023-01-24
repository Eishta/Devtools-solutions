// https://devtools.tech/questions/s/implement-classnames-or-javascript-interview-question---qid---3QbZnesP6zJgC2jdLDjf?ref=recommended-content
// https://github.com/JedWatson/classnames/blob/main/index.js

function classnames() {
    let classes = [];
    let hasOwn = {}.hasOwnProperty;

    for (let i = 0; i < arguments.length; i++) {
        let arg = arguments[i];
        // continue for all the falsy values like : false, '' etc
        if (!arg) continue;

        // check the types - number, string, array, object
        let argtype = typeof arg;

        if (argtype == 'string' || argtype === 'number') {
            classes.push(arg)
        }
        else if (Array.isArray(arg)) {
            if (arg.length) {
                // call the classnames with arg as the arguments array => argumnets = arg
                let inner = classnames.apply(null, arg);

                if (inner) {
                    classes.push(inner)
                }
            }
        }

        else if (argtype === 'object') {
            // check if the key is object's own property and if the arg[type] value is truthy
            for (let key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key)
                }
            }
        }
    }
    return classes.join(' ')
}