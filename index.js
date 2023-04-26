const container = document.createElement('div');
container.classList.add('container');
document.body.appendChild(container);
const textWindow = document.createElement('textarea');
textWindow.classList.add('text-window');
container.appendChild(textWindow);

const keyboard = document.createElement('div');
keyboard.classList.add('keyboard');
container.appendChild(keyboard)

const row1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace']
const row2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '|', 'Del']
const row3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter']
const row4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'up', 'Shift']
const row5 = ['Ctrl', 'Win', 'Alt', 'Space', 'Alt', 'left', 'down', 'right', 'Ctrl']

function createRow(numRow) {
    const row = document.createElement('div');
    row.classList.add('row')
    numRow.forEach(el => {
        let keyBtn = document.createElement('button');
        keyBtn.classList.add('key-button')
        switch (el) {
            case '`':
                keyBtn.classList.add('key-acute')
                break;
            case 'Backspace':
                keyBtn.classList.add('key-backspace')
                break;
            case 'CapsLock':
            case 'Shift':
            case 'Enter':
                keyBtn.classList.add('key-caps-shift-enter')
                break;

            case 'Space':
                keyBtn.classList.add('key-space')
                break;
            case 'Tab':
            case 'Del':
            case 'Ctrl':
            case 'Win':
            case 'Alt':
            case 'up':
            case 'down':
            case 'left':
            case 'right':
                keyBtn.classList.add('keys-additional')
        }
        keyBtn.setAttribute('type', 'button')
        let enValue = document.createElement('span')
        enValue.classList.add('en')
        let enLowerCaseValue = document.createElement('span')
        enLowerCaseValue.classList.add('capslock-off')
        enLowerCaseValue.innerHTML = el;
        let enUpperCaseValue = document.createElement('span')
        enUpperCaseValue.classList.add('capslock-on')
        enUpperCaseValue.classList.add('hidden')
        let enShiftValue = document.createElement('span')
        enShiftValue.classList.add('shift-on')
        enShiftValue.classList.add('hidden')
        let enCapsShiftValue = document.createElement('span')
        enCapsShiftValue.classList.add('caps-shift-on')
        enCapsShiftValue.classList.add('hidden')
        enValue.appendChild(enLowerCaseValue)
        enValue.appendChild(enUpperCaseValue)
        enValue.appendChild(enShiftValue)
        enValue.appendChild(enCapsShiftValue)
        keyBtn.appendChild(enValue)

        let rusValue = document.createElement('span')
        rusValue.classList.add('rus')
        rusValue.classList.add('hidden')
        let lowerCaseValue = document.createElement('span')
        lowerCaseValue.classList.add('capslock-off')
        lowerCaseValue.innerHTML = el;
        let upperCaseValue = document.createElement('span')
        upperCaseValue.classList.add('capslock-on')
        upperCaseValue.classList.add('hidden')
        let shiftValue = document.createElement('span')
        shiftValue.classList.add('shift-on')
        shiftValue.classList.add('hidden')
        let capsShiftValue = document.createElement('span')
        capsShiftValue.classList.add('caps-shift-on')
        capsShiftValue.classList.add('hidden')
        rusValue.appendChild(lowerCaseValue)
        rusValue.appendChild(upperCaseValue)
        rusValue.appendChild(shiftValue)
        rusValue.appendChild(capsShiftValue)
        keyBtn.appendChild(rusValue)
        row.appendChild(keyBtn)
    });
    keyboard.appendChild(row)
}
createRow(row1)
createRow(row2)
createRow(row3)
createRow(row4)
createRow(row5)