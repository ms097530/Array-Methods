const { mySplice: splice } = require('./splice');

test('changes contents of arr by removing or replacing existing elements and/or adding new elements in place - returns deleted items', () =>
{
    let empty = [];
    // attempt to delete one value in an empty array and insert 3 values
    expect(splice(empty, 1, 1, 1, 2, 3)).toStrictEqual([]);
    expect(empty).toStrictEqual([1, 2, 3]);
    // attempt to delete more values than exist, in middle of array, and insert two values
    let arr1 = [1, 2, 3, 4, 5];
    expect(splice(arr1, 5, 69, 6, 7)).toStrictEqual([]);
    expect(arr1).toStrictEqual([1, 2, 3, 4, 5, 6, 7]);
    // inserting mid array - no deletions/overwriting
    let arr2 = [1, 2, 3];
    expect(splice(arr2, 1, 0, 26, 19)).toStrictEqual([]);
    expect(arr2).toStrictEqual([1, 26, 19, 2, 3]);
    // overwrite one and insert another - more inserting than deleting
    let arr3 = [1, 2, 3];
    expect(splice(arr3, 1, 1, 26, 19)).toStrictEqual([2]);
    expect(arr3).toStrictEqual([1, 26, 19, 3]);
    // delete one - using negative index for start
    let arr4 = [1, 2, 3, 4, 5];
    expect(splice(arr4, -2, 1)).toStrictEqual([4]);
    expect(arr4).toStrictEqual([1, 2, 3, 5]);
    // insert values at end of array
    let arr5 = [1, 2, 3];
    expect(splice(arr5, arr5.length, 0, 4, 5)).toStrictEqual([]);
    expect(arr5).toStrictEqual([1, 2, 3, 4, 5]);
    let arr6 = [1, 2, 3];
    expect(splice(arr6, 1, 33, 4, 5)).toStrictEqual([2, 3]);
    expect(arr6).toStrictEqual([1, 4, 5]);
    let arr7 = [1, 2, 3, 4, 5];
    expect(splice(arr7, 0)).toStrictEqual([1, 2, 3, 4, 5]);
    expect(arr7).toStrictEqual([]);
    let arr8 = [1, 2, 3, 4, 5, 6];
    expect(splice(arr8, 0, 2)).toStrictEqual([1, 2]);
    expect(arr8).toStrictEqual([3, 4, 5, 6]);
    let arr9 = [1, 2, 3, 4, 5];
    expect(splice(arr9, -2)).toStrictEqual([4, 5]);
    expect(arr9).toStrictEqual([1, 2, 3]);
    let arr10 = [1, 2, 3];
    expect(splice(arr10, 0, -3)).toStrictEqual([]);
    expect(arr10).toStrictEqual([1, 2, 3]);
});