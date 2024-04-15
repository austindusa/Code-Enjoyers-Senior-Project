module.exports = {
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    // Handle static assets (useful for your logo import)
    '\\.(jpg|jpeg|png|gif|webp|svg)$': '<rootDir>/__mocks__/fileMock.js',
  },
  testEnvironment: 'jest-environment-jsdom',
};
