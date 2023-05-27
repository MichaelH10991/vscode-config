#!/usr/bin/env node

const os = require("os");
const path = require("path");
const fs = require("fs");
const configPaths = require("./configs/paths.json");

const root = os.homedir();

const CONFIGS_DIR = "configs";
const CONFIGS = ["settings", "keybindings"];

/**
 * 1. get home dir
 * 2. read in paths
 * 3. move file to homedir + path
 */
const args = process.argv.length > 0 && process.argv.slice(2);
// user input doesnt really work atm, not sure I'll even keep it.
const userInputVsCodeConfigsDir = args[0];

const paths = CONFIGS.map((config) => ({
  name: config,
  currentPath: path.join(__dirname, CONFIGS_DIR, config.concat(".json")),
  destinationPath: path.join(
    root,
    userInputVsCodeConfigsDir || configPaths[config]
  ),
}));

const copyFiles = () => {
  for (let i = 0; i < paths.length; i++) {
    const { name, currentPath, destinationPath } = paths[i];
    console.log(`Moving ${name} to ${destinationPath}`);
    try {
      fs.copyFileSync(currentPath, destinationPath);
    } catch (error) {
      throw new Error(`Error moving ${name}`);
    }
  }
};

copyFiles();
