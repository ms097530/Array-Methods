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

module.exports =
{
    myPush,
    myPop,
    myMap,
    myFilter
}