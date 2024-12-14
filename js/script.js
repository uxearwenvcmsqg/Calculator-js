let a = '';
let b = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['-', '+', 'x', '/', '+/-', '%'];

//display
const out = document.querySelector('.calc-screen p');

const clearAll = () => {
  a = '';
  b = '';
  sign = '';
  finish = false;
  out.textContent = 0;
};

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  //нажата не кнопка
  if (!event.target.classList.contains('btn')) return;

  //нажата кнопка clearAll
  if (event.target.classList.contains('ac')) return;
  out.textContent = '';

  //получаю нажатую кнопку
  const key = event.target.textContent;

  //если нажата цифровая кнопка digit 0-9 или .
  if (digit.includes(key)) {
    if (b === '' && sign === '') {
      a = a + key;
      console.log(a, b, sign);
      out.textContent = a;
    } else if (a !== '' && b !== '') {
      b = key;
      finish = false;
      out.textContent = b;
    } else {
      b = b + key;
      out.textContent = b;
    }
    console.log(a, b, sign);
    return;
  }

  //если нажата клавиша action действий + - / X
  if (action.includes(key)) {
    sign = key;
    out.textContent = sign;
    console.log(sign);
    return;
  }
  //нажата кнопка =
  if (key === '=') {
    if (b === '') [(b = a)];
    switch (sign) {
      case '+':
        a = +a + +b;
        break;
      case '-':
        a = +a - +b;
        break;
      case 'x':
        a = +a * +b;
        break;
      case '/':
        if (b === '0') {
          out.textContent = 'Слава гей';
          a = '';
          b = '';
          sign = 0;
          return;
        }
        a = +a / +b;
        break;
      case '+/-':
        out.textContent = 'error';
        return;
      case '%':
        out.textContent = 'error';
        return;
    }
    finish = true;
    out.textContent = a;
    console.log(a, b, sign);
  }
};

