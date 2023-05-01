document.body.classList.add('body');

const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const title = document.createElement('h1');
title.classList.add('title');
title.textContent = 'RSS Virtual Keyboard';
container.appendChild(title);
const module = document.createElement('div');
module.classList.add('module');
container.appendChild(module);
const textWindow = document.createElement('textarea');
textWindow.classList.add('text-window');
textWindow.setAttribute('rows', '50');
textWindow.setAttribute('cols', '5');
module.appendChild(textWindow);
const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
module.appendChild(keyboard);
const decription = document.createElement('p');
decription.classList.add('description');
decription.textContent = 'Клавиатура создана на Windows.\r\n Переключение языка реализовано кобинацией левых CTRL+ALT';
container.appendChild(decription);

const row1 = [
  {
    name: 'acute',
    code: 'Backquote',
    en: {
      lowerCase: '`',
      upperCase: '~',
      capsLock: '`',
      capsShift: '~',
    },
    rus: {
      lowerCase: 'ё',
      upperCase: 'Ё',
      capsLock: 'Ё',
      capsShift: 'ё',
    },
  },
  {
    name: 'key1',
    code: 'Digit1',
    en: {
      lowerCase: '1',
      upperCase: '!',
      capsLock: '1',
      capsShift: '!',
    },
    rus: {
      lowerCase: '1',
      upperCase: '!',
      capsLock: '1',
      capsShift: '!',
    },
  },
  {
    name: 'key2',
    code: 'Digit2',
    en: {
      lowerCase: '2',
      upperCase: '@',
      capsLock: '2',
      capsShift: '@',
    },
    rus: {
      lowerCase: '2',
      upperCase: '"',
      capsLock: '2',
      capsShift: '"',
    },
  },
  {
    name: 'key3',
    code: 'Digit3',
    en: {
      lowerCase: '3',
      upperCase: '#',
      capsLock: '3',
      capsShift: '#',
    },
    rus: {
      lowerCase: '3',
      upperCase: '№',
      capsLock: '3',
      capsShift: '№',
    },
  },
  {
    name: 'key4',
    code: 'Digit4',
    en: {
      lowerCase: '4',
      upperCase: '$',
      capsLock: '4',
      capsShift: '$',
    },
    rus: {
      lowerCase: '4',
      upperCase: ';',
      capsLock: '4',
      capsShift: ';',
    },
  },
  {
    name: 'key5',
    code: 'Digit5',
    en: {
      lowerCase: '5',
      upperCase: '%',
      capsLock: '5',
      capsShift: '%',
    },
    rus: {
      lowerCase: '5',
      upperCase: '%',
      capsLock: '5',
      capsShift: '%',
    },
  },
  {
    name: 'key6',
    code: 'Digit6',
    en: {
      lowerCase: '6',
      upperCase: '^',
      capsLock: '6',
      capsShift: '^',
    },
    rus: {
      lowerCase: '6',
      upperCase: ':',
      capsLock: '6',
      capsShift: ':',
    },
  },
  {
    name: 'key7',
    code: 'Digit7',
    en: {
      lowerCase: '7',
      upperCase: '&',
      capsLock: '7',
      capsShift: '&',
    },
    rus: {
      lowerCase: '7',
      upperCase: '?',
      capsLock: '7',
      capsShift: '?',
    },
  },
  {
    name: 'key8',
    code: 'Digit8',
    en: {
      lowerCase: '8',
      upperCase: '&',
      capsLock: '8',
      capsShift: '&',
    },
    rus: {
      lowerCase: '8',
      upperCase: '*',
      capsLock: '8',
      capsShift: '*',
    },
  },
  {
    name: 'key9',
    code: 'Digit9',
    en: {
      lowerCase: '9',
      upperCase: '(',
      capsLock: '9',
      capsShift: '(',
    },
    rus: {
      lowerCase: '9',
      upperCase: '(',
      capsLock: '9',
      capsShift: '(',
    },
  },
  {
    name: 'key0',
    code: 'Digit0',
    en: {
      lowerCase: '0',
      upperCase: ')',
      capsLock: '0',
      capsShift: ')',
    },
    rus: {
      lowerCase: '0',
      upperCase: ')',
      capsLock: '0',
      capsShift: ')',
    },
  },
  {
    name: 'minus',
    code: 'Minus',
    en: {
      lowerCase: '-',
      upperCase: '_',
      capsLock: '-',
      capsShift: '_',
    },
    rus: {
      lowerCase: '-',
      upperCase: '_',
      capsLock: '-',
      capsShift: '_',
    },
  },
  {
    name: 'equally',
    code: 'Equal',
    en: {
      lowerCase: '=',
      upperCase: '+',
      capsLock: '=',
      capsShift: '+',
    },
    rus: {
      lowerCase: '=',
      upperCase: '+',
      capsLock: '=',
      capsShift: '+',
    },
  },
  {
    name: 'backspace',
    code: 'Backspace',
    en: {
      lowerCase: 'Backspace',
      upperCase: 'Backspace',
      capsLock: 'Backspace',
      capsShift: 'Backspace',
    },
    rus: {
      lowerCase: 'Backspace',
      upperCase: 'Backspace',
      capsLock: 'Backspace',
      capsShift: 'Backspace',
    },
  },
];

const row2 = [
  {
    name: 'tab',
    code: 'Tab',
    en: {
      lowerCase: 'Tab',
      upperCase: 'Tab',
      capsLock: 'Tab',
      capsShift: 'Tab',
    },
    rus: {
      lowerCase: 'Tab',
      upperCase: 'Tab',
      capsLock: 'Tab',
      capsShift: 'Tab',
    },
  },
  {
    name: 'keyQ',
    code: 'KeyQ',
    en: {
      lowerCase: 'q',
      upperCase: 'Q',
      capsLock: 'Q',
      capsShift: 'q',
    },
    rus: {
      lowerCase: 'й',
      upperCase: 'Й',
      capsLock: 'Й',
      capsShift: 'й',
    },
  },
  {
    name: 'keyW',
    code: 'KeyW',
    en: {
      lowerCase: 'w',
      upperCase: 'W',
      capsLock: 'W',
      capsShift: 'w',
    },
    rus: {
      lowerCase: 'ц',
      upperCase: 'Ц',
      capsLock: 'Ц',
      capsShift: 'ц',
    },
  },
  {
    name: 'keyE',
    code: 'KeyE',
    en: {
      lowerCase: 'e',
      upperCase: 'E',
      capsLock: 'E',
      capsShift: 'e',
    },
    rus: {
      lowerCase: 'у',
      upperCase: 'У',
      capsLock: 'У',
      capsShift: 'у',
    },
  },
  {
    name: 'keyR',
    code: 'KeyR',
    en: {
      lowerCase: 'r',
      upperCase: 'R',
      capsLock: 'R',
      capsShift: 'r',
    },
    rus: {
      lowerCase: 'к',
      upperCase: 'К',
      capsLock: 'К',
      capsShift: 'к',
    },
  },
  {
    name: 'keyT',
    code: 'KeyT',
    en: {
      lowerCase: 't',
      upperCase: 'T',
      capsLock: 'T',
      capsShift: 't',
    },
    rus: {
      lowerCase: 'е',
      upperCase: 'Е',
      capsLock: 'Е',
      capsShift: 'е',
    },
  },
  {
    name: 'keyY',
    code: 'KeyY',
    en: {
      lowerCase: 'y',
      upperCase: 'Y',
      capsLock: 'Y',
      capsShift: 'y',
    },
    rus: {
      lowerCase: 'н',
      upperCase: 'Н',
      capsLock: 'Н',
      capsShift: 'н',
    },
  },
  {
    name: 'keyU',
    code: 'KeyU',
    en: {
      lowerCase: 'u',
      upperCase: 'U',
      capsLock: 'U',
      capsShift: 'u',
    },
    rus: {
      lowerCase: 'г',
      upperCase: 'Г',
      capsLock: 'Г',
      capsShift: 'г',
    },
  },
  {
    name: 'keyI',
    code: 'KeyI',
    en: {
      lowerCase: 'i',
      upperCase: 'I',
      capsLock: 'I',
      capsShift: 'i',
    },
    rus: {
      lowerCase: 'ш',
      upperCase: 'Ш',
      capsLock: 'Ш',
      capsShift: 'ш',
    },
  },
  {
    name: 'keyO',
    code: 'KeyO',
    en: {
      lowerCase: 'o',
      upperCase: 'O',
      capsLock: 'O',
      capsShift: 'o',
    },
    rus: {
      lowerCase: 'щ',
      upperCase: 'Щ',
      capsLock: 'Щ',
      capsShift: 'щ',
    },
  },
  {
    name: 'keyP',
    code: 'KeyP',
    en: {
      lowerCase: 'p',
      upperCase: 'P',
      capsLock: 'P',
      capsShift: 'P',
    },
    rus: {
      lowerCase: 'з',
      upperCase: 'З',
      capsLock: 'З',
      capsShift: 'з',
    },
  },
  {
    name: 'leftSqwareBracket',
    code: 'BracketLeft',
    en: {
      lowerCase: '[',
      upperCase: '{',
      capsLock: '[',
      capsShift: '{',
    },
    rus: {
      lowerCase: 'х',
      upperCase: 'Х',
      capsLock: 'Х',
      capsShift: 'х',
    },
  },
  {
    name: 'rightSqwareBracket',
    code: 'BracketRight',
    en: {
      lowerCase: ']',
      upperCase: '}',
      capsLock: ']',
      capsShift: '}',
    },
    rus: {
      lowerCase: 'ъ',
      upperCase: 'Ъ',
      capsLock: 'Ъ',
      capsShift: 'ъ',
    },
  },
  {
    name: 'backslash',
    code: 'Backslash',
    en: {
      lowerCase: '&#92;',
      upperCase: '/;',
      capsLock: '&#92;',
      capsShift: '/',
    },
    rus: {
      lowerCase: '&#92;',
      upperCase: '|',
      capsLock: '&#92;',
      capsShift: '|',
    },
  },
  {
    name: 'delete',
    code: 'Delete',
    en: {
      lowerCase: 'Del',
      upperCase: 'Del',
      capsLock: 'Del',
      capsShift: 'Del',
    },
    rus: {
      lowerCase: 'Del',
      upperCase: 'Del',
      capsLock: 'Del',
      capsShift: 'Del',
    },
  },
];

const row3 = [
  {
    name: 'capsLock',
    code: 'CapsLock',
    en: {
      lowerCase: 'CapsLock',
      upperCase: 'CapsLock',
      capsLock: 'CapsLock',
      capsShift: 'CapsLock',
    },
    rus: {
      lowerCase: 'CapsLock',
      upperCase: 'CapsLock',
      capsLock: 'CapsLock',
      capsShift: 'CapsLock',
    },
  },
  {
    name: 'keyA',
    code: 'KeyA',
    en: {
      lowerCase: 'a',
      upperCase: 'A',
      capsLock: 'A',
      capsShift: 'a',
    },
    rus: {
      lowerCase: 'ф',
      upperCase: 'Ф',
      capsLock: 'Ф',
      capsShift: 'ф',
    },
  },
  {
    name: 'keyS',
    code: 'KeyS',
    en: {
      lowerCase: 's',
      upperCase: 'S',
      capsLock: 'S',
      capsShift: 's',
    },
    rus: {
      lowerCase: 'ы',
      upperCase: 'Ы',
      capsLock: 'Ы',
      capsShift: 'ы',
    },
  },
  {
    name: 'keyD',
    code: 'KeyD',
    en: {
      lowerCase: 'd',
      upperCase: 'D',
      capsLock: 'D',
      capsShift: 'd',
    },
    rus: {
      lowerCase: 'в',
      upperCase: 'В',
      capsLock: 'В',
      capsShift: 'в',
    },
  },
  {
    name: 'keyF',
    code: 'KeyF',
    en: {
      lowerCase: 'f',
      upperCase: 'F',
      capsLock: 'F',
      capsShift: 'f',
    },
    rus: {
      lowerCase: 'а',
      upperCase: 'А',
      capsLock: 'А',
      capsShift: 'а',
    },
  },
  {
    name: 'keyG',
    code: 'KeyG',
    en: {
      lowerCase: 'g',
      upperCase: 'G',
      capsLock: 'G',
      capsShift: 'g',
    },
    rus: {
      lowerCase: 'п',
      upperCase: 'П',
      capsLock: 'П',
      capsShift: 'п',
    },
  },
  {
    name: 'keyH',
    code: 'KeyH',
    en: {
      lowerCase: 'h',
      upperCase: 'H',
      capsLock: 'H',
      capsShift: 'h',
    },
    rus: {
      lowerCase: 'р',
      upperCase: 'Р',
      capsLock: 'Р',
      capsShift: 'р',
    },
  },
  {
    name: 'keyJ',
    code: 'KeyJ',
    en: {
      lowerCase: 'j',
      upperCase: 'J',
      capsLock: 'J',
      capsShift: 'j',
    },
    rus: {
      lowerCase: 'о',
      upperCase: 'О',
      capsLock: 'О',
      capsShift: 'о',
    },
  },
  {
    name: 'keyK',
    code: 'KeyK',
    en: {
      lowerCase: 'k',
      upperCase: 'K',
      capsLock: 'K',
      capsShift: 'k',
    },
    rus: {
      lowerCase: 'л',
      upperCase: 'Л',
      capsLock: 'Л',
      capsShift: 'л',
    },
  },
  {
    name: 'keyL',
    code: 'KeyL',
    en: {
      lowerCase: 'l',
      upperCase: 'L',
      capsLock: 'L',
      capsShift: 'l',
    },
    rus: {
      lowerCase: 'д',
      upperCase: 'Д',
      capsLock: 'Д',
      capsShift: 'д',
    },
  },
  {
    name: 'semicolon',
    code: 'Semicolon',
    en: {
      lowerCase: ';',
      upperCase: ':',
      capsLock: ';',
      capsShift: ':',
    },
    rus: {
      lowerCase: 'ж',
      upperCase: 'Ж',
      capsLock: 'Ж',
      capsShift: 'ж',
    },
  },
  {
    name: 'apostrophe',
    code: 'Quote',
    en: {
      lowerCase: '&#8242;',
      upperCase: '"',
      capsLock: '&#8242;',
      capsShift: '"',
    },
    rus: {
      lowerCase: 'э',
      upperCase: 'Э',
      capsLock: 'Э',
      capsShift: 'э',
    },
  },
  {
    name: 'enter',
    code: 'Enter',
    en: {
      lowerCase: 'Enter',
      upperCase: 'Enter',
      capsLock: 'Enter',
      capsShift: 'Enter',
    },
    rus: {
      lowerCase: 'Enter',
      upperCase: 'Enter',
      capsLock: 'Enter',
      capsShift: 'Enter',
    },
  }];
const row4 = [
  {
    name: 'leftShift',
    code: 'ShiftLeft',
    en: {
      lowerCase: 'Shift',
      upperCase: 'Shift',
      capsLock: 'Shift',
      capsShift: 'Shift',
    },
    rus: {
      lowerCase: 'Shift',
      upperCase: 'Shift',
      capsLock: 'Shift',
      capsShift: 'Shift',
    },
  },
  {
    name: 'keyZ',
    code: 'KeyZ',
    en: {
      lowerCase: 'z',
      upperCase: 'Z',
      capsLock: 'Z',
      capsShift: 'z',
    },
    rus: {
      lowerCase: 'я',
      upperCase: 'Я',
      capsLock: 'Я',
      capsShift: 'я',
    },
  },
  {
    name: 'keyX',
    code: 'KeyX',
    en: {
      lowerCase: 'x',
      upperCase: 'X',
      capsLock: 'X',
      capsShift: 'x',
    },
    rus: {
      lowerCase: 'ч',
      upperCase: 'Ч',
      capsLock: 'Ч',
      capsShift: 'ч',
    },
  },
  {
    name: 'keyC',
    code: 'KeyC',
    en: {
      lowerCase: 'c',
      upperCase: 'C',
      capsLock: 'C',
      capsShift: 'c',
    },
    rus: {
      lowerCase: 'с',
      upperCase: 'С',
      capsLock: 'С',
      capsShift: 'с',
    },
  },
  {
    name: 'keyV',
    code: 'KeyV',
    en: {
      lowerCase: 'v',
      upperCase: 'V',
      capsLock: 'V',
      capsShift: 'v',
    },
    rus: {
      lowerCase: 'м',
      upperCase: 'М',
      capsLock: 'М',
      capsShift: 'м',
    },
  },
  {
    name: 'keyB',
    code: 'KeyB',
    en: {
      lowerCase: 'b',
      upperCase: 'B',
      capsLock: 'B',
      capsShift: 'b',
    },
    rus: {
      lowerCase: 'и',
      upperCase: 'И',
      capsLock: 'И',
      capsShift: 'и',
    },
  },
  {
    name: 'keyN',
    code: 'KeyN',
    en: {
      lowerCase: 'n',
      upperCase: 'N',
      capsLock: 'N',
      capsShift: 'n',
    },
    rus: {
      lowerCase: 'т',
      upperCase: 'Т',
      capsLock: 'Т',
      capsShift: 'т',
    },
  },
  {
    name: 'keyM',
    code: 'KeyM',
    en: {
      lowerCase: 'm',
      upperCase: 'M',
      capsLock: 'M',
      capsShift: 'm',
    },
    rus: {
      lowerCase: 'ь',
      upperCase: 'Ь',
      capsLock: 'Ь',
      capsShift: 'ь',
    },
  },
  {
    name: 'comma',
    code: 'Comma',
    en: {
      lowerCase: ',',
      upperCase: '<',
      capsLock: ',',
      capsShift: '<',
    },
    rus: {
      lowerCase: 'б',
      upperCase: 'Б',
      capsLock: 'Б',
      capsShift: 'б',
    },
  },
  {
    name: 'dot',
    code: 'Period',
    en: {
      lowerCase: '.',
      upperCase: '>',
      capsLock: '.',
      capsShift: '>',
    },
    rus: {
      lowerCase: 'ю',
      upperCase: 'Ю',
      capsLock: 'Ю',
      capsShift: 'ю',
    },
  },
  {
    name: 'slash',
    code: 'Slash',
    en: {
      lowerCase: '/',
      upperCase: '?',
      capsLock: '/',
      capsShift: '?',
    },
    rus: {
      lowerCase: '.',
      upperCase: ',',
      capsLock: '.',
      capsShift: ',',
    },
  },
  {
    name: 'keyUp',
    code: 'ArrowUp',
    en: {
      lowerCase: '&#9650;',
      upperCase: '&#9650;',
      capsLock: '&#9650;',
      capsShift: '&#9650;',
    },
    rus: {
      lowerCase: '&#9650;',
      upperCase: '&#9650;',
      capsLock: '&#9650;',
      capsShift: '&#9650;',
    },
  },
  {
    name: 'rightShift',
    code: 'ShiftRight',
    en: {
      lowerCase: 'Shift',
      upperCase: 'Shift',
      capsLock: 'Shift',
      capsShift: 'Shift',
    },
    rus: {
      lowerCase: 'Shift',
      upperCase: 'Shift',
      capsLock: 'Shift',
      capsShift: 'Shift',
    },
  },
];
const row5 = [
  {
    name: 'leftCtrl',
    code: 'ControlLeft',
    en: {
      lowerCase: 'Ctrl',
      upperCase: 'Ctrl',
      capsLock: 'Ctrl',
      capsShift: 'Ctrl',
    },
    rus: {
      lowerCase: 'Ctrl',
      upperCase: 'Ctrl',
      capsLock: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },
  {
    name: 'language',
    code: 'Language',
    en: {
      lowerCase: '&#127760; EN',
      upperCase: '&#127760; EN',
      capsLock: '&#127760; EN',
      capsShift: '&#127760; EN',
    },
    rus: {
      lowerCase: '&#127760; RU',
      upperCase: '&#127760; RU',
      capsLock: '&#127760; RU',
      capsShift: '&#127760; RU',
    },
  },
  {
    name: 'leftAlt',
    code: 'AltLeft',
    en: {
      lowerCase: 'Alt',
      upperCase: 'Alt',
      capsLock: 'Alt',
      capsShift: 'Alt',
    },
    rus: {
      lowerCase: 'Alt',
      upperCase: 'Alt',
      capsLock: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    name: 'space',
    code: 'Space',
    en: {
      lowerCase: ' ',
      upperCase: ' ',
      capsLock: ' ',
      capsShift: ' ',
    },
    rus: {
      lowerCase: ' ',
      upperCase: ' ',
      capsLock: ' ',
      capsShift: ' ',
    },
  },
  {
    name: 'rightAlt',
    code: 'AltRight',
    en: {
      lowerCase: 'Alt',
      upperCase: 'Alt',
      capsLock: 'Alt',
      capsShift: 'Alt',
    },
    rus: {
      lowerCase: 'Alt',
      upperCase: 'Alt',
      capsLock: 'Alt',
      capsShift: 'Alt',
    },
  },
  {
    name: 'keyLeft',
    code: 'ArrowLeft',
    en: {
      lowerCase: '&#9664;',
      upperCase: '&#9664;',
      capsLock: '&#9664;',
      capsShift: '&#9664;',
    },
    rus: {
      lowerCase: '&#9664;',
      upperCase: '&#9664;',
      capsLock: '&#9664;',
      capsShift: '&#9664;',
    },
  },
  {
    name: 'keyDown',
    code: 'ArrowDown',
    en: {
      lowerCase: '&#9660;',
      upperCase: '&#9660;',
      capsLock: '&#9660;',
      capsShift: '&#9660;',
    },
    rus: {
      lowerCase: '&#9660;',
      upperCase: '&#9660;',
      capsLock: '&#9660;',
      capsShift: '&#9660;',
    },
  },
  {
    name: 'keyRight',
    code: 'ArrowRight',
    en: {
      lowerCase: '&#9654',
      upperCase: '&#9654',
      capsLock: '&#9654',
      capsShift: '&#9654',
    },
    rus: {
      lowerCase: '&#9654',
      upperCase: '&#9654',
      capsLock: '&#9654',
      capsShift: '&#9654',
    },
  },
  {
    name: 'rightCtrl',
    code: 'ControlRight',
    en: {
      lowerCase: 'Ctrl',
      upperCase: 'Ctrl',
      capsLock: 'Ctrl',
      capsShift: 'Ctrl',
    },
    rus: {
      lowerCase: 'Ctrl',
      upperCase: 'Ctrl',
      capsLock: 'Ctrl',
      capsShift: 'Ctrl',
    },
  },
];
function createRow(numRow) {
  const row = document.createElement('div');
  row.classList.add('row');
  numRow.forEach((el) => {
    const keyBtn = document.createElement('button');
    keyBtn.classList.add('key-button');
    keyBtn.setAttribute('id', el.code);
    switch (el.name) {
      case 'acute':
        keyBtn.classList.add('key-acute');
        break;
      case 'backspace':
        keyBtn.classList.add('key-backspace');
        break;
      case 'capsLock':
        keyBtn.classList.add('key-capslock');
        break;
      case 'leftShift':
      case 'rightShift':
        keyBtn.classList.add('key-shift');
        break;
      case 'enter':
        keyBtn.classList.add('key-enter');
        break;

      case 'space':
        keyBtn.classList.add('key-space');
        break;
      case 'tab':
        keyBtn.classList.add('key-tab');
        break;
      case 'delete':
        keyBtn.classList.add('key-delete');
        break;
      case 'leftCtrl':
      case 'rightCtrl':
        keyBtn.classList.add('key-ctrl');
        break;
      case 'language':
        keyBtn.classList.add('key-lang');
        break;
      case 'leftAlt':
      case 'rightAlt':
        keyBtn.classList.add('key-alt');
        break;
      case 'keyUp':
        keyBtn.classList.add('key-up');
        break;
      case 'keyDown':
        keyBtn.classList.add('key-down');
        break;
      case 'keyLeft':
        keyBtn.classList.add('key-left');
        break;
      case 'keyRight':
        keyBtn.classList.add('key-right');
        break;
      // no default
    }
    keyBtn.setAttribute('type', 'button');
    keyBtn.innerHTML = el.en.lowerCase;
    row.appendChild(keyBtn);
  });
  keyboard.appendChild(row);
}
createRow(row1);
createRow(row2);
createRow(row3);
createRow(row4);
createRow(row5);
textWindow.focus();
const rows = [...row1, ...row2, ...row3, ...row4, ...row5];
const keyboardEvent = document.querySelector('.keyboard');
const allKeys = document.querySelectorAll('.key-button');
const capsKey = document.getElementById('CapsLock');
const langKey = document.getElementById('Language');
const shiftKeyLeft = document.getElementById('ShiftLeft');
const shiftKeyRight = document.getElementById('ShiftRight');
const altKeyLeft = document.getElementById('AltLeft');
const ctrlKeyLeft = document.getElementById('ControlLeft');
const altKeyRight = document.getElementById('AltRight');
const ctrlKeyRight = document.getElementById('ControlRight');
const backspaceKey = document.getElementById('Backspace');
const deleteKey = document.getElementById('Delete');
const tabKey = document.getElementById('Tab');
const enterKey = document.getElementById('Enter');
function runCapsLock(event) {
  if (event.classList.contains('active')) {
    if (event.classList.contains('rus')) {
      allKeys.forEach((keyBtn, index) => {
        keyBtn.innerHTML = rows[index].rus.capsLock;
      });
    } else {
      allKeys.forEach((keyBtn, index) => {
        keyBtn.innerHTML = rows[index].en.capsLock;
      });
    }
  } else if (event.classList.contains('rus')) {
    allKeys.forEach((keyBtn, index) => {
      keyBtn.innerHTML = rows[index].rus.lowerCase;
    });
  } else {
    allKeys.forEach((keyBtn, index) => {
      keyBtn.innerHTML = rows[index].en.lowerCase;
    });
  }
}

function changeLanguage(event) {
  allKeys.forEach((keyBtn, index) => {
    if (!capsKey.classList.contains('active')) {
      if (!event.classList.contains('rus')) {
        keyBtn.innerHTML = rows[index].rus.lowerCase;
        keyBtn.classList.add('rus');
      } else {
        keyBtn.classList.remove('rus');
        keyBtn.innerHTML = rows[index].en.lowerCase;
      }
    } else if (!event.classList.contains('rus')) {
      keyBtn.innerHTML = rows[index].rus.capsLock;
      keyBtn.classList.add('rus');
    } else {
      keyBtn.classList.remove('rus');
      keyBtn.innerHTML = rows[index].en.capsLock;
    }
  });
}
function runShift() {
  allKeys.forEach((keyBtn, index) => {
    if (!capsKey.classList.contains('active')) {
      if (!langKey.classList.contains('rus')) {
        keyBtn.innerHTML = rows[index].en.upperCase;
      } else {
        keyBtn.innerHTML = rows[index].rus.upperCase;
      }
    } else if (!langKey.classList.contains('rus')) {
      keyBtn.innerHTML = rows[index].en.capsShift;
    } else {
      keyBtn.innerHTML = rows[index].rus.capsShift;
    }
  });
}

function noRunShift() {
  allKeys.forEach((keyBtn, index) => {
    if (!capsKey.classList.contains('active')) {
      if (!langKey.classList.contains('rus')) {
        keyBtn.innerHTML = rows[index].en.lowerCase;
      } else {
        keyBtn.innerHTML = rows[index].rus.lowerCase;
      }
    } else if (!langKey.classList.contains('rus')) {
      keyBtn.innerHTML = rows[index].en.capsLock;
    } else {
      keyBtn.innerHTML = rows[index].rus.capsLock;
    }
  });
}

function backSpace() {
  const start = textWindow.selectionStart;
  const end = textWindow.selectionEnd;
  const textLength = textWindow.value.length;
  const beforeText = textWindow.value.substring(0, start);
  const afterText = textWindow.value.substring(end, textLength);
  if (start === end) {
    textWindow.value = textWindow.value.substring(0, start - 1)
      + textWindow.value.substring(end, textLength);
    textWindow.focus();
    textWindow.selectionStart = start - 1;
    textWindow.selectionEnd = start - 1;
  } else {
    textWindow.value = beforeText + afterText;
    textWindow.focus();
    textWindow.selectionStart = start;
    textWindow.selectionEnd = start;
  }
}
function deleteValue() {
  const start = textWindow.selectionStart;
  const end = textWindow.selectionEnd;
  const textLength = textWindow.value.length;
  const beforeText = textWindow.value.substring(0, start);
  const afterText = textWindow.value.substring(end, textLength);
  if (start === end) {
    textWindow.value = textWindow.value.substring(0, start)
      + textWindow.value.substring(end + 1, textLength);
    textWindow.focus();
    textWindow.selectionStart = start;
    textWindow.selectionEnd = start;
  } else {
    textWindow.value = beforeText + afterText;
    textWindow.focus();
    textWindow.selectionStart = start;
    textWindow.selectionEnd = start;
  }
}

function ctrlAlt(event) {
  if (event.ctrlKey && event.code === 'AltLeft') {
    changeLanguage(langKey);
  }
}

function altCtrl(event) {
  if (event.altKey && event.code === 'ControlLeft') {
    changeLanguage(langKey);
  }
}
function clickMouse() {
  keyboardEvent.addEventListener('mousedown', (event) => {
    if (event.target.classList.contains('key-button')) {
      event.target.classList.toggle('active');
      switch (true) {
        case event.target.getAttribute('id') === capsKey.getAttribute('id'):
          runCapsLock(event.target);
          break;
        case event.target.getAttribute('id') === langKey.getAttribute('id'):
          changeLanguage(event.target);
          break;
        case event.target.getAttribute('id') === tabKey.getAttribute('id'):
          textWindow.value += '   ';

          break;
        case event.target.getAttribute('id') === backspaceKey.getAttribute('id'):
          backSpace();
          break;
        case event.target.getAttribute('id') === shiftKeyRight.getAttribute('id'):
        case event.target.getAttribute('id') === shiftKeyLeft.getAttribute('id'):
          runShift();
          break;
        case event.target.getAttribute('id') === deleteKey.getAttribute('id'):
          deleteValue();
          break;
        case event.target.getAttribute('id') === enterKey.getAttribute('id'):
          textWindow.value += '\n';
          break;
        case event.target.getAttribute('id') === altKeyLeft.getAttribute('id'):
        case event.target.getAttribute('id') === ctrlKeyLeft.getAttribute('id'):
        case event.target.getAttribute('id') === altKeyRight.getAttribute('id'):
        case event.target.getAttribute('id') === ctrlKeyRight.getAttribute('id'):
          break;
        default:
          textWindow.value += event.target.innerHTML;
          break;
      }
    }
  });
  keyboardEvent.addEventListener('mouseup', (event) => {
    textWindow.focus();
    if (event.target.classList.contains('key-button')) {
      switch (true) {
        case event.target.getAttribute('id') === capsKey.getAttribute('id'):
          break;
        case event.target.getAttribute('id') === shiftKeyRight.getAttribute('id'):
        case event.target.getAttribute('id') === shiftKeyLeft.getAttribute('id'):
          noRunShift();
          event.target.classList.remove('active');
          break;
        default:
          event.target.classList.remove('active');
          break;
      }
    }
  });
}
keyboardEvent.addEventListener('mouseout', () => {
  allKeys.forEach((el) => {
    if (el.getAttribute('id') !== capsKey.getAttribute('id')) {
      el.classList.remove('active');
    }
    if (el.getAttribute('id') === shiftKeyLeft.getAttribute('id') || el.getAttribute('id') === shiftKeyRight.getAttribute('id')) {
      el.classList.remove('active');
      noRunShift();
    }
  });
});
function clickKeyboard() {
  document.addEventListener('keydown', (event) => {
    allKeys.forEach((button) => {
      if (event.code === button.getAttribute('id')) {
        button.classList.toggle('active');
        switch (true) {
          case button.getAttribute('id') === capsKey.getAttribute('id'):
            runCapsLock(button);
            break;
          case button.getAttribute('id') === shiftKeyLeft.getAttribute('id'):
          case button.getAttribute('id') === shiftKeyRight.getAttribute('id'):
            runShift();
            break;
          case button.getAttribute('id') === backspaceKey.getAttribute('id'):
            backSpace();
            break;
          case button.getAttribute('id') === deleteKey.getAttribute('id'):
            deleteValue();
            break;
          case button.getAttribute('id') === tabKey.getAttribute('id'):
            textWindow.value += '   ';
            break;
          case button.getAttribute('id') === enterKey.getAttribute('id'):
            textWindow.value += '\n';
            break;
          case button.getAttribute('id') === altKeyLeft.getAttribute('id'):
          case button.getAttribute('id') === ctrlKeyLeft.getAttribute('id'):
          case button.getAttribute('id') === altKeyRight.getAttribute('id'):
          case button.getAttribute('id') === ctrlKeyRight.getAttribute('id'):
            break;

          default:
            textWindow.value += button.innerHTML;
            break;
        }
      }
    });
    event.preventDefault();
  });
  document.addEventListener('keyup', (event) => {
    allKeys.forEach((button) => {
      textWindow.focus();
      if (event.code === button.getAttribute('id')) {
        switch (true) {
          case button.getAttribute('id') === capsKey.getAttribute('id'):
            break;
          case button.getAttribute('id') === shiftKeyLeft.getAttribute('id'):
          case button.getAttribute('id') === shiftKeyRight.getAttribute('id'):
            noRunShift();
            button.classList.remove('active');
            break;
          default:
            button.classList.remove('active');
            break;
        }
      }
    });
  });
}

document.addEventListener('keyup', ctrlAlt, false);
document.addEventListener('keyup', altCtrl, false);

clickMouse();
clickKeyboard();

function setLocalStorageLanguage() {
  localStorage.setItem('.lang-key', langKey.classList);
}
window.addEventListener('beforeunload', setLocalStorageLanguage);

function getLocalStorageLanguage() {
  if (localStorage.getItem('.lang-key')) {
  langKey.classList = localStorage.getItem('.lang-key');

  allKeys.forEach((keyBtn, index) => {
    
      if (langKey.classList.contains('rus')) {
        keyBtn.innerHTML = rows[index].rus.lowerCase;
        keyBtn.classList.add('rus');
      }
    
  });
}
}
window.addEventListener('load', getLocalStorageLanguage);
