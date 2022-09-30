const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('se retorna um array com dias e horas quando nao passado nenhum argumento', () => {
    expect(getOpeningHours()).toEqual({ Tuesday: { open: 8, close: 6 }, Wednesday: { open: 8, close: 6 }, Thursday: { open: 10, close: 8 }, Friday: { open: 10, close: 8 }, Saturday: { open: 8, close: 10 }, Sunday: { open: 8, close: 8 }, Monday: { open: 0, close: 0 },
    });
  });
  test('retorna the zoo is open se passado como argumento tuesday e 09:00 AM', () => {
    expect(getOpeningHours('tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('retorna The zoo is closed se passado como argumento wednesday e 09:00 PM', () => {
    expect(getOpeningHours('wednesday', '09:00-PM')).toBe('The zoo is closed');
  });
  test('se retorna throw new erro quando passado argumento inválido', () => {
    expect(getOpeningHours('wednesday', '09:30AM')).toThrow();
    expect(getOpeningHours('wednesday', '09:30')).toThrow();
    expect(getOpeningHours('wednesday', '13:00-PM')).toThrow();
    expect(getOpeningHours('wednesday', '09:70-PM')).toThrow();
    expect(getOpeningHours('domingo', '09:30-AM')).toThrow();
  });
});
