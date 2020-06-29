module.exports = {
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.mdx?$': '@storybook/addon-docs/jest-transform-mdx',
    },
    testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$',
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
    moduleNameMapper: {
        '^.*.woff$': '<rootDir>/src/testing/mock-file.ts',
    },

    timers: 'fake',
    clearMocks: true,
    resetMocks: false,
    automock: false,

    collectCoverage: true,
    coverageDirectory: '.cov',
    coverageReporters: ['json', 'lcov', 'text-summary'],
    collectCoverageFrom: [
        'src/**/*.(ts|tsx)',
        '!src/index.ts',
        '!src/testing/*.(js|jsx|ts|tsx)',
    ],
    coverageThreshold: {
        global: {
            branches: 100,
            functions: 100,
            lines: 100,
            statements: 100,
        },
    },
};
