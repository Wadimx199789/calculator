class Calculator {
    constructor(prev, res) {
        this.prev = prev;
        this.res = res;
    }
    clear() {
        this.res.innerText = "";
        this.prev.innerText = ""
    }
    delete() {
        this.res.innerText = this.res.innerText.slice(0, -1);
    }
    append(value) {
        if (+value >= 0 || +value <= 9) {
            this.res.innerText += value;
        }
        else if (value === ".") {
            if (this.res.innerText.includes('.')) return;
            if (this.res.innerText === "") {
                this.res.innerText = "0.";
            }
            else {
                this.res.innerText += value;
            }
        }
        if (['*', '/', '+', '-'].includes(value)) {
            if (this.res.innerText === "") return;
            if (this.prev.innerText === "") {
                this.prev.innerText += `${this.res.innerText} ${value}`;
                this.res.innerText = "";
            }
            else {
                const [prev, operand] = this.prev.innerText.split(' ');
                this.prev.innerText = this.calculate(prev, operand, this.res.innerText) + " " + value;
                this.res.innerText = "";

            }

        }



    }
    calculate(prev, operand, current) {
        let r;
        let p = Number(prev);
        let c = Number(current);
        switch (operand) {
            case "+":
                r = p + c;
                break;
            case "-":
                r = p - c
                break;
            case "*":
                r = p* c;
                break;
            case "/":
                r = p / c
                break;
            default:
                break;
        }
        return r;
    }
    getResult(){
        if(this.prev.innerText==="") return;
        const [prev, operand] = this.prev.innerText.split(' ');
        this.res.innerText = this.calculate(prev, operand, this.res.innerText);
        this.prev.innerText="";
    }

}