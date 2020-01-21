module.exports = {
    verbose: true,
    testEnvironment: "node",
    collectCoverage: true,
    testPathIgnorePatterns: [
        "/__tests__/utils.js",
        "/node_modules/"
    ],
    roots: [
        "tests/"
    ],
    coveragePathIgnorePatterns: [
        "/node_modules/"
    ],
    moduleFileExtensions: [
        "js",
        "json"
    ],
    testTimeout: 10000,

}