const { myPush: push, myPop: pop, myMap: map, myFilter: filter } = require('./main');
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