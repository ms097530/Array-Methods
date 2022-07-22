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
        if (callback(arr[i], i, arr) === true)
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
            return myFlatHelper(myReduce(val, (acc, curr) => myConcat(acc, curr), []), depth - 1, arr);
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
    return myReduce(arr, (acc, curr, i, arr) => myConcat(acc, callback(curr, i, arr)), []);
}

const myForEach = (arr, callback) =>
{
    for (let i = 0; i < arr.length; ++i)
    {
        callback(arr[i], i, arr);
    }
}

const myIncludes = (arr, val, start = 0) =>
{
    const { length } = arr;

    if (start >= length) return false;

    let absStart = Math.abs(start);
    let adjustedStart = absStart >= length > 0 ? 0 : absStart;
    // const computedIndex = length + start;
    // const adjustedStart = computedIndex < 0 && Math.abs(computedIndex) >= length ? 0 : Math.abs(computedIndex);
    for (let i = adjustedStart; i < length; ++i)
    {
        if (arr[i] === val)
            return true;
    }
    return false;
}

const myIndexOf = (arr, val, start = 0) =>
{
    const { length } = arr;
    // MDN only specified start values greater than or equal to length return -1 but a negative offset of with absolute value greater than or equal to length would still leave you with a negative offset - seemed logical to also return -1
    // could potentially modulo with length and then put it into adjustedStart as normal
    if (Math.abs(start) >= length) return -1;

    let adjustedStart = start >= 0 ? 0 : length + start;
    for (let i = adjustedStart; i < length; ++i)
    {
        if (arr[i] === val)
            return i;
    }
    return -1;
}

const myJoin = (arr, separator = ',') =>
{
    const { length } = arr;
    let str = '';
    for (let i = 0; i < length; ++i)
    {
        if (!(arr[i] === undefined || arr[i] === null || arr[i] === []))
            str += arr[i].toString() + separator;
    }
    str = str.slice(0, str.length - separator.length);
    return str;
}

const myKeys = (arr) =>
{
    function* generator()
    {
        for (let i = 0; i < arr.length; ++i)
            yield i;
    }
    return generator();
}

const myLastIndexOf = (arr, val, fromIndex = arr.length - 1) =>
{
    // fromIndex provided is a negative of magnitude greater than or equal to arr.length
    if (fromIndex <= -(arr.length)) return -1;
    // fromIndex greater than or equal to length defaults to searching backward from the end of arr
    if (fromIndex >= arr.length) fromIndex = arr.length - 1;
    if (fromIndex < 0) fromIndex = arr.length + fromIndex;

    // search backward, starting from fromIndex
    for (let i = fromIndex; i >= 0; --i)
    {
        if (arr[i] === val)
            return i;
    }
    return -1;
}

// this needs to be a normal function to access arguments.length
function myReduce(arr, callback, initialValue = arr[0])
{
    const { length } = arr;
    if (length === 0 && arguments.length === 2) throw new TypeError('Invalid input');

    let accumulator = initialValue;
    if (arguments.length >= 3 && length > 0)
    {
        accumulator = callback(initialValue, arr[0], 0, arr);
    }

    for (let i = 1; i < length; ++i)
    {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

function myReduceRight(arr, callback, initialValue = arr[arr.length - 1])
{
    const { length } = arr;
    if (length === 0 && arguments.length === 2) throw new TypeError('Invalid input');

    let accumulator = initialValue;
    if (arguments.length >= 3 && length > 0)
    {
        accumulator = callback(initialValue, arr[length - 1], 0, arr);
    }

    for (let i = length - 2; i >= 0; --i)
    {
        accumulator = callback(accumulator, arr[i], i, arr);
    }

    return accumulator;
}

const myReverse = (arr) =>
{
    let beginIndex = 0;
    let endIndex = arr.length - 1;
    let loopEnd = Math.floor((arr.length - 1) / 2);

    for (let i = beginIndex, j = endIndex; i < j; ++i, --j)
    {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

const myShift = (arr) =>
{
    const { length } = arr;
    if (length === 0) return undefined;

    let retVal = arr[0];
    for (let i = 0; i < length - 1; ++i)
    {
        arr[i] = arr[i + 1];
    }
    arr.length -= 1;

    return retVal;
}

const mySlice = (arr, start = 0, end = arr.length) =>
{
    const { length } = arr;
    let newArr = [];


    let adjustedStart = start >= 0 ? start : length + start;
    let adjustedEnd = end >= 0 ? end : length + end;

    if (adjustedStart < 0) adjustedStart = 0;
    if (adjustedEnd > length) adjustedEnd = length;
    if (adjustedStart >= length) return [];

    for (let i = adjustedStart; i < adjustedEnd; ++i)
    {
        myPush(newArr, arr[i]);
    }
    return newArr;
}

const mySome = (arr, callback) =>
{
    const { length } = arr;

    for (let i = 0; i < length; ++i)
    {
        if (callback(arr[i], i, arr) === true)
            return true;
    }
    return false;
}

function mySplice(arr, start, deleteCount = arr.length - start, ...items)
{
    const { length } = arr;

    let adjustedStart = start > length ? length : start < 0 ? length + start : start;
    // adjusts deleteCount so the used value never exceeds the remaining values in the array from the adjusted start position
    let adjustedDeleteCount = Math.min(deleteCount, length - adjustedStart);
    let deleted = [];

    if (adjustedStart < 0) return [];

    // this loop will be skipped if no items OR no values to delete
    // FOR OVERWRITING VALUES
    let overwriteNum = 0;
    for (let i = adjustedStart; i < /*items.*/length && overwriteNum < items.length/*adjustedDeleteCount*/; ++i)
    {
        console.log('overwriting');
        myPush(deleted, arr[i]);
        arr[i] = items[overwriteNum++];
    }

    // NO MORE VALUES TO OVERWRITE - may still have values to delete or insert ** ONLY ONE OR THE OTHER
    // for inserting, this may require shifting the proceeding elements in the array
    let insertStart = adjustedStart + overwriteNum;
    let needToInsert = items.length - overwriteNum;
    let insertNum = overwriteNum;
    // shift values first
    for (let i = length - 1; i >= insertStart; --i)
    {
        console.log('insert shifting')
        arr[i + needToInsert] = arr[i];
    }
    // overwrite number of values equal to needToInsert
    for (let i = insertStart; i < insertStart + needToInsert; ++i)
    {
        console.log('insert overwriting');
        arr[i] = items[insertNum++];
    }

    // for deleting, just reduce arr length
    let deleteStart = adjustedStart + overwriteNum;
    let needToDelete = adjustedDeleteCount - overwriteNum;
    for (let i = deleteStart; i < deleteStart + needToDelete; ++i)
    {
        console.log('delete pushing')
        myPush(deleted, arr[i]);
    }
    for (let i = deleteStart + needToDelete; i < length && needToDelete; ++i)
    {
        console.log('delete overwriting');
        arr[i - needToDelete] = arr[i];
    }
    arr.length -= needToDelete;

    return deleted;
}

function myUnshift(arr, ...items)
{
    mySplice(arr, 0, 0, ...items);
    return arr.length;
}


let arr = [1, 2, 3];
console.log(mySplice(arr, 1, 33, 4, 5));
console.dir(arr);


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
    myFlatMap,
    myForEach,
    myIncludes,
    myIndexOf,
    myJoin,
    myKeys,
    myLastIndexOf,
    myReduce,
    myReduceRight,
    myReverse,
    myShift,
    mySlice,
    mySome,
    mySplice,
    myUnshift
}