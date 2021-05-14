const fs = require('fs');
const path = require('path');
const { capitalize } = require("vue");

/**
 *
 * @param {string} dir
 */
function getPages (dir) {
  return fs.readdirSync(dir).filter((name) => fs.statSync(path.join(dir, name)).isDirectory() &&
    fs.existsSync(path.join(dir, name, "index.md")));
}
/**
 * 生成侧边栏
 * @param {string} dirName 目录名
 * @param {string} title 标题
 */
function generateSideBar(dirName, title) {
  const pages = getPages(`docs/${dirName}`);
  const sideBar = [{
    text: title,
    link: `/${dirName}/`,
    children: []
  }];
  pages.forEach((page) => {
    sideBar[0].children.push({
      text: capitalize(page),
      link: `/${dirName}/${page}/`,
    })
  });
  return sideBar;
}

module.exports = {
  generateSideBar,
}
