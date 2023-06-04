const nextJest = require('next/jest');

const createJestConfig = nextJest({
   dir: './',
});

const customJESTConfig = {
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
   moduleDirectories: ['node_modules', __dirname],
   moduleNameMapper: {
      '@components(.*)': '<rootDir>/components$1',
      '@hooks(.*)': '<rootDir>/hooks$1',
      '@lib(.*)': '<rootDir>/lib$1',
      '@mockdata(.*)': '<rootDir>/mockdata$1',
      '@root(.*)': '<rootDir>/$1',
      '@styles(.*)': '<rootDir>/styles$1',
      '@types(.*)': '<rootDir>/types$1',
      '@assets(.*)': '<rootDir>/assets$1',
   },
   watchPlugins: [],
   testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJESTConfig);
