// jest.config.js
module.exports = {
  preset: 'react-native',
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
    '^.+\\.jsx?$': 'babel-jest', // Transform JavaScript files if necessary
  },
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json', 'node'],
  testPathIgnorePatterns: ['/node_modules/', '/build/'], // Ignore node_modules and build
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json', // Use your tsconfig file
    },
  },
  // Optionally add more configurations based on your project needs
};
