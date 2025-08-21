function padString(randomstring, arrLength, addSymbol, isRight = true) {
  if (arguments.length < 4) {
    if (typeof randomstring !== "string") {
      return "Please add first arg";
    }
    if (typeof arrLength !== "number") {
      return "Please add second arg";
    }
    if (typeof addsymbol !== "string") {
      return "Please the 3 arg";
    }
  }

  const resultSlice = randomstring.substring(0, arrLength);

  return !isRight ? addSymbol + resultSlice : resultSlice + addSymbol;
}

console.log(padString("hello", 8, "*", false));

// Вам потрібно написати реалізацію функції padString, яка приймає 4 аргументи:
// рядок
// число, яке є довжиною рядка, який ми хочемо отримати в результаті виконання функції
// символ (рядок довжиною 1 символ) — яким доповниться рядок, якщо це буде потрібно
// параметр булеан (true або false), який визначає, додавати символи ліворуч або праворуч (за замовчуванням праворуч)
// Обов'язково при написанні функції необхідно перевірити аргументи, які ми передали, і якщо якихось аргументів немає, то повернути рядок з помилкою з функції (return 'some error'). Повідомлення з помилкою має бути різним залежно від тієї умови, за якою не пройшла перевірка.
// Результат виклику функції потрібно вивести в консоль після завершення функції.
// Наприклад:
// Виклик padString('hello', 8, '*') поверне рядок hello***
// А виклик padString('hello', 6, '*', false) поверне рядок *hello
// Виклик padString('hello', 2) поверне 'he' — якщо число менше розміру введеного рядка, потрібно рядок обрізати за допомогою методу substr substring
