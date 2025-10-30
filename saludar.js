function saludo1() {
  return "Hola";
}

function saludo2() {
  return "Buenos días";
}

function saludo3() {
  return "Hola, ¿Qué tal?";
}

function saludar() {
  const saludos = [saludo1(), saludo2(), saludo3()];
  const index = Math.floor(Math.random() * saludos.length);
  return saludos[index];
}

module.exports = { saludo1, saludo2, saludo3, saludar };
