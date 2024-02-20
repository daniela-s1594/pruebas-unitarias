const HoursConvert = require('./03-convertHours');

test('Convert seconds to hours minutes and seconds', () => {
  const rta = HoursConvert(3600);
  expect(rta).toBe('1:0:0');

  const rta2 = HoursConvert(3700);
  expect(rta2).toBe('1:1:40');

  const rta3 = HoursConvert(0);
  expect(rta3).toBe('0:0:0');
});
