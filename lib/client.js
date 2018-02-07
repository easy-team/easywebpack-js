'use strict';
const path = require('path');
const EasyWebpack = require('easywebpack');
const merge = EasyWebpack.merge;
const defaultConfig = require('../config/config');
class WebpackClientBuilder extends EasyWebpack.WebpackClientBuilder {
  constructor(config) {
    super(merge(defaultConfig, config));
    this.setResolveLoader({ modules: [path.join(__dirname, '../node_modules')] });
  }

  createFileName() {
    const prefix = this.config.prefix;
    this.setOutputFileName(this.utils.assetsPath(prefix, '[name].js'));
    this.setOutputFileChunkName(this.utils.assetsPath(prefix, '[name].chunk.js'));
  }

  createImageName() {
    const prefix = this.config.prefix;
    this.config.imageName = this.utils.assetsPath(prefix, 'img/[name].[ext]');
  }

  createCssName() {
    const prefix = this.config.prefix;
    this.config.cssName = this.utils.assetsPath(prefix, 'css/[name].css');
  }

  createFrontName() {
    const prefix = this.config.prefix;
    this.config.frontName = this.utils.assetsPath(prefix, 'font/[name].[ext]');
  }
}
module.exports = WebpackClientBuilder;