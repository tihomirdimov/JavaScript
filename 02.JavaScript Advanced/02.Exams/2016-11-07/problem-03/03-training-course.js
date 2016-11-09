class TrainingCourse {
    constructor (title, trainer) {
        this._title = title;
        this._trainer = trainer;
        this.topics = [];
    }
    get title () {
        return this._title;
    }
    get trainer () {
        return this._trainer;
    }
    addTopic (title, date) {
        this.topics.push({ title: title, date: date });
        this.sortTopics();
    }
    get firstTopic () {
        this.sortTopics();
        return this.topics[0];
    }
    get lastTopic () {
        this.sortTopics();
        return this.topics[this.topics.length - 1];
    }
    toString () {
        let resultString = `Course "${this.title}" by ${this.trainer}`;
        if (this.topics.length > 0) {
            for (let topic of this.topics) {
                resultString += `\n * ${topic.title} - ${topic.date}`;
            }
        } else {
            resultString += '\n';
        }
        return resultString;
    }
    sortTopics () {
        this.topics.sort(function(a, b) {
            return a.date - b.date;
        });
    }
}