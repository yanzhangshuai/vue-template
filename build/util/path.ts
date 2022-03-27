import path from 'path';

export const root = process.cwd();

/**
 * 配置文件所在路径
 */
export const configPath = resolve('config');

export function resolve(dir: string): string {
  return path.join(root, dir);
}