#!/usr/bin/env node

const { program } = require('commander')

const download = require('download-git-repo')
const handlebars = require('handlebars')
const inquirer = require('inquirer')

const templates = {
  'web-vue': {
    url: 'https://github.com/bwbhw/cli-template-web-vue',
    downloadUrl: 'bwbhw/cli-template-web-vue#main',
    description: 'web-vue模板',
  },
  'uni-app': {
    url: 'https://github.com/bwbhw/cli-template-uniapp',
    downloadUrl: 'bwbhw/cli-template-uniapp#main',
    description: 'uni-app模板',
  },
}

program.version('0.1.0')

program
  .command('init <template> <project>')
  .description('初始化模板')
  .option('-s, --setup_mode [mode]', 'which setup')
  .action(function (templateName, projectName) {
    const { downloadUrl } = templates[templateName]
    download(downloadUrl, projectName, (err) => {
      if (err) {
        console.log('下载失败',err)
      } else {
        console.log('下载成功')
      }
    })
  })

program
  .command('list')
  .description('查看所有可用模板')
  .action(() => {
    console.log('xxxx')
  })

program.parse()
