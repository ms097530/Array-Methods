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

module.exports =
{
    myPush,
    myPop,
    myMap,
    myFilter,
    myFill,
    myConcat
}