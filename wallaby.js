module.exports = () => {
  return {
    files: [
      '!src/**/*.spec.js',
      'src/**/*.js'
    ],
    tests: [
      'src/**/*.spec.js'
    ],
    debug: true,
    env: {
      type: 'node'
    }
  };
};
