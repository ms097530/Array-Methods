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
        myPush(newArr, val);
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

module.exports =
{
    myPush,
    myPop,
    myMap,
    myFilter,
    myFill,
    myConcat,
    myCopyWithin
}