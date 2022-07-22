function mySplice(arr, start, deleteCount = arr.length - start, ...items)
{
    const { length } = arr;

    let adjustedStart = start > length ? length : start < 0 ? length + start : start;
    // adjusts deleteCount so the used value never exceeds the remaining values in the array from the adjusted start position
    let adjustedDeleteCount = Math.min(deleteCount, length - adjustedStart);
    let deleted = [];

    if (adjustedStart < 0) return [];
    let numOverwritten = 0;
    // overwriting
    for (let i = adjustedStart; i < length && numOverwritten < items.length; i++, numOverwritten++)
    {
        deleted.push(arr[i]);
        arr[i] = items[numOverwritten];
    }
    // inserting

    // deleting

    return deleted;
}

let arr = [1, 2, 3, 4, 5];
console.log(mySplice(arr, 4, 2, 69, 9029))