const time = () => process.hrtime()[0] * 1000 + process.hrtime()[1] / 1000000;

export class Stopwatch {
    constructor() {
        this.rate = 1.0;
        this.startTime = 0;
        this.offset = 0;
        this.running = false;
    }

    /**
     * Starts, or resumes, measuring elapsed time
     */
    start() {
        if (!this.running) {
            this.startTime = time();
            this.running = true;
        }
    }

    /**
     * Pauses measuring elapsed time
     */
    pause() {
        if (this.running) {
            this.offset = this.elapsed();
            this.running = false;
        }
    }

    /**
     * Resets elapsed time to zero and starts measuring elapsed time
     */
    restart() {
        this.reset();
        this.start();
    }

    /**
     * Stops measuring time and sets elapsed time to zero
     */
    reset() {
        this.running = false;
        this.startTime = 0;
        this.offset = 0;
    }

    /**
     * Sets the elapsed time in milliseconds
     * @param {Number} milliseconds 
     */
    setElapsed(milliseconds) {
        this.startTime = time();
        this.offset = milliseconds;
    }

    /**
     * Sets the elapsed time in seconds
     * @param {Number} milliseconds 
     */
    setElapsedSeconds(seconds) {
        this.setElapsed(seconds * 1000.0);
    }

    /**
     * Sets the rate for measuring time. Default: 1.0
     * @param {Number} rate
     */
    setRate(rate) {
        const elapsed = this.elapsed();
        this.startTime = time();
        this.offset = elapsed;
        this.rate = rate;
    }

    /**
     * @returns {Number} elapsed time in milliseconds
     */
    elapsed() {
        if (this.running) {
            return (time() - this.startTime) * this.rate + this.offset;
        } else {
            return this.offset;
        }
    }

    /**
     * @returns {Number} elapsed time in seconds
     */
    elapsedSeconds() {
        return this.elapsed() / 1000.0;
    }
}
