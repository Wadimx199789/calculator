class Calculator {
    constructor(prev, res) {
        this.prev = prev;
        this.res = res;
    }
    clear() {
        this.res.innerText = "";
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
                this.res.innerText ="0.";
            }
            else {
                this.res.innerText += value;
            }
        }


    }
}