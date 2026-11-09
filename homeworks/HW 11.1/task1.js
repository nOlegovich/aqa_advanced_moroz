function printWithDelay(text, ms) {
  setTimeout(() => {
    console.log(text);
  }, ms);
}

printWithDelay('Привіт! Як справи?', 1000);
printWithDelay('Все норм', 2000);