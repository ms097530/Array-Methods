const { myPush: push, myPop: pop, myMap: map, myFilter: filter, myFill: fill, myConcat: concat, myCopyWithin: copyWithin, myEntries: entries, myEvery: every } = require('./main');
// import { myPush as push, myPop as pop, myMap as map, myFilter as filter } from './main'

test('inserts value to end of array', () =>
{
    let arr = [1, 2, 3];
    push(arr, 4);
    expect(arr).toStrictEqual([1, 2, 3, 4]);
});

test('removes value from end of array and returns it', () =>
{
    let arr = [1, 2, 3];
    let result = pop(arr);
    expect(result).toBe(3);
    expect(arr).toStrictEqual([1, 2]);
});

test('creates a new array, applying the callback to each value from the array that was passed in', () =>
{
    let arr = [1, 2, 3];
    let result = map(arr, (val) => val + 1);
    expect(result).toStrictEqual([2, 3, 4]);
    expect(arr).toStrictEqual([1, 2, 3]);
});

test('returns a shallow copy of a portion of an array that matches the conditions of the callback', () =>
{
    let arr = [1, 2, 3, 4, 5, 6];
    let result = filter(arr, (val) => val > 3);
    expect(result).toStrictEqual([4, 5, 6]);
    expect(arr).toStrictEqual([1, 2, 3, 4, 5, 6]);
});

test('fills passed array with given value from start to end', () =>
{
    let arr = [1, 2, 3, 4, 5];
    fill(arr, 7);
    expect(arr).toStrictEqual([7, 7, 7, 7, 7]);
    fill(arr, 69, 1, 3);
    expect(arr).toStrictEqual([7, 69, 69, 7, 7]);
});

test('creates a copy of passed array and pushes passed values into it', () =>
{
    let arr = [1, 2, 3]
    let result = concat(arr, 4, 5, 6);
    expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toStrictEqual([1, 2, 3]);
});

test('create a shallow copy of arr with values from start to end copied in sequence starting at index target', () =>
{
    let arr = [1, 2, 3, 4, 5, 6, 7, 8];
    let result1 = copyWithin(arr, 1);
    expect(result1).toStrictEqual([1, 1, 2, 3, 4, 5, 6, 7]);
    let result2 = copyWithin(arr, 6, 3, 6);
    expect(result2).toStrictEqual([1, 2, 3, 4, 5, 6, 4, 5]);
    let result3 = copyWithin(arr, -1);
    expect(result3).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 1]);
    let result4 = copyWithin(arr, -4, -8, -4);
    expect(result4).toStrictEqual([1, 2, 3, 4, 1, 2, 3, 4]);
});

test('returns Array iterator object that contains key/value pairs for each index in the array', () =>
{
    let arr = [1, 2, 3, 4, 5];
    let iterator = entries(arr);
    expect(iterator.next().value).toStrictEqual([0, 1]);
    expect(iterator.next().value).toStrictEqual([1, 2]);
});

test('tests whether all elements return true from callback', () =>
{
    let arr = [1, 2, 3, 4, 5, 6];
    expect(every(arr, (val) => val > 0)).toBe(true);
    expect(every(arr, (val) => val <= 5)).toBe(false);
})