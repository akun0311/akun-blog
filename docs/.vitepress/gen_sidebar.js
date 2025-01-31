import path from 'node:path';
import fs from 'node:fs';

// 文件根目录
const DIR_PATH = path.resolve();
// 白名单, 过滤不是文章的文件和文件夹
const WHITE_LIST = new Set(['index.md', '.vitepress', '.obsidian', 'node_modules', 'assets']);

/**
 * 判断是否是文件夹
 * @param {string} dirPath - 目标路径
 */
const isDirectory = (dirPath) => fs.lstatSync(dirPath).isDirectory();

/**
 * 生成侧边栏配置
 * @param {string} dirPath - 目标目录的路径
 * @param {string} relativePath - 相对于docs目录的相对路径，用于构建链接
 */
function generateSidebar(dirPath, relativePath = '') {
    const files = fs.readdirSync(dirPath);
    const sidebarItems = [];

    for (const file of files) {
        // 跳过白名单中的文件或文件夹
        if (WHITE_LIST.has(file)) continue;

        const fullPath = path.join(dirPath, file);
        const isDir = isDirectory(fullPath);

        if (!isDir) {
            // 只处理.md文件
            if (path.extname(file) === '.md') {
                // 移除扩展名得到文档名称
                const nameWithoutExt = path.basename(file, '.md');
                // 对相对路径进行URL编码，但保留文本原样
                const encodedLink = `${relativePath}/${encodeURIComponent(file)}`;
                sidebarItems.push({
                    text: nameWithoutExt, // 如果需要，这里可以直接是中文
                    link: encodedLink.replace(/%2F/g, '/'), // 将URL编码中的'/'还原
                });
            }
        } else {
            // 如果是目录，则递归处理
            const subdirRelativePath = `${relativePath}/${file}`;
            const subdirItems = generateSidebar(fullPath, subdirRelativePath);
            if (subdirItems.length > 0) { // 只有当子目录中有内容时才添加
                sidebarItems.push({
                    text: file, // 目录名称可以是中文
                    collapsible: true,
                    items: subdirItems,
                });
            }
        }
    }

    return sidebarItems;
}

export const set_sidebar = () => {
    // 获取docs目录的完整路径
    const docsDirPath = path.join(DIR_PATH, 'docs');
    // 返回docs目录下的所有文档组成的侧边栏配置
    return generateSidebar(docsDirPath);
};