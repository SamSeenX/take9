export class Typewriter {
  constructor(speed = 40) {
    this.speed = speed;
  }

  type(element, text, onChar) {
    return new Promise((resolve) => {
      element.innerHTML = "";
      let i = 0;

      const interval = setInterval(() => {
        if (i < text.length) {
          element.innerHTML += text.charAt(i);
          if (onChar) onChar();
          i++;
        } else {
          clearInterval(interval);
          resolve();
        }
      }, this.speed);
    });
  }
}
