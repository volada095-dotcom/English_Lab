<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>30-Day Language Challenge</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }

        .container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .header {
            text-align: center;
            color: white;
            margin-bottom: 40px;
            padding: 20px;
        }

        .header h1 {
            font-size: 3rem;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: white;
            z-index: 1000;
            overflow-y: auto;
        }

        .modal-content {
            background: white;
            margin: 0;
            border-radius: 0;
            width: 100%;
            height: 100vh;
            position: relative;
            box-shadow: none;
            display: flex;
            flex-direction: column;
        }

        .modal-header {
            background: linear-gradient(135deg, #667eea, #764ba2);
            color: white;
            padding: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-shrink: 0;
        }

        .modal-header h2 {
            font-size: 1.8rem;
        }

        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 2rem;
            cursor: pointer;
            padding: 0;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        .modal-body {
            padding: 0;
            display: flex;
            flex: 1;
            min-height: 0;
            overflow: hidden;
        }

        .sidebar {
            width: 300px;
            background: #f8f9fa;
            border-right: 1px solid #e9ecef;
            padding: 20px;
            overflow-y: auto;
            flex-shrink: 0;
        }

        .content-area {
            flex: 1;
            padding: 30px;
            overflow-y: auto;
            max-height: none;
        }

        .progress-text {
            text-align: center;
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            margin: 10px 0;
            background: white;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
        }

        .day-list {
            list-style: none;
            max-height: calc(100vh - 200px);
            overflow-y: auto;
        }

        .day-item {
            padding: 15px;
            margin: 8px 0;
            background: white;
            border-radius: 10px;
            cursor: pointer;
            border: 2px solid transparent;
            transition: all 0.3s ease;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .day-item:hover {
            border-color: #667eea;
            background: #f0f4ff;
        }

        .day-item.active {
            background: #667eea;
            color: white;
        }

        .day-status {
            color: #4CAF50;
            font-weight: bold;
        }

        .exercises-container {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 15px;
            margin-top: 30px;
        }

        .exercise-btn {
            padding: 15px;
            background: #f8f9fa;
            border: 2px solid #e9ecef;
            border-radius: 10px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
            text-align: left;
            height: 100%;
        }

        .exercise-btn:hover {
            background: #667eea;
            color: white;
            border-color: #667eea;
        }

        .exercise-btn.completed {
            background: #4CAF50;
            color: white;
            border-color: #45a049;
        }

        .question-container {
            background: white;
            border-radius: 10px;
            padding: 20px;
            margin: 15px 0;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .question-text {
            font-size: 1.2rem;
            margin-bottom: 15px;
            color: #333;
        }

        .answer-input-container {
            position: relative;
            margin-bottom: 10px;
        }

        .answer-input {
            width: 100%;
            padding: 12px;
            border: 2px solid #e9ecef;
            border-radius: 8px;
            font-size: 1rem;
            margin-bottom: 10px;
        }

        .answer-input:focus {
            outline: none;
            border-color: #667eea;
        }

        .answer-status {
            position: absolute;
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
            font-size: 1.2rem;
            display: none;
        }

        .answer-status.correct {
            color: #4CAF50;
            display: block;
        }

        .answer-status.incorrect {
            color: #f44336;
            display: block;
        }

        .correct-answer {
            margin-top: 10px;
            padding: 10px;
            background: #f8f9fa;
            border-radius: 6px;
            border-left: 4px solid #4CAF50;
            display: none;
        }

        .button-group {
            display: flex;
            gap: 10px;
            margin-top: 10px;
        }

        .check-btn, .show-answer-btn {
            padding: 8px 16px;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 0.9rem;
            transition: all 0.3s ease;
        }

        .check-btn {
            background: #667eea;
            color: white;
        }

        .show-answer-btn {
            background: #6c757d;
            color: white;
        }

        .navigation {
            display: flex;
            justify-content: space-between;
            margin-top: auto;
            padding: 20px;
            background: #f8f9fa;
            border-top: 1px solid #e9ecef;
            flex-shrink: 0;
        }

        .nav-btn {
            padding: 10px 20px;
            background: #667eea;
            color: white;
            border: none;
            border-radius: 6px;
            cursor: pointer;
            font-size: 1rem;
            transition: all 0.3s ease;
        }

        .nav-btn:hover {
            background: #5a67d8;
        }

        .content-text {
            white-space: pre-line;
            line-height: 1.6;
            margin-bottom: 30px;
            background: #f8f9fa;
            padding: 20px;
            border-radius: 10px;
            max-height: none;
        }

        .video-container {
            margin: 20px 0;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 8px 25px rgba(0,0,0,0.15);
            background: white;
            border: none;
        }

        .video-container iframe {
            width: 100%;
            height: 400px;
            border: none;
            display: block;
        }

        .toast {
            position: fixed;
            bottom: 20px;
            right: 20px;
            padding: 15px 25px;
            background: #4CAF50;
            color: white;
            border-radius: 5px;
            box-shadow: 0 3px 10px rgba(0,0,0,0.2);
            z-index: 1001;
            transform: translateY(100px);
            opacity: 0;
            transition: all 0.3s ease;
        }

        .toast.show {
            transform: translateY(0);
            opacity: 1;
        }

        @media (max-width: 768px) {
            .modal-body {
                flex-direction: column;
            }
            
            .sidebar {
                width: 100%;
                max-height: 300px;
                border-right: none;
                border-bottom: 1px solid #e9ecef;
            }
            
            .header h1 {
                font-size: 2rem;
            }
            
            .content-area {
                padding: 20px;
            }
            
            .exercises-container {
                grid-template-columns: 1fr;
            }
            
            .video-container iframe {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>30-DAY LANGUAGE CHALLENGE</h1>
            <p>Master Advanced Phrasal Verbs</p>
        </div>
    </div>

    <!-- Course Modal -->
    <div id="courseModal" class="modal" style="display: block;">
        <div class="modal-content">
            <div class="modal-header">
                <h2 id="modalTitle">30-Day Advanced Phrasal Verbs Challenge</h2>
                <button class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="sidebar">
                    <div class="progress-text" id="courseProgress">0% COMPLETE</div>
                    <ul class="day-list" id="dayList">
                        <!-- Days will be populated by JavaScript -->
                    </ul>
                </div>
                <div class="content-area" id="contentArea">
                    <!-- Content will be populated by JavaScript -->
                </div>
            </div>
            <div class="navigation">
                <button class="nav-btn" id="prevDayBtn">Previous Day</button>
                <button class="nav-btn" id="completeDayBtn">Complete Day</button>
                <button class="nav-btn" id="nextDayBtn">Next Day</button>
            </div>
        </div>
    </div>

    <!-- Toast notification -->
    <div id="toast" class="toast"></div>

    <script>
        // Only 2 days of course data
        const courseData = {
            "course1": {
                "title": "30-Day Advanced Phrasal Verbs Challenge",
                "days": [
                    {
                        "title": "Day 1 - Basic Phrasal Verbs",
                        "content": "Advanced phrasal verbs challenge 2 day 1 explanation\n\n1. amp up (type 2 / transitive and separable)\n(make louder or stronger)\nThe band like to amp the volume up near the end of the show.\nIf we amp the sound up a little, the people in the back can hear too.\n\n2. zone out (type 1 / intransitive)\n(stop paying attention)\nIf the lesson is boring, the students always zone out.\nI often zone out during long meetings.\n\n3. wipe out (type 2 / transitive and separable)\n(kill all of a group of people / animals)\nPollution might wipe all the fish in the sea out.\nA rise in temperature could wipe some types of animals out.\n\n4. mind out (type 1 / intransitive)\n(be careful, used as a warning)\nMind out! The traffic is fast here.\nMind out when you enter because the door is very low.\n\n5. bail out (type 2 / transitive and separable)\n(rescue someone from a difficult situation, often something financial)\nJulie spent all her money and had to call her parents to bail her out.\nMy car has broken down! Can you come and bail me out?",
                        "videos": [
                            {
                                "url": "https://drive.google.com/file/d/16H5itgQA_ql6iVfQUED66sgNUO8X6KV_/preview",
                            }
                        ],
                        "exercises": [
                            {
                                "name": "Day 1 Exercise",
                                "type": "exercise",
                                "questions": [
                                    {"question": "Tell the children to ___ (be careful) when they cross the road.", "answer": "mind out"},
                                    {"question": "Natural disasters ___ (kill all of a group / many types of animals) every year.", "answer": "wipe many types of animals out"},
                                    {"question": "After we finish dinner, you can ___ (make louder or stronger / the music) a bit.", "answer": "amp the music up"},
                                    {"question": "Someone has stolen my bag! Could you ___ (rescue from a difficult situation / me) and pay for a taxi home?", "answer": "bail me out"},
                                    {"question": "Please don't ___ (stop paying attention) while I'm talking to you!", "answer": "zone out"}
                                ]
                            }
                        ]
                    },
                    {
                        "title": "Day 2 - Common Phrasal Verbs",
                        "content": "Advanced phrasal verbs challenge 2 day 2 explanation\n\n6. hash out (type 2 / transitive and separable)\n(talk about something for a long time to try to decide something)\nWe need to make a plan for the holiday. Let's hash the details out later.\nThe team had a meeting to hash a plan out for the new project.\n\n7. polish off (type 2 / transitive and separable)\n(finish food or drink quickly and completely)\nWe usually polish a whole pot of coffee off after dinner.\nThe children will polish these sweets off when they get home.\n\n8. walk through (type 3 / transitive and inseparable, needs another object before 'through')\n(show or explain something to someone slowly and carefully)\nWe need to walk the new secretary through the company rules.\nCan you walk me through this computer system? It's difficult.\n\n9. rain off (type 2 / transitive and separable, often passive)\n(when an outside event is cancelled because of rain)\nThe weather last weekend was terrible, so the game was rained off.\nIf the weather stays bad, the carnival might be rained off.\n\n10. stick out (type 2 / transitive and separable)\n(continue doing something bad or boring)\nThis job is boring, but I stick it out because the money is good.\nI left my job because I couldn't stick it out any more.",
                        "videos": [
                            {
                                "url": "https://drive.google.com/file/d/1zaLKirpU_VlLe3ckh07w1R45vA0dKXqn/preview",
                            }
                        ],
                        "exercises": [
                            {
                                "name": "Day 2 Exercise",
                                "type": "exercise",
                                "questions": [
                                    {"question": "Tomorrow, I will ___ (show or explain slowly and carefully / the students / some more phrasal verbs)!", "answer": "walk the students through"},
                                    {"question": "The football team went home early because their training was ___ (cancelled because of rain).", "answer": "rained off"},
                                    {"question": "If you give the children some chocolate, they will ___ (finish quickly or completely / it) immediately!", "answer": "polish it off"},
                                    {"question": "You have to ___ (continue doing something bad or boring / your gym training) if you want to get stronger.", "answer": "stick your gym training out"},
                                    {"question": "The boss will ___ (show or explain slowly and carefully / me / the plan for the project).", "answer": "walk me through"}
                                ]
                            }
                        ]
                    }
                ]
            }
        };

        // Utility functions
        const Utils = {
            showToast(message, type = 'success') {
                const toast = document.getElementById('toast');
                toast.textContent = message;
                toast.className = `toast ${type}`;
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            },

            normalizeText(text) {
                return text.trim().toLowerCase().replace(/\s+/g, ' ');
            }
        };

        // Progress management
        class ProgressManager {
            constructor() {
                this.userProgress = this.loadProgress();
            }

            loadProgress() {
                try {
                    return JSON.parse(localStorage.getItem('languageChallengeProgress')) || {
                        course1: {
                            completedDays: 0,
                            completedTests: 0,
                            dayProgress: {},
                            testProgress: {}
                        }
                    };
                } catch (error) {
                    return this.getDefaultProgress();
                }
            }

            getDefaultProgress() {
                return {
                    course1: {
                        completedDays: 0,
                        completedTests: 0,
                        dayProgress: {},
                        testProgress: {}
                    }
                };
            }

            saveProgress() {
                try {
                    localStorage.setItem('languageChallengeProgress', JSON.stringify(this.userProgress));
                } catch (error) {
                    Utils.showToast('Error saving progress', 'error');
                }
            }

            calculateCourseProgress(courseKey) {
                const progress = this.userProgress[courseKey];
                if (!progress) return 0;
                
                const totalDays = courseData[courseKey]?.days?.length || 0;
                if (totalDays === 0) return 0;
                
                const completedDays = progress.completedDays || 0;
                
                return (completedDays / totalDays) * 100;
            }

            markDayComplete(courseKey, dayIndex) {
                if (!this.userProgress[courseKey]) {
                    this.userProgress[courseKey] = {
                        completedDays: 0,
                        completedTests: 0,
                        dayProgress: {},
                        testProgress: {}
                    };
                }
                
                if (!this.userProgress[courseKey].dayProgress[dayIndex]) {
                    this.userProgress[courseKey].dayProgress[dayIndex] = true;
                    this.userProgress[courseKey].completedDays = Object.keys(this.userProgress[courseKey].dayProgress).length;
                    this.saveProgress();
                    Utils.showToast('Day marked as complete!');
                }
            }

            markTestComplete(courseKey, testKey) {
                if (!this.userProgress[courseKey]) {
                    this.userProgress[courseKey] = {
                        completedDays: 0,
                        completedTests: 0,
                        dayProgress: {},
                        testProgress: {}
                    };
                }
                
                if (!this.userProgress[courseKey].testProgress[testKey]) {
                    this.userProgress[courseKey].testProgress[testKey] = true;
                    this.userProgress[courseKey].completedTests = Object.keys(this.userProgress[courseKey].testProgress).length;
                    this.saveProgress();
                    Utils.showToast('Exercise completed!');
                }
            }

            isDayCompleted(courseKey, dayIndex) {
                return this.userProgress[courseKey]?.dayProgress?.[dayIndex] || false;
            }

            isTestCompleted(courseKey, testKey) {
                return this.userProgress[courseKey]?.testProgress?.[testKey] || false;
            }
        }

        // Main application class
        class LanguageChallengeApp {
            constructor() {
                this.progressManager = new ProgressManager();
                this.currentCourse = "course1";
                this.currentDay = 0;
                
                this.cacheDomElements();
                this.init();
            }

            cacheDomElements() {
                this.courseModal = document.getElementById('courseModal');
                this.modalTitle = document.getElementById('modalTitle');
                this.courseProgress = document.getElementById('courseProgress');
                this.dayList = document.getElementById('dayList');
                this.contentArea = document.getElementById('contentArea');
                this.toast = document.getElementById('toast');
                
                this.prevDayBtn = document.getElementById('prevDayBtn');
                this.nextDayBtn = document.getElementById('nextDayBtn');
                this.completeDayBtn = document.getElementById('completeDayBtn');
            }

            init() {
                this.setupEventListeners();
                this.loadCourse();
            }

            loadCourse() {
                const course = courseData[this.currentCourse];
                this.modalTitle.textContent = course.title;
                
                this.updateCourseProgress();
                this.renderDayList();
                this.showDayContent(0);
            }

            setupEventListeners() {
                this.prevDayBtn.addEventListener('click', () => this.previousDay());
                this.nextDayBtn.addEventListener('click', () => this.nextDay());
                this.completeDayBtn.addEventListener('click', () => this.completeCurrentDay());

                document.querySelector('.close-btn').addEventListener('click', () => {
                    // Do nothing - курс всегда открыт
                });
            }

            updateCourseProgress() {
                const progress = this.progressManager.calculateCourseProgress(this.currentCourse);
                this.courseProgress.textContent = `${Math.round(progress)}% COMPLETE`;
            }

            renderDayList() {
                if (!this.dayList) return;

                this.dayList.innerHTML = '';
                const days = courseData[this.currentCourse]?.days || [];
                
                days.forEach((day, index) => {
                    const li = this.createDayListItem(day, index);
                    this.dayList.appendChild(li);
                });
            }

            createDayListItem(day, index) {
                const isCompleted = this.progressManager.isDayCompleted(this.currentCourse, index);
                const isActive = index === this.currentDay;
                
                const li = document.createElement('li');
                li.className = `day-item ${isActive ? 'active' : ''}`;
                li.innerHTML = `
                    <span>${day.title}</span>
                    <span class="day-status">${isCompleted ? '✓' : ''}</span>
                `;
                li.addEventListener('click', () => {
                    this.currentDay = index;
                    this.showDayContent(index);
                    this.renderDayList();
                });
                
                return li;
            }

            showDayContent(dayIndex) {
                if (!this.contentArea) return;

                const day = courseData[this.currentCourse]?.days?.[dayIndex];
                if (!day) {
                    return;
                }

                this.contentArea.innerHTML = '';
                
                const title = document.createElement('h3');
                title.textContent = day.title;
                title.style.marginBottom = '20px';
                this.contentArea.appendChild(title);
                
                if (day.videos && day.videos.length > 0) {
                    this.addVideoContent(day.videos[0]);
                }
                
                this.addTextContent(day.content);
                this.addExercises(day.exercises, dayIndex);
                this.renderDayList();
            }

            addVideoContent(video) {
                const videoContainer = document.createElement('div');
                videoContainer.className = 'video-container';
                
                const iframe = document.createElement('iframe');
                iframe.src = video.url;
                iframe.allow = 'autoplay';
                iframe.style.border = 'none';
                
                videoContainer.appendChild(iframe);
                this.contentArea.appendChild(videoContainer);
            }

            addTextContent(content) {
                const contentElement = document.createElement('div');
                contentElement.className = 'content-text';
                contentElement.textContent = content;
                this.contentArea.appendChild(contentElement);
            }

            addExercises(exercises, dayIndex) {
                const exercisesContainer = document.createElement('div');
                exercisesContainer.className = 'exercises-container';
                
                exercises.forEach((exercise, exIndex) => {
                    const btn = this.createExerciseButton(exercise, dayIndex, exIndex);
                    exercisesContainer.appendChild(btn);
                });
                
                this.contentArea.appendChild(exercisesContainer);
            }

            createExerciseButton(exercise, dayIndex, exIndex) {
                const isCompleted = this.progressManager.isTestCompleted(
                    this.currentCourse, 
                    `day${dayIndex}_${exercise.type}_${exIndex}`
                );
                
                const btn = document.createElement('button');
                btn.className = `exercise-btn ${isCompleted ? 'completed' : ''}`;
                btn.textContent = `${exercise.name} ${isCompleted ? '✓' : ''}`;
                btn.addEventListener('click', () => {
                    this.openExerciseModal(dayIndex, exIndex);
                });
                
                return btn;
            }

            openExerciseModal(dayIndex, exIndex) {
                const day = courseData[this.currentCourse]?.days?.[dayIndex];
                if (!day) return;

                const exercise = day.exercises[exIndex];
                if (!exercise) return;

                // Create exercise modal
                const exerciseModal = document.createElement('div');
                exerciseModal.className = 'modal';
                exerciseModal.style.display = 'block';
                
                exerciseModal.innerHTML = `
                    <div class="modal-content">
                        <div class="modal-header">
                            <h2>${day.title} - ${exercise.name}</h2>
                            <button class="close-btn" id="closeExerciseBtn">&times;</button>
                        </div>
                        <div class="content-area" id="exerciseContent">
                            <!-- Exercise questions will be added here -->
                        </div>
                        <div class="navigation">
                            <button class="nav-btn" id="backToCourseBtn">Back to Course</button>
                            <button class="nav-btn" id="completeExerciseBtn">Complete Exercise</button>
                        </div>
                    </div>
                `;
                
                document.body.appendChild(exerciseModal);
                
                // Render questions
                const exerciseContent = document.getElementById('exerciseContent');
                this.renderQuestions(exerciseContent, exercise.questions);
                
                // Setup event listeners
                document.getElementById('closeExerciseBtn').addEventListener('click', () => {
                    exerciseModal.remove();
                });
                
                document.getElementById('backToCourseBtn').addEventListener('click', () => {
                    exerciseModal.remove();
                });
                
                document.getElementById('completeExerciseBtn').addEventListener('click', () => {
                    const testKey = `day${dayIndex}_${exercise.type}_${exIndex}`;
                    this.progressManager.markTestComplete(this.currentCourse, testKey);
                    exerciseModal.remove();
                    this.showDayContent(this.currentDay);
                });
            }

            renderQuestions(container, questions) {
                container.innerHTML = '';
                
                questions.forEach((question, index) => {
                    const questionElement = this.createQuestionElement(question, index);
                    container.appendChild(questionElement);
                });
            }

            createQuestionElement(question, index) {
                const container = document.createElement('div');
                container.className = 'question-container';
                
                const questionText = document.createElement('div');
                questionText.className = 'question-text';
                questionText.textContent = `${index + 1}. ${question.question}`;
                container.appendChild(questionText);
                
                const inputContainer = document.createElement('div');
                inputContainer.className = 'answer-input-container';
                
                const input = document.createElement('input');
                input.type = 'text';
                input.className = 'answer-input';
                input.placeholder = 'Type your answer here...';
                input.dataset.correctAnswer = question.answer;
                
                const status = document.createElement('span');
                status.className = 'answer-status';
                
                const correctAnswer = document.createElement('div');
                correctAnswer.className = 'correct-answer';
                correctAnswer.textContent = `Correct answer: ${question.answer}`;
                
                // Setup input events
                input.addEventListener('keypress', (e) => {
                    if (e.key === 'Enter') {
                        this.checkAnswer(input, status);
                    }
                });
                
                input.addEventListener('input', () => {
                    status.className = 'answer-status';
                    status.style.display = 'none';
                    correctAnswer.style.display = 'none';
                });
                
                // Create button group
                const buttonGroup = document.createElement('div');
                buttonGroup.className = 'button-group';
                
                const checkBtn = document.createElement('button');
                checkBtn.className = 'check-btn';
                checkBtn.textContent = 'Check Answer';
                checkBtn.addEventListener('click', () => this.checkAnswer(input, status));
                
                const showBtn = document.createElement('button');
                showBtn.className = 'show-answer-btn';
                showBtn.textContent = 'Show Answer';
                showBtn.addEventListener('click', () => {
                    correctAnswer.style.display = 'block';
                });
                
                buttonGroup.appendChild(checkBtn);
                buttonGroup.appendChild(showBtn);
                
                inputContainer.appendChild(input);
                inputContainer.appendChild(status);
                container.appendChild(inputContainer);
                container.appendChild(correctAnswer);
                container.appendChild(buttonGroup);
                
                return container;
            }

            checkAnswer(input, status) {
                const userAnswer = Utils.normalizeText(input.value);
                const correctAnswer = Utils.normalizeText(input.dataset.correctAnswer);
                
                if (userAnswer === correctAnswer) {
                    status.className = 'answer-status correct';
                    status.textContent = '✔';
                    status.style.display = 'block';
                    Utils.showToast('Correct answer!');
                } else {
                    status.className = 'answer-status incorrect';
                    status.textContent = '❌';
                    status.style.display = 'block';
                    Utils.showToast('Incorrect answer. Try again!', 'error');
                }
            }

            completeCurrentDay() {
                this.progressManager.markDayComplete(this.currentCourse, this.currentDay);
                
                this.updateCourseProgress();
                this.renderDayList();
                this.showDayContent(this.currentDay);
            }

            previousDay() {
                if (this.currentDay > 0) {
                    this.currentDay--;
                    this.showDayContent(this.currentDay);
                }
            }

            nextDay() {
                const totalDays = courseData[this.currentCourse]?.days?.length || 0;
                if (this.currentDay < totalDays - 1) {
                    this.currentDay++;
                    this.showDayContent(this.currentDay);
                }
            }
        }

        // Initialize the app
        document.addEventListener('DOMContentLoaded', () => {
            try {
                new LanguageChallengeApp();
            } catch (error) {
                console.error('Error initializing app:', error);
                Utils.showToast('Error initializing application', 'error');
            }
        });
    </script>
</body>
</html>
