// https://www.devtools.tech/questions/s/implement-clearalltimeout-in-javascript-or-facebook-interview-question---qid---fVL1OfJ0cz8OguynnmMO


(function(w){
    let timeOutIds = [];

    let originalSetTimeout = w.setTimeout
    w.setTimeout = function(fn, delay){
        let id = originalSetTimeout(fn, delay);
       timeOutIds.push(id)
        return id;

    }

    w.clearAlltimeout = function(){
        while(timeOutIds.length){
            clearTimeout(timeOutIds.pop())
        }
    }
})(window)
