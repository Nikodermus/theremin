module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'Theremin',
      externals: {
        react: 'React'
      }
    }
  }
}
