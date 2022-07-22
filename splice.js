function mySplice(arr, start, deleteCount = arr.length - start, ...items)
{
    const { length } = arr;

    let adjustedStart = start > length ? length : start < 0 ? length + start : start;

    // adjusts deleteCount so the used value never exceeds the remaining values in the array from the adjusted start position
    // it is at most the remaining number of elements starting at adjustedStart
    let adjustedDeleteCount = Math.min(deleteCount, length - adjustedStart);
    // can only overwrite values currently in arr, so value can not exceed  number of values beyond start position
    // if items.length is greater than adjustedDeleteCount insertions will need to be done
    // if items.length is less than adjustedDeleteCount deletions will need to be done
    let numToOverwrite = Math.min(length - adjustedStart, items.length, adjustedDeleteCount);
    // insert if items leftover after overwriting
    let numToInsert = items.length - numToOverwrite;
    // delete if adjustedDeleteCount greater than number that were overwritten
    let numToDelete = adjustedDeleteCount - numToOverwrite;
    // console.log('to overwrite: ', numToOverwrite);
    // console.log('to insert: ', numToInsert);
    // console.log('to delete: ', numToDelete);
    let deleted = [];

    if (adjustedStart < 0 || deleteCount < 0) return [];

    // overwriting
    let numOverwritten = 0;
    for (let i = adjustedStart; numOverwritten < numToOverwrite; ++i, ++numOverwritten)
    {
        deleted.push(arr[i]);
        arr[i] = items[numOverwritten];
    }

    // inserting
    // let numInserted = numOverwritten;
    let numInserted = 0;
    let insertStart = adjustedStart + numOverwritten;
    for (let i = length - 1 + numToInsert; i >= adjustedStart + numOverwritten; --i)
    {
        // console.log('insert shifting')
        // console.log(arr[i], ' becomes ', arr[i - numToInsert]);
        arr[i] = arr[i - numToInsert];
    }
    for (let i = insertStart; numInserted < numToInsert; ++i, ++numInserted)
    {
        // console.log(numInserted);
        arr[i] = items[numInserted + numOverwritten];
    }

    // deleting
    // let numDeleted = numOverwritten;
    let numDeleted = 0;
    let deleteStart = adjustedStart + numOverwritten;
    for (let i = deleteStart; numDeleted < numToDelete; ++i, ++numDeleted)
    {
        deleted.push(arr[i]);
    }
    for (let i = deleteStart + numToDelete; i < length; ++i)
    {
        arr[i - numToDelete] = arr[i];
    }
    arr.length -= numToDelete;

    return deleted;
}

// inserting at end
// let arr1 = [1, 2, 3, 4, 5];
// console.log(mySplice(arr1, 4, 2, 69, 9029))
// overwriting one value
// let arr2 = [1, 2, 3, 4, 5];
// console.log(mySplice(arr2, 2, 1, 69));
// console.log(arr2);

// let empty = [];
// console.log(mySplice(empty, 1, 1, 1, 2, 3));
// console.log(empty);

// let arr3 = [1, 2, 3];
// console.log(mySplice(arr3, 1, 1, 26, 19));
// console.log(arr3);

module.exports = {
    mySplice
}