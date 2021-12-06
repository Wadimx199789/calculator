const prev = document.querySelector('.previos');
const res = document.querySelector('.result');
const buttons = document.querySelector('.main');

const calc = new Calculator(prev, res);

buttons.addEventListener('click', e => {
    const value = e.target.innerText || '';
    switch (value) {
        case 'AC':
            calc.clear();
            break;
        case 'DEL':
            calc.delete();
            break;
        case "=":
            calc.getResult();
            break;
        default:
            calc.append(value);
    }
})