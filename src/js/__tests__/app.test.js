import sortChars from '../app';

test('Check health', () => {
  const charsToTest = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ];

  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];
  try {
    expect(sortChars(charsToTest)).toBe(expected);
  } catch (e) {
    // eslint-disable-next-line no-console
    console.log(e);
    expect(sortChars(charsToTest)).toEqual(expected);
  }
});
