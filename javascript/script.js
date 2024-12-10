const morseList = {
    'a' : '.-', 'b' : '-...', 'c' : '-.-.', 'd' : '—··', 'e' : '.', 'f' : '..-.', 'g' : '--.', 'h' : '....', 'i' : '..', 'j' : '.---', 'k' : '-.-', 'l' : '.-..', 'm' : '--', 'n' : '-.', 'o' : '---', 'p' : '.--.', 'q' : '--.-', 'r' : '.-.', 's' : '...', 't' : '-', 'u' : '..-', 'v' : '...-', 'w' : '.--', 'x' : '-..-', 'y' : '-.--', 'z' : '--.', ' ' : '/'
}
function textMorse(text) {
    return text.toLowerCase().split('').map(char => morseList[char] || '').join(' ');
}
document.getElementById('convert_button').addEventListener('click', () => {
    const input_text = document.getElementById('input_text').value;
    const morse_conversion = textMorse(input_text);
    document.getElementById('morse_conversion').innerText = morse_conversion;
});

const reverseMorseList = {
    '.-': 'a', '-...': 'b', '-.-.': 'c', '-..': 'd', '.': 'e',
    '..-.': 'f', '--.': 'g', '....': 'h', '..': 'i', '.---': 'j',
    '-.-': 'k', '.-..': 'l', '--': 'm', '-.': 'n', '---': 'o',
    '.--.': 'p', '--.-': 'q', '.-.': 'r', '...': 's', '-': 't',
    '..-': 'u', '...-': 'v', '.--': 'w', '-..-': 'x', '-.--': 'y',
    '--..': 'z', '-----': '0', '.----': '1', '..---': '2', '...--': '3',
    '....-': '4', '.....': '5', '-....': '6', '--...': '7', '---..': '8',
    '----.': '9', '/': ' ' 
};

function morseText(morse) {
    return morse.toLowerCase().split('').map(char => reverseMorseList[char] || '').join(' ');
}
document.getElementById('convertText_button').addEventListener('click', () => {
    const input_morse = document.getElementById('input_morse').value;
    const text_conversion = morseText(input_morse);
    document.getElementById('text_conversion').innerText = text_conversion;
});
