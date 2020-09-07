module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  rootDir: 'src',
  moduleNameMapper: {
    '@ctrl/(.*)': ['<rootDir>/controllers/$1']
  }
};
