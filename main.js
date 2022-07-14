const myPush = (arr, val) =>
{
    let { length } = arr;
    arr[length] = val;
}

const myPop = (arr) =>
{
    let { length } = arr;
    let result = arr[length - 1];
    arr.length -= 1;
    return result;
}

const myMap = (arr, callback) =>
{
    let { length } = arr;
    let newArr = []
    for (let i = 0; i < length; ++i)
    {
        newArr[i] = callback(arr[i], i, arr)
    }
    return newArr;
}

const myFilter = (arr, callback) =>
{
    let { length } = arr;
    let newArr = []
    for (let i = 0; i < length; ++i)
    {
        if (callback(arr[i], i, arr))
            myPush(newArr, arr[i]);
    }
    return newArr;
}

const myFill = (arr, val, start = 0, end = arr.length) =>
{
    for (let i = start; i < end; ++i)
        arr[i] = val;
}

const myConcat = (arr, ...vals) =>
{
    let newArr = []
    // deep copy arr to newArr
    for (let i = 0; i < arr.length; ++i)
        myPush(newArr, arr[i]);
    for (let val of vals)
    {
        if (Array.isArray(val))
        {
            for (let j = 0; j < val.length; ++j)
                myPush(newArr, val[j]);
        }
        else
        {
            myPush(newArr, val);
        }

    }

    return newArr;
}

const myCopyWithin = (arr, target, start = 0, end = arr.length) =>
{
    let { length } = arr;
    let newArr = [];

    if (target >= Math.abs(length) || start >= Math.abs(length)) 
    {
        for (let i = 0; i < length; ++i)
        {
            newArr[i] = arr[i];
            return newArr;
        }
    }

    let adjustedTarget = target >= 0 ? target : arr.length + target;
    let adjustedStart = start >= 0 ? start : arr.length + start;
    let adjustedEnd = end >= 0 ? end : arr.length + end;

    for (let i = 0; i < adjustedTarget; ++i)
    {
        newArr[i] = arr[i];
    }
    for (; adjustedTarget < length && adjustedStart < adjustedEnd; ++adjustedTarget, ++adjustedStart)
    {
        newArr[adjustedTarget] = arr[adjustedStart];
    }
    for (let i = adjustedTarget; i < length; ++i)
    {
        newArr[i] = arr[i];
    }

    return newArr;
}

const myEntries = (arr) =>
{
    // was not aware of generator functions until trying to implement this method - inspiration taken from https://blog.logrocket.com/javascript-array-methods/
    const { length } = arr;
    function* generator()
    {
        for (let i = 0; i < length; ++i)
        {
            yield [i, arr[i]];
        }
    }

    return generator();
}

const myEvery = (arr, callback) =>
{
    const { length } = arr;
    for (let i = 0; i < length; ++i)
    {
        if (!callback(arr[i], i, arr))
            return false;
    }
    return true;
}

const myFind = (arr, callback) =>
{
    const { length } = arr;
    for (let i = 0; i < length; ++i)
    {
        if (callback(arr[i], i, arr))
            return arr[i];
    }
    return undefined;
}

const myFindIndex = (arr, callback) =>
{
    const { length } = arr;
    for (let i = 0; i < length; ++i)
    {
        if (callback(arr[i], i, arr))
            return i;
    }
    return -1;
};

const myFindLast = (arr, callback) =>
{
    const { length } = arr;
    for (let i = length - 1; i >= 0; --i)
    {
        if (callback(arr[i], i, arr))
            return arr[i];
    }
    return undefined;
}

const myFindLastIndex = (arr, callback) =>
{
    const { length } = arr;
    for (let i = length - 1; i >= 0; --i)
    {
        if (callback(arr[i], i, arr))
            return i;
    }
    return -1;
}

const myFlat = (arr, depth = 1) =>
{
    function myFlatHelper(val, depth, arr)
    {
        if (depth === 1 || !Array.isArray(val))
            return myConcat(arr, val);
        else
        {
            return myFlatHelper(val.reduce((acc, curr) => myConcat(acc, curr), []), depth - 1, arr);
        }
    }
    let flatArr = [];
    for (let i = 0; i < arr.length; ++i)
    {
        flatArr = myFlatHelper(arr[i], depth, flatArr);
    }
    return flatArr;
}

const myFlatMap = (arr, callback) =>
{
    return arr.reduce((acc, curr, i, arr) => myConcat(acc, callback(curr, i, arr)), []);
}

module.exports =
{
    myPush,
    myPop,
    myMap,
    myFilter,
    myFill,
    myConcat,
    myCopyWithin,
    myEntries,
    myEvery,
    myFind,
    myFindIndex,
    myFindLast,
    myFindLastIndex,
    myFlat,
    myFlatMap
}