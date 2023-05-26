#!/usr/bin/env node

const os = require("os");
const path = require("path");
const fs = require("fs");
const configPaths = require("./configs/paths.json");

const root = os.homedir();

const SETTINGS_FILE = "configs/settings.json";
const KEYBINDINGS_FILE = "configs/keybindings.json";

/**
 * 1. get home dir
 * 2. read in paths
 * 3. move file to homedir + path
 */
const args = process.argv.length > 0 && process.argv.slice(2);
// user input doesnt work atm, not sure I'll even keep it.
const userInputVsCodeConfigsDir = args[0];

const keybindings = path.join(__dirname, KEYBINDINGS_FILE);
const settings = path.join(__dirname, SETTINGS_FILE);

const vscodeKeybindingsLocation = path.join(
  root,
  userInputVsCodeConfigsDir || configPaths.keybindings
);

const vscodeSettingsLocation = path.join(
  root,
  userInputVsCodeConfigsDir || configPaths.settings
);

// perform move
fs.copyFileSync(keybindings, vscodeKeybindingsLocation);
fs.copyFileSync(settings, vscodeSettingsLocation);
