class StopWatch {
    constructor(root) {
        root.innerHTML = TM4.getHTML();

        this.el = {
            minutes: root.querySelector(".TM-4__part--minutes"),
            seconds: root.querySelector(".TM-4__part--seconds"),
            milliseconds: root.querySelector(".TM-4__part--milliseconds"),
            control: root.querySelector(".TM-4__btn--control"),
            reset: root.querySelector(".TM-4__btn--reset")
        };

        this.interval = null;
        this.remainingMilliseconds = 0;

        this.el.control.addEventListener("click", () => {
            if (this.interval === null) {
                this.start();
            } else {
                this.stop();
            }
        });

        this.el.reset.addEventListener("click", () => {
            this.remainingMilliseconds = 0;
        });
    }

    updateInterfaceTime() {
        const minutes = Math.floor(this.remainingMilliseconds / 1000 / 60);
        const seconds = Math.floor(this.remainingMilliseconds / 1000);
        const milliseconds = this.remainingMilliseconds % 1000;

        this.el.minutes.textContent = minutes.toString().padStart(2, "0");
        this.el.seconds.textContent = seconds.toString().padStart(2, "0");
        this.el.milliseconds.textContent = milliseconds.toString().padStart(3, "0");
    }

    updateInterfaceControls() {
        if (this.interval === null) {
            this.el.control.innerHTML = `<span class="material-icons">play_arrow</span>`;
            this.el.control.classList.add("TM4__btn--start");
            this.el.control.classList.remove("TM4__btn--stop");
        } else {
            this.el.control.innerHTML = `<span class="material-icons">pause</span>`;
            this.el.control.classList.add("TM4__btn--stop");
            this.el.control.classList.remove("TM4__btn--start");
        }
    }

    start() {
        this.interval = setInterval(() => {
            this.remainingMilliseconds += 10;
            this.updateInterfaceTime();
        }, 10);

        console.log(this.remainingMilliseconds);

        this.updateInterfaceControls();
    }

    stop() {
        clearInterval(this.interval);

        this.interval = null;

        this.updateInterfaceControls();
    }

    static getHTML() {
        return `
			<span class="TM-4__part TM-4__part--minutes">00</span>
			<span class="TM-4__part">:</span>
			<span class="TM-4__part TM-4__part--seconds">00</span>
			<span class="TM-4__part">:</span>
			<span class="TM-4__part TM-4__part--milliseconds">00</span>
			<button type="button" class="TM-4__btn TM-4__btn--control TM-4__btn--start">
				<span class="material-icons">play_arrow</span>
			</button>
			<button type="button" class="TM-4__btn TM-4__btn--reset">
				<span class="material-icons">restart_alt</span>
			</button>
		`;
    }
}

new StopWatch(
    document.querySelector(".TM-4")
);