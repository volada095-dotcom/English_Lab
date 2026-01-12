class ProgressManager {
    constructor() {
        this.progress = JSON.parse(localStorage.getItem('progress')) || {};
    }

    save() {
        localStorage.setItem('progress', JSON.stringify(this.progress));
    }

    completeDay(course, day) {
        this.progress[`${course}_${day}`] = true;
        this.save();
    }

    isCompleted(course, day) {
        return !!this.progress[`${course}_${day}`];
    }
}
