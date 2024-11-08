const { logType } = require('../../domain/utils/types')

class Log {
    /**
     *  Create a new Log instance
     * @param {number} id - Unique identifier
     * @param {string} description - Log description
     * @param {string} type - Log type base on LogType data type
     * @param {date} date - Date when the log happened
     * @param {boolean} fromApp - Indicates if the log was created from api or app
     */
    constructor({ id, description, type, date, fromApp  }) {
        if (!Object.values(logType).includes(type)) {
            throw new Error(`Invalid type: ${type}. Valid types are ${Object.values(logType).join(', ')}`);
        }
        this.id = id;
        this.description = description;
        this.type = type;
        this.date = date;
        this.fromApp = fromApp;
    }
}

module.exports = Log;