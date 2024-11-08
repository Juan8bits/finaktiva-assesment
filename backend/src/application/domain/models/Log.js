const { logType } = require('../../domain/utils/types')

class Log {
    /**
     *  Create a new Log instance
     * @param {number} id - Unique identifier
     * @param {string} description - Log description
     * @param {string} type - Log type base on LogType data type
     * @param {date} date - Date when the log happened
     */
    constructor({ id, description, type, date,  }) {
        if (!Object.values(logType).includes(type)) {
            throw new Error(`Invalid type: ${type}. Valid types are ${Object.values(logType).join(', ')}`);
        }
        this.id = id;
        this.description = description;
        this.type = type;
        this.date = date;
    }
}

module.exports = Log;