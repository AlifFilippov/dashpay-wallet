/**
 * Copyright (c) 2014-present, Dash Core Group, Inc.
 *
 * @flow
 */
const options = {
  wordPattern: "[A-Za-z]*",
  delims: {
    modifier: "__",
    state: "."
  }
};

function buildRegex(delims, wordPattern) {
  const block = "(" + wordPattern + ")";
  const modifier = "(?:" + delims.modifier + "(" + wordPattern + "))?";
  const state = "(?:" + delims.state + "(" + wordPattern + "))?";
  return new RegExp("^" + block + modifier + state + "$");
}

function parse(str, regex) {
  const executed = regex.exec(str);
  return executed ? executed.slice(1) : [];
}

function createParser(options) {
  const regex = buildRegex(options.delims, options.wordPattern);
  return str => parse(str, regex);
}

// Should be configured by props.
export default createParser(options);
