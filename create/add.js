
const path = require('path');
const glob = require('glob');
const fs = require('fs-extra');
const chalk = require('chalk');
const handlebars = require('handlebars');
const { spawn } = require('child_process');
// const fetch = require('node-fetch');

// Linux 文件与目录管理命令: https://www.yuque.com/xuebao-runen/icbftt/zg0sm1 
// console.log(/aa/, process.argv, process.argv[2], process.cwd()+ 'src/' + process.argv[2]);

// console.log(path, path.join(process.cwd(), 'src/' + process.argv[2]));

const varCase = str => str.replace(/-[a-z]/g, m => m[1].toUpperCase()).replace(/^.{1}/g, str[0].toUpperCase());
const lowCase = str => str.replace(/[A-Z]/g, m => `-${m.toLowerCase()}`).replace(/-[a-z]/g, str[1].toUpperCase());
(async () => {
  const component = process.argv[2];
  const dirName = lowCase(component);
  const componentName = varCase(component);
  
  spawn('mkdir', ['-p', path.join(process.cwd(), `src/${dirName}/hooks`)]);

  // 创建hooks文件
  fs.writeFile(path.join(process.cwd(), `src/${dirName}/hooks/use${componentName}Data.ts`), '');
  fs.writeFile(path.join(process.cwd(), `src/${dirName}/config.tsx`), '');
  fs.writeFile(path.join(process.cwd(), `src/${dirName}/const.tsx`), '');

  //读取模版
  const tplFiles = glob.sync(path.join(__dirname, 'template/*.hbs'));
  tplFiles.forEach((async filePath => {
    const content = await fs.readFile(filePath, 'utf-8');
    const template = handlebars.compile(content);
    const result = template({
      dirName,
      componentName
    });
    const newPath = filePath.replace('create/template', `src/${dirName}`)
      .replace('componentName', componentName)
      .replace('ComponentName', componentName)
      .replace('.hbs', '');
    // const  newTargetPath = path.join(process.cwd(), 'src');
    await fs.writeFile(newPath, result);
      // console.log(chalk.green(`write ${newTargetPath} success`));
      console.log(chalk.green(`write ${newPath} success`));
  }));
  // const response = await fetch(`https://unpkg.com/antd@4.19.5/es/${dirName}/style/index.css`);
  // const body = await response.text();
  // const scssFile = path.join(process.cwd(), `src/${dirName}/index.scss`);
  // await fs.writeFile(scssFile, body);
})();


