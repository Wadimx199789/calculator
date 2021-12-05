const prev = document.querySelector('.previos');
const res = document.querySelector('.result');
const buttons = document.querySelector('.main');

const calc = new Calculator(prev, res);

buttons.addEventListener('click', e => {
    const value = e.target.innerText || '';
    switch (value) {
        case 'AC':
            res.innerText="";
        case 'DEL':
            res.innerText=res.innerText.slice(0,-1);
            break;
        
        default:
            calc.append(value);
    }
})