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
    let numToOverwrite = Math.min(length - adjustedStart - 1, items.length, adjustedDeleteCount);
    // insert if items leftover after overwriting
    let numToInsert = items.length - numToOverwrite;
    // delete if adjustedDeleteCount greater than number that were overwritten
    let numToDelete = adjustedDeleteCount - numToOverwrite;
    let deleted = [];

    if (adjustedStart < 0) return [];
    let numOverwritten = 0;
    // overwriting
    for (let i = adjustedStart; numOverwritten < numToOverwrite; i++, numOverwritten++)
    {
        deleted.push(arr[i]);
        arr[i] = items[numOverwritten];
    }
    // inserting
    let numInserted = 0;
    for (let i = adjustedStart + numOverwritten; numInserted < numToInsert; ++i)
    {

    }
    // deleting
    let numDeleted = 0;
    for (let i = adjustedStart + numOverwritten; numDeleted < numToDelete; ++i)
    {

    }

    return deleted;
}

// inserting at end
// let arr1 = [1, 2, 3, 4, 5];
// console.log(mySplice(arr1, 4, 2, 69, 9029))
let arr2 = [1, 2, 3, 4, 5];
console.log(mySplice(arr2, 2, 1, 69));
console.log(arr2);