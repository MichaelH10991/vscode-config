const os = require("os");
const paths = require("./paths.json");

/**
 * 1. get home dir
 * 2. Take location of configs and work out relative dir of vscode configs from home dir,
 * assuming vscode has been setup in users home.
 * 3. put files in the right place using config.
 */
const args = process.argv.length > 0 && process.argv.slice(2);
const configsDir = args[0] || "./";

const root = os.homedir();

console.log(__dirname, configsDir);
