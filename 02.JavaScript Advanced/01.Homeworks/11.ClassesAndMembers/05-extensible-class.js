let toExtend = (function () {
    let id = 0;
    class ExtensibleClass {
        constructor () {
            this.id = id++;
        }
        extend (prototypeOfTemplate) {
            for (let index in prototypeOfTemplate) {
                if (index !== 'id') {
                    if (typeof prototypeOfTemplate[index] === 'function') {
                        this.constructor.prototype[index] = prototypeOfTemplate[index];
                    } else {
                        this[index] = prototypeOfTemplate[index];
                    }
                }
            }
        }
    }
    return ExtensibleClass;
})();
