const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('retorna a quantidade de elefantes correspondente', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('retorna um array com nomes dos elefantes', () => {
    expect(handlerElephants('names')).toEqual(['Ilana', 'Orval', 'Bea', 'Jefferson']);
  });
  test('retorna a media de idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBe(10.5);
  });
  test('retorna a localização dos elefantes dentro do zoológico', () => {
    expect(handlerElephants('location')).toBe('NW');
  });
  test('retorna a popularidade dos elefantes', () => {
    expect(handlerElephants('popularity')).toBe(5);
  });
  test('retorna um array com a relação de dias em que é possível visitar os elefantes', () => {
    expect(handlerElephants('availability')).toEqual(['Friday', 'Saturday', 'Sunday', 'Tuesday']);
  });
  test('retorna null ', () => {
    expect(handlerElephants('')).toBeNull();
  });
  test('retorna msg de parametro invalido quando passado algo que nao seja string', () => {
    expect(handlerElephants(2)).toBe('Parâmetro inválido, é necessário uma string');
  });
  test('retorna undefined se o parametro for undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });
});
