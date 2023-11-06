const { difference } = require('../index');

test('test difference 1', () => {
   expect(difference([2 , 1], [2 , 3])).toStrictEqual([1]);
   expect(difference([1, 2, 3], [2, 3, 4])).toStrictEqual([1]);
   expect(difference(['a', 'b'], [2, 3])).toStrictEqual(['a', 'b']);
   expect(difference([2, 1], [])).toStrictEqual([2, 1]);
});

test('test difference 2', () => {
   expect(difference([2 , 1], [2 , 3])).not.toStrictEqual([2]);
   expect(difference([1, 2, 3], [4, 5, 6])).not.toStrictEqual([1]);
   expect(difference(['a', 'b'], [2, 3])).not.toStrictEqual([2, 3]);
   expect(difference([2, 1], [])).not.toStrictEqual([]);
})
