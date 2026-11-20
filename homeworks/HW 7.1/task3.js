function divide(numerator, denominator) {
  if (typeof numerator !== "number" || typeof denominator !== "number") {
    throw new TypeError("Обидва аргументи повинні бути числами");
  }
  if (denominator === 0) {
    throw new Error("Ділення на нуль неможливе");
  }
  return numerator / denominator;
}

try {
  console.log(divide(8, 2));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(4, 0));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide("12", 2));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(13, "vdvd"));
} catch (error) {
  console.error("Помилка:", error.message);
} finally {
  console.log("Робота завершена");
}