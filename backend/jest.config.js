module.exports = {
    transformIgnorePatterns: [],
    transform: {
        '^.+\\.js?$': 'jest-esm-transformer',
    },
    testEnvironment: "node"
};