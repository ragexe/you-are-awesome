const createEnumerableProperty = (property) => {
    Object.prototype.__defineSetter__(property, function (value) {
            Object.defineProperty(this, property, {
                value: value,
                enumerable: true
            })
        }
    );
    return property;
};

const createNotEnumerableProperty = (property) => {
    Object.prototype.__defineSetter__(property, function (value) {
            Object.defineProperty(this, property, {
                value: value,
            })
        }
    );
    return property
};

const createProtoMagicObject = () => {
    let result = new Function();
    result.prototype = Function.prototype;
    return result
};

const incrementor = () => {
    incrementor.value = incrementor.value || 0;

    function inner() {
        incrementor.value++;
        return inner
    }

    inner.valueOf = function () {
        return incrementor.value;
    };

    return inner();
};

const asyncIncrementor = () => {
    asyncIncrementor.value = asyncIncrementor.value || 0;

    return new Promise(resolve => {
        setTimeout(() => {
            asyncIncrementor.value++;
            return resolve(asyncIncrementor.value)
        }, Math.random() * 15);

    })
};

const createIncrementer = (start) => {
    createIncrementer.incrementer = createIncrementer.incrementer || {
        value: (start) ? start : 0,
        next: () => {
            return {
                done: false,
                value: ++createIncrementer.incrementer.value
            }
        }
    };

    createIncrementer.incrementer[Symbol.iterator] = () => {
        return createIncrementer.incrementer
    };

    return createIncrementer.incrementer
};

const returnBackInSecond = (param) => {
    return new Promise(resolve => {
        setTimeout(() => {
            return resolve(param)
        }, 1000);

    })
};

const getDeepPropertiesCount = (object) => {
    delete Object.prototype.property;
    let counter = 0;

    inner(object);

    function inner(object){
        for (let prop in object) {
            counter++;
            inner(object[prop])
        }
    }

    return counter
};

const createSerializedObject = () => {
    return new String();
};

const toBuffer = () => {
    // TODO notify @yankouskia
};

const sortByProto = (arr) => {
    return arr.sort((left, right) => left.__proto__ - right.__proto__)
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;