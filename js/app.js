class LanguageChallengeApp {
    constructor() {
        this.course = "course1";
        this.day = 0;
        this.progress = new ProgressManager();

        this.cache();
        this.init();
    }

    cache() {
        this.title = document.getElementById('modalTitle');
        this.list = document.getElementById('dayList');
        this.content = document.getElementById('contentArea');

        this.prev = document.getElementById('prevDayBtn');
        this.next = document.getElementById('nextDayBtn');
        this.complete = document.getElementById('completeDayBtn');
    }

    init() {
        this.title.textContent = courseData[this.course].title;
        this.renderDays();
        this.showDay(0);

        this.prev.onclick = () => this.showDay(this.day - 1);
        this.next.onclick = () => this.showDay(this.day + 1);
        this.complete.onclick = () => {
            this.progress.completeDay(this.course, this.day);
            Utils.showToast("Day completed!");
            this.renderDays();
        };
    }

    renderDays() {
        this.list.innerHTML = "";
        courseData[this.course].days.forEach((d, i) => {
            const li = document.createElement('li');
            li.className = "day-item";
            li.textContent = d.title;
            if (this.progress.isCompleted(this.course, i)) li.innerHTML += " ✓";
            li.onclick = () => this.showDay(i);
            this.list.appendChild(li);
        });
    }

    showDay(index) {
        if (index < 0 || index >= courseData[this.course].days.length) return;
        this.day = index;
        const d = courseData[this.course].days[index];
        this.content.innerHTML = `<h3>${d.title}</h3><pre>${d.content}</pre>`;
        this.renderDays();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    new LanguageChallengeApp();
});
