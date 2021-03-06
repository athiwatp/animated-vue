
module.exports = {
  paths: {
    public: 'dist',
    watched: ['src']
  },
  files: {
    javascripts: {
      joinTo: 'animated-vue.js'
    },
    templates: {
      joinTo: 'animated-vue.js'
    }
  },
  plugins: {
    babel: {
      presets: ['latest', 'stage-3']
    },
    vue: {
      extractCSS: false
    },
    eslint: {
      pattern: /^src\/.*\.js?$/,
      warnOnly: true
    },
    uglify: {
      mangle: false,
      compress: {
        global_defs: {
          DEBUG: false
        }
      }
    }
  }
}
