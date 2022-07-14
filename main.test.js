const { myPush: push, myPop: pop, myMap: map, myFilter: filter, myFill: fill, myConcat: concat, myCopyWithin: copyWithin, myEntries: entries, myEvery: every, myFind: find, myFindIndex: findIndex, myFindLast: findLast, myFindLastIndex: findLastIndex, myFlat: flat, myFlatMap: flatMap, myForEach: forEach } = require('./main');
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
    let result1 = concat(arr, 4, 5, 6);
    expect(result1).toStrictEqual([1, 2, 3, 4, 5, 6]);
    expect(arr).toStrictEqual([1, 2, 3]);
    let result2 = concat(arr, [4, 5]);
    expect(result2).toStrictEqual([1, 2, 3, 4, 5]);
    let result3 = concat(arr, [[4, 5]]);
    expect(result3).toStrictEqual([1, 2, 3, [4, 5]]);
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
});

test('returns first element to return true from callback, or undefined if no match is found', () =>
{
    let arr = [13, 69, 420, 1337, 9029, 'hello world'];
    let result1 = find(arr, val => val === 9029);
    expect(result1).toBe(9029);
    let result2 = find(arr, val => val < 12);
    expect(result2).toBeUndefined();
    let result3 = find(arr, val => typeof (val) === 'string');
    expect(result3).toBe('hello world');
});

test('returns index of first element to return true from callback, or -1 if no match is found', () =>
{
    let arr = [13, 69, 420, 1337, 9029, 'hello world'];
    let result1 = findIndex(arr, val => val === 9029);
    expect(result1).toBe(4);
    let result2 = findIndex(arr, val => val < 12);
    expect(result2).toBe(-1);
    let result3 = findIndex(arr, val => typeof (val) === 'string');
    expect(result3).toBe(5);
});

test('returns last element that returns true from callback, or undefined if no match is found', () =>
{
    let arr = ['hello', 1, 2, 3, 4, 69, 420, 'world'];
    let result1 = findLast(arr, val => typeof (val) === 'string');
    expect(result1).toBe('world');
    let result2 = findLast(arr, val => val > 0);
    expect(result2).toBe(420);
    let result3 = findLast(arr, val => val === 'hello');
    expect(result3).toBe('hello');
    let result4 = findLast(arr, val => val > 420);
    expect(result4).toBeUndefined();
});

test('returns index of last element to return true from callback, or -1 if no match is found', () =>
{
    let arr = ['hello', 1, 2, 3, 4, 69, 420, 'world'];
    let result1 = findLastIndex(arr, val => typeof (val) === 'string');
    expect(result1).toBe(7);
    let result2 = findLastIndex(arr, val => val > 0);
    expect(result2).toBe(6);
    let result3 = findLastIndex(arr, val => val === 'hello');
    expect(result3).toBe(0);
    let result4 = findLastIndex(arr, val => val > 420);
    expect(result4).toBe(-1);
});

test('returns new array where nested array element depth is reduced by depth', () =>
{
    let arr1 = [1, 2, 3];
    expect(flat(arr1)).toStrictEqual([1, 2, 3]);
    let arr2 = [1, 2, [3, 4]];
    expect(flat(arr2)).toStrictEqual([1, 2, 3, 4]);
    let arr3 = [1, 2, [[3, 4]]];
    expect(flat(arr3)).toStrictEqual([1, 2, [3, 4]]);
    let arr4 = [[1, 2], 3, [4, 5]];
    expect(flat(arr4)).toStrictEqual([1, 2, 3, 4, 5]);
    let arr5 = [[[1, 2, 3]]];
    expect(flat(arr5, 2)).toStrictEqual([1, 2, 3]);
    let arr6 = [1, [[[[2, 3]]]], 4, [[5, 6]]];
    expect(flat(arr6, 3)).toStrictEqual([1, [2, 3], 4, 5, 6])
});

test('returns array where original array is flattened one level and the callback is applied to each element of the flattened array', () =>
{
    let arr1 = [1, 2, 3];
    expect(flatMap(arr1, (val) => val + 1)).toStrictEqual([2, 3, 4]);
    let arr2 = [1, 2, 3, 4];
    expect(flatMap(arr2, (x) => [x * 2])).toStrictEqual([2, 4, 6, 8]);
    expect(flatMap(arr2, (x) => [[x * 2]])).toStrictEqual([[2], [4], [6], [8]]);
    let arr3 = ["it's Sunny in", "", "California"];
    expect(flatMap(arr3, (str) => str.split(" "))).toStrictEqual(["it's", "Sunny", "in", "", "California"]);
});

test('exectues callback on each member of the passed in array', () =>
{
    let arr = [1, 2, 3];
    expect(forEach(arr, (val) => val + 1)).toBeUndefined(); // return value should be undefined
    expect(arr).toStrictEqual([1, 2, 3]);   // makes sure original array is unmodified by callback
})