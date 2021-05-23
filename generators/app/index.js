const YeomanGenerator = require('yeoman-generator');
const glob = require('glob');
const path = require('path');
const chalk = require('chalk');
const log = console.log;

module.exports = class extends YeomanGenerator{

  async prompting() {
    this.answers = await this.prompt([
      {
        type:'input',
        name: 'name',
        message: 'Please enter your project name:',
        defaultValue: 'generator-project'
      },
      {
        type: 'input',
        name: 'author',
        message: 'Please entry your name:',
        defaultValue: ''
      },
      {
        type: 'list',
        name: 'type',
        message: 'Please select project type:',
        choices: ['html', 'vue', 'node'],
        defaultValue: ['html']
      }
    ])
  }

  async writing() {
    const { type } = this.answers;
    const files = this._private_getTemplateFile(type);
    files.forEach(file => {
      const filePath = file.replace(`${__dirname}/templates/${type}/`, '');
      this.fs.copyTpl(this.templatePath(`${type}/${filePath}`), this.destinationPath(filePath), this.answers);
    })
  }

  end() {
    log(chalk.green(`successful init project ${this.answers.name}`));
  }

  _private_getTemplateFile(type) {
    return glob.sync(path.resolve(__dirname, `templates/${type}/**`), { nodir: true });
  }
}