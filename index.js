const enDown = [['`', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['backspace', 'Backspace'],
  ['tab', 'Tab'], ['q', 'KeyQ'], ['w', 'KeyW'], ['e', 'KeyE'], ['r', 'KeyR'], ['t', 'KeyT'], ['y', 'KeyY'], ['u', 'KeyU'], ['i', 'KeyI'], ['o', 'KeyO'], ['p', 'KeyP'], ['[', 'BracketLeft'], [']', 'BracketRight'], ['del', 'Delete'],
  ['capsLock', 'CapsLock'], ['a', 'KeyA'], ['s', 'KeyS'], ['d', 'KeyD'], ['f', 'KeyF'], ['g', 'KeyG'], ['h', 'KeyH'], ['j', 'KeyJ'], ['k', 'KeyK'], ['l', 'KeyL'], [';', 'Semicolon'], ['\'', 'Quote'], ['enter', 'Enter'],
  ['shift', 'ShiftLeft'], ['z', 'KeyZ'], ['x', 'KeyX'], ['c', 'KeyC'], ['v', 'KeyV'], ['b', 'KeyB'], ['n', 'KeyN'], ['m', 'KeyM'], [',', 'Comma'], ['.', 'Period'], ['/', 'Slash'], ['▲', 'ArrowUp'], ['shift', 'ShiftRight'],
  ['ctrl', 'ControlLeft'], ['win', 'MetaLeft'], ['alt', 'AltLeft'], [' ', 'Space'], ['alt', 'AltRight'], ['◄', 'ArrowLeft'], ['▼', 'ArrowDown'], ['►', 'ArrowRight'], ['ctrl', 'ControlRight']];

const enUp = [['~', 'Backquote'], ['!', 'Digit1'], ['@', 'Digit2'], ['#', 'Digit3'], ['$', 'Digit4'], ['%', 'Digit5'], ['^', 'Digit6'], ['&', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], ['backspace', 'Backspace'],
  ['tab', 'Tab'], ['Q', 'KeyQ'], ['W', 'KeyW'], ['E', 'KeyE'], ['R', 'KeyR'], ['T', 'KeyT'], ['Y', 'KeyY'], ['U', 'KeyU'], ['I', 'KeyI'], ['O', 'KeyO'], ['P', 'KeyP'], ['{', 'BracketLeft'], ['}', 'BracketRight'], ['del', 'Delete'],
  ['capsLock', 'CapsLock'], ['A', 'KeyA'], ['S', 'KeyS'], ['D', 'KeyD'], ['F', 'KeyF'], ['G', 'KeyG'], ['H', 'KeyH'], ['J', 'KeyJ'], ['K', 'KeyK'], ['L', 'KeyL'], [':', 'Semicolon'], ['"', 'Quote'], ['enter', 'Enter'],
  ['shift', 'ShiftLeft'], ['Z', 'KeyZ'], ['X', 'KeyX'], ['C', 'KeyC'], ['V', 'KeyV'], ['B', 'KeyB'], ['N', 'KeyN'], ['M', 'KeyM'], ['<', 'Comma'], ['>', 'Period'], ['?', 'Slash'], ['▲', 'ArrowUp'], ['shift', 'ShiftRight'],
  ['ctrl', 'ControlLeft'], ['win', 'MetaLeft'], ['alt', 'AltLeft'], [' ', 'Space'], ['alt', 'AltRight'], ['◄', 'ArrowLeft'], ['▼', 'ArrowDown'], ['►', 'ArrowRight'], ['ctrl', 'ControlRight']];

const ruDown = [['ё', 'Backquote'], ['1', 'Digit1'], ['2', 'Digit2'], ['3', 'Digit3'], ['4', 'Digit4'], ['5', 'Digit5'], ['6', 'Digit6'], ['7', 'Digit7'], ['8', 'Digit8'], ['9', 'Digit9'], ['0', 'Digit0'], ['-', 'Minus'], ['=', 'Equal'], ['backspace', 'Backspace'],
  ['tab', 'Tab'], ['й', 'KeyQ'], ['ц', 'KeyW'], ['у', 'KeyE'], ['к', 'KeyR'], ['е', 'KeyT'], ['н', 'KeyY'], ['г', 'KeyU'], ['ш', 'KeyI'], ['щ', 'KeyO'], ['з', 'KeyP'], ['х', 'BracketLeft'], ['ъ', 'BracketRight'], ['del', 'Delete'],
  ['capsLock', 'CapsLock'], ['ф', 'KeyA'], ['ы', 'KeyS'], ['в', 'KeyD'], ['а', 'KeyF'], ['п', 'KeyG'], ['р', 'KeyH'], ['о', 'KeyJ'], ['л', 'KeyK'], ['д', 'KeyL'], ['ж', 'Semicolon'], ['э', 'Quote'], ['enter', 'Enter'],
  ['shift', 'ShiftLeft'], ['я', 'KeyZ'], ['ч', 'KeyX'], ['с', 'KeyC'], ['м', 'KeyV'], ['и', 'KeyB'], ['т', 'KeyN'], ['ь', 'KeyM'], ['б', 'Comma'], ['ю', 'Period'], ['.', 'Slash'], ['▲', 'ArrowUp'], ['shift', 'ShiftRight'],
  ['ctrl', 'ControlLeft'], ['win', 'MetaLeft'], ['alt', 'AltLeft'], [' ', 'Space'], ['alt', 'AltRight'], ['◄', 'ArrowLeft'], ['▼', 'ArrowDown'], ['►', 'ArrowRight'], ['ctrl', 'ControlRight']];

const ruUp = [['Ё', 'Backquote'], ['!', 'Digit1'], ['"', 'Digit2'], ['№', 'Digit3'], [';', 'Digit4'], ['%', 'Digit5'], [':', 'Digit6'], ['?', 'Digit7'], ['*', 'Digit8'], ['(', 'Digit9'], [')', 'Digit0'], ['_', 'Minus'], ['+', 'Equal'], ['backspace', 'Backspace'],
  ['tab', 'Tab'], ['Й', 'KeyQ'], ['Ц', 'KeyW'], ['У', 'KeyE'], ['К', 'KeyR'], ['Е', 'KeyT'], ['Н', 'KeyY'], ['Г', 'KeyU'], ['Ш', 'KeyI'], ['Щ', 'KeyO'], ['З', 'KeyP'], ['Х', 'BracketLeft'], ['Ъ', 'BracketRight'], ['del', 'Delete'],
  ['capsLock', 'CapsLock'], ['Ф', 'KeyA'], ['Ы', 'KeyS'], ['В', 'KeyD'], ['А', 'KeyF'], ['П', 'KeyG'], ['Р', 'KeyH'], ['О', 'KeyJ'], ['Л', 'KeyK'], ['Д', 'KeyL'], ['Ж', 'Semicolon'], ['Э', 'Quote'], ['enter', 'Enter'],
  ['shift', 'ShiftLeft'], ['Я', 'KeyZ'], ['Ч', 'KeyX'], ['С', 'KeyC'], ['М', 'KeyV'], ['И', 'KeyB'], ['Т', 'KeyN'], ['Ь', 'KeyM'], ['Б', 'Comma'], ['Ю', 'Period'], [',', 'Slash'], ['▲', 'ArrowUp'], ['shift', 'ShiftRight'],
  ['ctrl', 'ControlLeft'], ['win', 'MetaLeft'], ['alt', 'AltLeft'], [' ', 'Space'], ['alt', 'AltRight'], ['◄', 'ArrowLeft'], ['▼', 'ArrowDown'], ['►', 'ArrowRight'], ['ctrl', 'ControlRight']];

function initKeyboard(keys) {
  const divs = document.querySelectorAll('.key');
  for (let i = 0; i < divs.length; i += 1) {
    divs[i].innerHTML = `<span id="${keys[i][1]}">${keys[i][0]}</span>`;
  }
}

function start() {
  const container = document.createElement('div');
  container.className = 'container';
  document.body.append(container);

  const textArea = document.createElement('textarea');
  textArea.className = 'textArea';
  container.append(textArea);

  const keyboard = document.createElement('div');
  keyboard.className = 'keyboard';
  container.append(keyboard);

  let string = '';
  for (let i = 0; i < ruUp.length; i += 1) {
    if (ruUp[i][0] === ' ') {
      string += '<div class="key space"></div>';
    } else if (ruUp[i][0].length >= 3) {
      string += `<div class="key ${ruUp[i][0].toLowerCase()}"></div>`;
    } else {
      string += '<div class="key"></div>';
    }
  }
  keyboard.innerHTML = string;

  switch (localStorage.lang) {
    case 'ruUp': initKeyboard(ruUp); break;
    case 'ruDown': initKeyboard(ruDown); break;
    case 'enUp': initKeyboard(enUp); break;
    case 'enDown': initKeyboard(enDown); break;
    default: localStorage.lang = 'ruUp'; break;
  }
}

start();
