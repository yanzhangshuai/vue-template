import { Configuration } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { resolve } from '../../util/path';
import { SupportFn } from '../../type/webpack';

export const reportSupport: SupportFn = (mode, env) => {
  const conf: Configuration = { plugins: [] };
  if (!env.WEBPACK_REPORT) return conf;

  conf.plugins.push(new BundleAnalyzerPlugin({ analyzerMode: 'static', reportFilename: resolve('report/depend/index.html') }));

  return conf;
};
