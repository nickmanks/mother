/* eslint-env node */
/* eslint @typescript-eslint/no-var-requires: 0 */
const path = require('path');

module.exports = {
    process(_src: string, filename: string) {
        return `module.exports = ${JSON.stringify(path.basename(filename))};`;
    },
};
