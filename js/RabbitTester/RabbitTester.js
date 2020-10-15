class RabbitTester {
    constructor() {
        this.title = '';
        this.count = 0;
        this.failed = [];
    }

    description(newTitle) {
        this.title = newTitle;
    }

    addTest(calculated, expected) {
        this.count++;
        if (calculated !== expected) {
            this.failed.push({
                index: this.count,
                calculated,
                expected
            });
        }
    }

    /*
        Is valid service - valid: 5/6; failed: 1/6          (bold)
        Failed test: 4                                      (raudonas)
            expected: false;                                (raudonas)
            calculated: true                                       (raudonas)
    */
    run() {
        if (this.failed.length === 0) {
            console.log(`%c${this.title} - valid: ${this.count}/${this.count}.`, 'color: green; font-weight: bold;');
        } else {
            console.log(`%c${this.title} - valid: ${this.count - this.failed.length}/${this.count}; failed: ${this.failed.length}/${this.count}.`, 'font-weight: bold;');

            for (let i = 0; i < this.failed.length; i++) {
                const fail = this.failed[i];
                console.log(`%cFailed test: ${fail.index}`, 'color: red;');
                console.log(`%c\texpected: ${fail.expected}`, 'color: red;');
                console.log(`%c\tcalculated: ${fail.calculated}`, 'color: red;');
            }
        }
    }
}

export { RabbitTester }