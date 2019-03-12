"use strict"
module.exports = {
  transform: {
    "^.+\\.ts$": "ts-jest"
  },
  testRegex: "(\\.|/)(test|spec)\\.(js|ts)$",
  testPathIgnorePatterns: ["/lib/", "/node_modules/"],
  moduleFileExtensions: ["ts", "js", "json", "node"],
  testEnvironment: "node"
}
