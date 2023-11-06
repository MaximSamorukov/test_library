const { drop } = require('../index');

test('test drop 1', () => {
   expect(drop([2, 1, 2, 3])).toStrictEqual([1, 2, 3]);
   expect(drop([1, 2, 3, 4], 2)).toStrictEqual([3, 4]);
   expect(drop(['a', 'b', 2, 3], 5)).toStrictEqual([]);
   expect(drop([2, 1], 0)).toStrictEqual([2, 1]);
});


