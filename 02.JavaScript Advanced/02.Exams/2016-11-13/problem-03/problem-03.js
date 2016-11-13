class MailBox {
    constructor() {
        this.messages = [];
    }
    addMessage(subject, text) {
        if (typeof subject === 'string' && typeof text === 'string') {
            let message = {
                subject: subject,
                text: text,
            };
            this.messages.push(message);
        }
        return this
    }
    deleteAllMessages() {
        while (this.messages.length > 0) {
            this.messages.pop();
        }
        return this
    }
    findBySubject(substr) {
        let result = [];
        if (typeof substr != 'string') {
            return result;
        }
        else {
            let currentSustr = substr;
            let result = [];
            for (let i = 0; i < this.messages.length; i++) {
                if (this.messages[i].subject.contains(currentSubstr)) {
                    result.push({
                        subject : this.messages[i].subject,
                        text : this.messages[i].text
                    });
                }
            }
            return result;
        }
        return this
    }

    get messageCount() {
        return this.messages.length;
        return this;
    }

    toString() {
        if (this.messages.length < 1) {
            let result = 'Msg count: ';
            result += this.messages.length;
            result += `\nMessages:\n * (empty mailbox)`;
            return result;
        }
        else {
            let result = 'Msg count: ';
            result += this.messages.length;
            result += '\nMessages:\n';
            for (let i = 0; i < this.messages.length; i++) {
                result += ' * [';
                result += this.messages[i].subject;
                result += '] ';
                result += this.messages[i].text;
                result += '\n';
            }
            return result;
        }
        return this;
    }
}
