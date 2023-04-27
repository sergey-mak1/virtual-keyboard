const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const textWindow = document.createElement('textarea');
textWindow.classList.add('text-window');
container.appendChild(textWindow);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard);

const row1 = [
    {
        name: 'acute',
        en: {
            lowerCase: '`',
            upperCase: '~',
            capsLock: '`',
            capsShift: '~'
        },
        rus: {
            lowerCase: 'ё',
            upperCase: 'Ё',
            capsLock: 'Ё',
            capsShift: 'ё'
        }
    },
    {
        name: 'key1',
        en: {
            lowerCase: '1',
            upperCase: '!',
            capsLock: '1',
            capsShift: '!'
        },
        rus: {
            lowerCase: '1',
            upperCase: '!',
            capsLock: '1',
            capsShift: '!'
        }
    },
    {
        name: 'key2',
        en: {
            lowerCase: '2',
            upperCase: '@',
            capsLock: '2',
            capsShift: '@'
        },
        rus: {
            lowerCase: '2',
            upperCase: '"',
            capsLock: '2',
            capsShift: '"'
        }
    },
    {
        name: 'key3',
        en: {
            lowerCase: '3',
            upperCase: '#',
            capsLock: '3',
            capsShift: '#'
        },
        rus: {
            lowerCase: '3',
            upperCase: '№',
            capsLock: '3',
            capsShift: '№'
        }
    },
    {
        name: 'key4',
        en: {
            lowerCase: '4',
            upperCase: '$',
            capsLock: '4',
            capsShift: '$'
        },
        rus: {
            lowerCase: '4',
            upperCase: ';',
            capsLock: '4',
            capsShift: ';'
        }
    },
    {
        name: 'key5',
        en: {
            lowerCase: '5',
            upperCase: '%',
            capsLock: '5',
            capsShift: '%'
        },
        rus: {
            lowerCase: '5',
            upperCase: '%',
            capsLock: '5',
            capsShift: '%'
        }
    },
    {
        name: 'key6',
        en: {
            lowerCase: '6',
            upperCase: '^',
            capsLock: '6',
            capsShift: '^'
        },
        rus: {
            lowerCase: '6',
            upperCase: ':',
            capsLock: '6',
            capsShift: ':'
        }
    },
    {
        name: 'key7',
        en: {
            lowerCase: '7',
            upperCase: '&',
            capsLock: '7',
            capsShift: '&'
        },
        rus: {
            lowerCase: '7',
            upperCase: '?',
            capsLock: '7',
            capsShift: '?'
        }
    },
    {
        name: 'key8',
        en: {
            lowerCase: '8',
            upperCase: '&',
            capsLock: '8',
            capsShift: '&'
        },
        rus: {
            lowerCase: '8',
            upperCase: '*',
            capsLock: '8',
            capsShift: '*'
        }
    },
    {
        name: 'key9',
        en: {
            lowerCase: '9',
            upperCase: '(',
            capsLock: '9',
            capsShift: '('
        },
        rus: {
            lowerCase: '9',
            upperCase: '(',
            capsLock: '9',
            capsShift: '('
        }
    },
    {
        name: 'key0',
        en: {
            lowerCase: '0',
            upperCase: ')',
            capsLock: '0',
            capsShift: ')'
        },
        rus: {
            lowerCase: '0',
            upperCase: ')',
            capsLock: '0',
            capsShift: ')'
        }
    },
    {
        name: 'minus',
        en: {
            lowerCase: '-',
            upperCase: '_',
            capsLock: '-',
            capsShift: '_'
        },
        rus: {
            lowerCase: '-',
            upperCase: '_',
            capsLock: '-',
            capsShift: '_'
        }
    },
    {
        name: 'equally',
        en: {
            lowerCase: '=',
            upperCase: '+',
            capsLock: '=',
            capsShift: '+'
        },
        rus: {
            lowerCase: '=',
            upperCase: '+',
            capsLock: '=',
            capsShift: '+'
        }
    },
    {
        name: 'backspace',
        en: {
            lowerCase: 'Backspace',
            upperCase: 'Backspace',
            capsLock: 'Backspace',
            capsShift: 'Backspace'
        },
        rus: {
            lowerCase: 'Backspace',
            upperCase: 'Backspace',
            capsLock: 'Backspace',
            capsShift: 'Backspace'
        }
    }
];

const row2 = [
    {
        name: 'tab',
        en: {
            lowerCase: 'Tab',
            upperCase: 'Tab',
            capsLock: 'Tab',
            capsShift: 'Tab'
        },
        rus: {
            lowerCase: 'Tab',
            upperCase: 'Tab',
            capsLock: 'Tab',
            capsShift: 'Tab'
        }
    },
    {
        name: 'keyQ',
        en: {
            lowerCase: 'q',
            upperCase: 'Q',
            capsLock: 'Q',
            capsShift: 'q'
        },
        rus: {
            lowerCase: 'й',
            upperCase: 'Й',
            capsLock: 'Й',
            capsShift: 'й'
        }
    },
    {
        name: 'keyW',
        en: {
            lowerCase: 'w',
            upperCase: 'W',
            capsLock: 'W',
            capsShift: 'w'
        },
        rus: {
            lowerCase: 'ц',
            upperCase: 'Ц',
            capsLock: 'Ц',
            capsShift: 'ц'
        }
    },
    {
        name: 'keyE',
        en: {
            lowerCase: 'e',
            upperCase: 'E',
            capsLock: 'E',
            capsShift: 'e'
        },
        rus: {
            lowerCase: "у",
            upperCase: 'У',
            capsLock: 'У',
            capsShift: 'у'
        }
    },
    {
        name: 'keyR',
        en: {
            lowerCase: 'r',
            upperCase: 'R',
            capsLock: 'r',
            capsShift: 'R'
        },
        rus: {
            lowerCase: 'к',
            upperCase: 'К',
            capsLock: 'К',
            capsShift: 'к'
        }
    },
    {
        name: 'keyT',
        en: {
            lowerCase: 't',
            upperCase: 'T',
            capsLock: 'T',
            capsShift: 't'
        },
        rus: {
            lowerCase: 'е',
            upperCase: 'Е',
            capsLock: 'Е',
            capsShift: 'е'
        }
    },
    {
        name: 'keyY',
        en: {
            lowerCase: 'y',
            upperCase: 'Y',
            capsLock: 'Y',
            capsShift: 'y'
        },
        rus: {
            lowerCase: 'н',
            upperCase: 'Н',
            capsLock: 'Н',
            capsShift: 'н'
        }
    },
    {
        name: 'keyU',
        en: {
            lowerCase: 'u',
            upperCase: 'U',
            capsLock: 'U',
            capsShift: 'u'
        },
        rus: {
            lowerCase: 'г',
            upperCase: 'Г',
            capsLock: 'Г',
            capsShift: 'г'
        }
    },
    {
        name: 'keyI',
        en: {
            lowerCase: 'i',
            upperCase: 'I',
            capsLock: 'I',
            capsShift: 'i'
        },
        rus: {
            lowerCase: 'ш',
            upperCase: 'Ш',
            capsLock: 'Ш',
            capsShift: 'ш'
        }
    },
    {
        name: 'keyO',
        en: {
            lowerCase: 'o',
            upperCase: 'O',
            capsLock: 'O',
            capsShift: 'o'
        },
        rus: {
            lowerCase: 'щ',
            upperCase: 'Щ',
            capsLock: 'Щ',
            capsShift: 'щ'
        }
    },
    {
        name: 'keyP',
        en: {
            lowerCase: 'p',
            upperCase: 'P',
            capsLock: 'P',
            capsShift: 'P'
        },
        rus: {
            lowerCase: 'з',
            upperCase: 'З',
            capsLock: 'З',
            capsShift: 'з'
        }
    },
    {
        name: 'leftSqwareBracket',
        en: {
            lowerCase: '[',
            upperCase: '{',
            capsLock: '[',
            capsShift: '{'
        },
        rus: {
            lowerCase: 'х',
            upperCase: 'Х',
            capsLock: 'Х',
            capsShift: 'х'
        }
    },
    {
        name: 'rightSqwareBracket',
        en: {
            lowerCase: ']',
            upperCase: '}',
            capsLock: ']',
            capsShift: '}'
        },
        rus: {
            lowerCase: 'ъ',
            upperCase: 'Ъ',
            capsLock: 'Ъ',
            capsShift: 'ъ'
        }
    },
    {
        name: 'backslash',
        en: {
            lowerCase: '&#92;',
            upperCase: '/;',
            capsLock: '&#92;',
            capsShift: '/'
        },
        rus: {
            lowerCase: '&#92;',
            upperCase: '|',
            capsLock: '&#92;',
            capsShift: '|'
        }
    },
    {
        name: 'delete',
        en: {
            lowerCase: 'Del',
            upperCase: 'Del',
            capsLock: 'Del',
            capsShift: 'Del'
        },
        rus: {
            lowerCase: 'Del',
            upperCase: 'Del',
            capsLock: 'Del',
            capsShift: 'Del'
        }
    }
];

const row3 = [
    {
        name: 'capsLock',
        en: {
            lowerCase: 'CapsLock',
            upperCase: 'CapsLock',
            capsLock: 'CapsLock',
            capsShift: 'CapsLock'
        },
        rus: {
            lowerCase: 'CapsLock',
            upperCase: 'CapsLock',
            capsLock: 'CapsLock',
            capsShift: 'CapsLock'
        }
    },
    {
        name: 'keyA',
        en: {
            lowerCase: 'a',
            upperCase: 'A',
            capsLock: 'A',
            capsShift: 'a'
        },
        rus: {
            lowerCase: 'ф',
            upperCase: 'Ф',
            capsLock: 'Ф',
            capsShift: 'ф'
        }
    },
    {
        name: 'keyS',
        en: {
            lowerCase: 's',
            upperCase: 'S',
            capsLock: 'S',
            capsShift: 's'
        },
        rus: {
            lowerCase: 'ы',
            upperCase: 'Ы',
            capsLock: 'Ы',
            capsShift: 'ы'
        }
    },
    {
        name: 'keyD',
        en: {
            lowerCase: 'd',
            upperCase: 'D',
            capsLock: 'D',
            capsShift: 'd'
        },
        rus: {
            lowerCase: "в",
            upperCase: 'В',
            capsLock: 'В',
            capsShift: 'в'
        }
    },
    {
        name: 'keyF',
        en: {
            lowerCase: 'f',
            upperCase: 'F',
            capsLock: 'F',
            capsShift: 'f'
        },
        rus: {
            lowerCase: 'а',
            upperCase: 'А',
            capsLock: 'А',
            capsShift: 'а'
        }
    },
    {
        name: 'keyG',
        en: {
            lowerCase: 'g',
            upperCase: 'G',
            capsLock: 'G',
            capsShift: 'g'
        },
        rus: {
            lowerCase: 'п',
            upperCase: 'П',
            capsLock: 'П',
            capsShift: 'п'
        }
    },
    {
        name: 'keyH',
        en: {
            lowerCase: 'h',
            upperCase: 'H',
            capsLock: 'H',
            capsShift: 'h'
        },
        rus: {
            lowerCase: 'р',
            upperCase: 'Р',
            capsLock: 'Р',
            capsShift: 'р'
        }
    },
    {
        name: 'keyJ',
        en: {
            lowerCase: 'j',
            upperCase: 'J',
            capsLock: 'J',
            capsShift: 'j'
        },
        rus: {
            lowerCase: 'о',
            upperCase: 'О',
            capsLock: 'О',
            capsShift: 'о'
        }
    },
    {
        name: 'keyK',
        en: {
            lowerCase: 'k',
            upperCase: 'K',
            capsLock: 'K',
            capsShift: 'k'
        },
        rus: {
            lowerCase: 'л',
            upperCase: 'Л',
            capsLock: 'Л',
            capsShift: 'л'
        }
    },
    {
        name: 'keyL',
        en: {
            lowerCase: 'l',
            upperCase: 'L',
            capsLock: 'L',
            capsShift: 'l'
        },
        rus: {
            lowerCase: 'д',
            upperCase: 'Д',
            capsLock: 'Д',
            capsShift: 'д'
        }
    },
    {
        name: 'semicolon',
        en: {
            lowerCase: ';',
            upperCase: ':',
            capsLock: ';',
            capsShift: ':'
        },
        rus: {
            lowerCase: 'ж',
            upperCase: 'Ж',
            capsLock: 'Ж',
            capsShift: 'ж'
        }
    },
    {
        name: 'apostrophe',
        en: {
            lowerCase: '&#8242;',
            upperCase: '"',
            capsLock: '&#8242;',
            capsShift: '"'
        },
        rus: {
            lowerCase: 'э',
            upperCase: 'Э',
            capsLock: 'Э',
            capsShift: 'э'
        }
    },
    {
        name: 'enter',
        en: {
            lowerCase: 'Enter',
            upperCase: 'Enter',
            capsLock: 'Enter',
            capsShift: 'Enter'
        },
        rus: {
            lowerCase: 'Enter',
            upperCase: 'Enter',
            capsLock: 'Enter',
            capsShift: 'Enter'
        }
    }]
    const row4 = [
        {
            name: 'leftShift',
            en: {
                lowerCase: 'Shift',
                upperCase: 'Shift',
                capsLock: 'Shift',
                capsShift: 'Shift'
            },
            rus: {
                lowerCase: 'Shift',
                upperCase: 'Shift',
                capsLock: 'Shift',
                capsShift: 'Shift'
            }
        },
        {
            name: 'keyZ',
            en: {
                lowerCase: 'z',
                upperCase: 'Z',
                capsLock: 'Z',
                capsShift: 'z'
            },
            rus: {
                lowerCase: 'я',
                upperCase: 'Я',
                capsLock: 'Я',
                capsShift: 'я'
            }
        },
        {
            name: 'keyX',
            en: {
                lowerCase: 'x',
                upperCase: 'X',
                capsLock: 'X',
                capsShift: 'x'
            },
            rus: {
                lowerCase: 'ч',
                upperCase: 'Ч',
                capsLock: 'Ч',
                capsShift: 'ч'
            }
        },
        {
            name: 'keyC',
            en: {
                lowerCase: 'c',
                upperCase: 'C',
                capsLock: 'C',
                capsShift: 'c'
            },
            rus: {
                lowerCase: "с",
                upperCase: 'С',
                capsLock: 'С',
                capsShift: 'с'
            }
        },
        {
            name: 'keyV',
            en: {
                lowerCase: 'v',
                upperCase: 'V',
                capsLock: 'V',
                capsShift: 'v'
            },
            rus: {
                lowerCase: 'м',
                upperCase: 'М',
                capsLock: 'М',
                capsShift: 'м'
            }
        },
        {
            name: 'keyB',
            en: {
                lowerCase: 'b',
                upperCase: 'B',
                capsLock: 'B',
                capsShift: 'b'
            },
            rus: {
                lowerCase: 'и',
                upperCase: 'И',
                capsLock: 'И',
                capsShift: 'и'
            }
        },
        {
            name: 'keyN',
            en: {
                lowerCase: 'n',
                upperCase: 'N',
                capsLock: 'N',
                capsShift: 'n'
            },
            rus: {
                lowerCase: 'т',
                upperCase: 'Т',
                capsLock: 'Т',
                capsShift: 'т'
            }
        },
        {
            name: 'keyM',
            en: {
                lowerCase: 'm',
                upperCase: 'M',
                capsLock: 'M',
                capsShift: 'm'
            },
            rus: {
                lowerCase: 'ь',
                upperCase: 'Ь',
                capsLock: 'Ь',
                capsShift: 'ь'
            }
        },
        {
            name: 'comma',
            en: {
                lowerCase: ',',
                upperCase: '<',
                capsLock: ',',
                capsShift: '<'
            },
            rus: {
                lowerCase: 'б',
                upperCase: 'Б',
                capsLock: 'Б',
                capsShift: 'б'
            }
        },
        {
            name: 'dot',
            en: {
                lowerCase: '.',
                upperCase: '>',
                capsLock: '.',
                capsShift: '>'
            },
            rus: {
                lowerCase: 'ю',
                upperCase: 'Ю',
                capsLock: 'Ю',
                capsShift: 'ю'
            }
        },
        {
            name: 'slash',
            en: {
                lowerCase: '/',
                upperCase: '?',
                capsLock: '/',
                capsShift: '?'
            },
            rus: {
                lowerCase: '.',
                upperCase: ',',
                capsLock: '.',
                capsShift: ','
            }
        },
        {
            name: 'keyUp',
            en: {
                lowerCase: '&#9650;',
                upperCase: '&#9650;',
                capsLock: '&#9650;',
                capsShift: '&#9650;'
            },
            rus: {
                lowerCase: '&#9650;',
                upperCase: '&#9650;',
                capsLock: '&#9650;',
                capsShift: '&#9650;'
            }
        },
        {
            name: 'rightShift',
            en: {
                lowerCase: 'Shift',
                upperCase: 'Shift',
                capsLock: 'Shift',
                capsShift: 'Shift'
            },
            rus: {
                lowerCase: 'Shift',
                upperCase: 'Shift',
                capsLock: 'Shift',
                capsShift: 'Shift'
            }
        }
    ]
    const row5 = [
        {
            name: 'leftCtrl',
            en: {
                lowerCase: 'Ctrl',
                upperCase: 'Ctrl',
                capsLock: 'Ctrl',
                capsShift: 'Ctrl'
            },
            rus: {
                lowerCase: 'Ctrl',
                upperCase: 'Ctrl',
                capsLock: 'Ctrl',
                capsShift: 'Ctrl'
            }
        },
        {
            name: 'language',
            en: {
                lowerCase: '&#127760; EN',
                upperCase: '&#127760; EN',
                capsLock: '&#127760; EN',
                capsShift: '&#127760; EN'
            },
            rus: {
                lowerCase: '&#127760; EN',
                upperCase: '&#127760; EN',
                capsLock: '&#127760; EN',
                capsShift: '&#127760; EN'
            }
        },
        {
            name: 'leftAlt',
            en: {
                lowerCase: 'Alt',
                upperCase: 'Alt',
                capsLock: 'Alt',
                capsShift: 'Alt'
            },
            rus: {
                lowerCase: 'Alt',
                upperCase: 'Alt',
                capsLock: 'Alt',
                capsShift: 'Alt'
            }
        },
        {
            name: 'space',
            en: {
                lowerCase: ' ',
                upperCase: ' ',
                capsLock: ' ',
                capsShift: ' '
            },
            rus: {
                lowerCase: " ",
                upperCase: ' ',
                capsLock: ' ',
                capsShift: ' '
            }
        },
        {
            name: 'rightAlt',
            en: {
                lowerCase: 'Alt',
                upperCase: 'Alt',
                capsLock: 'Alt',
                capsShift: 'Alt'
            },
            rus: {
                lowerCase: 'Alt',
                upperCase: 'Alt',
                capsLock: 'Alt',
                capsShift: 'Alt'
            }
        },
        {
            name: 'keyLeft',
            en: {
                lowerCase: '&#9664;',
                upperCase: '&#9664;',
                capsLock: '&#9664;',
                capsShift: '&#9664;'
            },
            rus: {
                lowerCase: '&#9664;',
                upperCase: '&#9664;',
                capsLock: '&#9664;',
                capsShift: '&#9664;'
            }
        },
        {
            name: 'keyDown',
            en: {
                lowerCase: '&#9660;',
                upperCase: '&#9660;',
                capsLock: '&#9660;',
                capsShift: '&#9660;'
            },
            rus: {
                lowerCase: '&#9660;',
                upperCase: '&#9660;',
                capsLock: '&#9660;',
                capsShift: '&#9660;'
            }
        },
        {
            name: 'keyRight',
            en: {
                lowerCase: '&#9654',
                upperCase: '&#9654',
                capsLock: '&#9654',
                capsShift: '&#9654'
            },
            rus: {
                lowerCase: '&#9654',
                upperCase: '&#9654',
                capsLock: '&#9654',
                capsShift: '&#9654'
            }
        },
        {
            name: 'rightCtrl',
            en: {
                lowerCase: 'Ctrl',
                upperCase: 'Ctrl',
                capsLock: 'Ctrl',
                capsShift: 'Ctrl'
            },
            rus: {
                lowerCase: 'Ctrl',
                upperCase: 'Ctrl',
                capsLock: 'Ctrl',
                capsShift: 'Ctrl'
            }
        }
    ]




function createRow(numRow) {
    const row = document.createElement('div');
    row.classList.add('row');
    numRow.forEach((el) => {
        const keyBtn = document.createElement('button');
        keyBtn.classList.add('key-button');
        switch (el.name) {
            case 'acute':
                keyBtn.classList.add('key-acute');
                break;
            case 'backspace':
                keyBtn.classList.add('key-backspace');
                break;
            case 'capsLock':
            case 'leftShift':
            case 'rightShift':
            case 'enter':
                keyBtn.classList.add('key-caps-shift-enter');
                break;

            case 'space':
                keyBtn.classList.add('key-space');
                break;
            case 'tab':
            case 'delete':
            case 'leftCtrl':
            case 'rightCtrl':
            case 'language':
            case 'leftAlt':
            case 'rightAlt':
            case 'up':
            case 'down':
            case 'left':
            case 'right':
                keyBtn.classList.add('keys-additional');
                break;
            // no default
        }
        keyBtn.setAttribute('type', 'button');
       keyBtn.innerHTML = el.en.lowerCase
        row.appendChild(keyBtn);
    });
    keyboard.appendChild(row);
}
createRow(row1);
createRow(row2);
createRow(row3);
createRow(row4);
createRow(row5);

let ooo = document.querySelector('.keyboard')
ooo.addEventListener('click', function (event) {
    if(event.target.classList.contains('key-button')) {
        textWindow.innerHTML+=event.target.innerHTML
    }
    else{
        return
    }
    
})