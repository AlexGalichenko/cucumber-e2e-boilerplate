const stepDefinitions = '--require step_definition/*.js';
const jsonFormatter = '--format json:report/report.json';

module.exports = {
    default: `${stepDefinitions} ${jsonFormatter}`
}
