const { saludo1, saludo2, saludo3, saludar } = require('../app');

test('saludo1 retorna Hola', () => {
  expect(saludo1()).toBe("Hola");
});

test('saludo2 retorna Buenos días', () => {
  expect(saludo2()).toBe("Buenos días");
});

test('saludo3 retorna Hola, ¿Qué tal?', () => {
  expect(saludo3()).toBe("Hola, ¿Qué tal?");
});

test('saludar retorna un saludo válido', () => {
  const saludosValidos = ["Hola", "Buenos días", "Hola, ¿Qué tal?"];
  expect(saludosValidos).toContain(saludar());
});
