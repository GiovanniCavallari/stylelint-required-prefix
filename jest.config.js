module.exports = {
  verbose: true,
  coverageReporters: ['json', 'lcov', 'text', 'clover', 'html'],
  coverageDirectory: '<rootDir>/coverage',
  collectCoverage: true,
  testPathIgnorePatterns: ['/node_modules/'],
  collectCoverageFrom: ['**/*.{js,jsx}', '!<rootDir>/tests/**/*.{js,jsx}', '!<rootDir>/node_modules/'],
  testMatch: ['**/__tests__/**/*.[jt]s?(x)', '**/?(*.)+(spec|test|tests).[tj]s?(x)'],
};
