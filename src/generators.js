
const componentGenerator = require('./component/index.js');
const containerGenerator = require('./container/index.js');

module.exports = (plop) => {
	plop.addPrompt('directory', require('inquirer-directory'));

	const inquirer = require('inquirer');
	console.log(inquirer);

	let basePath = process.cwd();
	const ui = new inquirer.ui.BottomBar();
	ui.log.write(`Basepath defaults to ${basePath}`);

	inquirer.prompt([
		{
      type: 'text',
      name: 'basePath',
      message: 'Base path to generated sources?',
      default: process.cwd(),
      validate: (value) => {
        if ((/.+/).test(value)) {
          return (!fileExists(value)) ? 'Base path doesn\'t exist' : true;
        }

        return 'Base path is required';
      },
    },
   ]).then(function(answers){
   		basePath = answers['basePath'];
   		console.log()

		  plop.setGenerator('component', componentGenerator);
		  plop.setGenerator('container', containerGenerator);
   });
};