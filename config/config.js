module.exports = {
  buildPath: 'dist',
  hash: false,
  host: false,
  useHost:false,
  loaders:{
    scss: false,
    sass: false,
    less: false,
    stylus: false
  },
  plugins: {
    buildfile: false,
    manifest: false,
    manifestDeps: false,
    imagemini: false,
    commonsChunk: false
  }
};