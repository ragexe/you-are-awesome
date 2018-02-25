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

const createIncrementer = () => {
    createIncrementer.incrementer = createIncrementer.incrementer || {
        value: 0,
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


// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {
};
const getDeepPropertiesCount = () => {
};
const createSerializedObject = () => {
};
const toBuffer = () => {
};
const sortByProto = () => {
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