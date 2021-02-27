//Creating a class Timer for a specialized timer
class Timer {
    constructor(title, delay, stopCount) {
        this.title = title;
        this.delay = delay;
        this.stopCount = stopCount;
    }
    // starts the timer
    start() {
        console.log(`Timer ${this.title} started (delay=${this.delay}, stopCount=${this.stopCount}`);
        this.stopCount--;
    }
    // prints a 'tick' to a console each time the timer does a cycle
    tick() {
        console.log(`Timer ${this.title} Tick! | cycles left ${this.stopCount}`);
        this.stopCount--;
    }
    // stops the timer
    stop(intervalId) {
        clearInterval(intervalId);
        console.log(`Timer ${this.title} stopped`);
    }
}

// function runTimer initialize and start an object timer.
function runTimer(id, delay, counter) {
    let newTimer = new Timer(id, delay, counter);

    newTimer.start();
    let intervalId = setInterval( () => {
        newTimer.tick();
        if (newTimer.stopCount === -1) {
            newTimer.stop(intervalId);
        }
    }, newTimer.delay);
}