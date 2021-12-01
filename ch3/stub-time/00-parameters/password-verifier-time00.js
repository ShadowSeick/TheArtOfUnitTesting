const moment = require('moment');
const SUNDAY = 0, SATURDAY = 6;

const verifyPassword = (input, rules) => {
    const dayOfWeek = moment().day();
    if([SATURDAY, SUNDAY].includes(dayOfWeek)) {
        throw Error('It\'s weekend!');
    }
    return [];
};