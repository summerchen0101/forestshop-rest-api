// eslint-disable-next-line @typescript-eslint/no-var-requires
const { defaults: tsjPreset } = require('ts-jest/presets');

module.exports = {
  preset: '@shelf/jest-mongodb',
  // ...some other non related config values...
  transform: tsjPreset.transform,
  testEnvironment: 'node',
  rootDir: '.',
  moduleNameMapper: {
    '@/(.*)': ['<rootDir>/src/$1']
  },
  setupFiles: ['dotenv/config']
};
