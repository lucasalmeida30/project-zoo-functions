const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('se retorna um array com dias e horas quando nao passado nenhum argumento', () => {
    expect(getOpeningHours()).toEqual({ Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 },
    });
  });
  test('retorna the zoo is open se passado como argumento monday e 09:00 AM', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('retorna the zoo is open se passado como argumento tuesday e 09:00 AM', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('retorna The zoo is closed se passado como argumento wednesday e 09:00 PM', () => {
    expect(getOpeningHours('wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('se retorna throw new erro quando passado argumento inválido', () => {
    expect(() => getOpeningHours('Dhu', '09:30AM')).toThrow('The day must be valid. Example: Monday');
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
    expect(() => getOpeningHours('Sunday', '09:c0-AM')).toThrow('The minutes should represent a number');
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
    expect(() => getOpeningHours('Tuesday', '09:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
