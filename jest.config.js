module.exports = {
  displayName: 'ig-iwacu',
  testEnvironment: 'node',
  testMatch: ['**/?(*.)+(spec|test).js'],
  verbose: true,
  collectCoverage: true,
  clearMocks: true,
  collectCoverageFrom: [
    'src/**/*.{js,jsx}',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/babel.config.js',
    '!**/jest.setup.js',
    '!**/dist/**'
  ]
};
