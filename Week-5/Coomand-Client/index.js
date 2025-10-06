/*
npm init -y : is used to create package.json file

script : use to run index.js or any file via abbrivations.

npm: packet manager which manages libraries or dependencies or exteranal packaages(prewritten code like our index.js[our index.js is also a package]) by using "npm install dependency_name "

npm module: collection of all dependendencies. We dont need to provide node_modules to github , others just have to run "npm install" and they get that npm module.

npm has many libraries like chalk and we can learn more about chalk(extrnal library).

*/
// import chalk from 'chalk';
// console.log(chalk.blue('Hello World'));

// --------------------------------------
function sum(a,b){
    return a+b;
}
console.log(sum(1,2));

// --------------------------------------
/* internal library (comes with node.js we dont need to import them using npm install dependency)*/

// internal library for file manage
const fs = require("fs") 

// internal library to join paths(travelling in paths)
const path = require("path")
console.log(__dirname);
console.log(path.join(__dirname,"../"));

// ---------------------------------------------

// creating command line interface
// process.argv

const { Command } = require('commander');
const program = new Command();

program
  .name('Counter')
  .description('CLI to do file based tasks')
  .version('0.8.2');

program.command('count') 
  .description('Count the number of words in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // code to count words
        let words =0;
        for(let i=0;i<data.length;i++){
            if(data[i]==" "){
                words++;
            }
        }
        console.log(`There are ${words+1} words in ${file}`);
      }
    });
  });

program.command('count-sentence') // node index.js count text.txt
  .description('Count the number of sentences in a file')
  .argument('<file>', 'file to count')
  .action((file) => {
    fs.readFile(file, 'utf8', (err, data) => {
      if (err) {
        console.log(err);
      } else {
        // code to count words
        let words =0;
        for(let i=0;i<data.length;i++){
            if(data[i]=="\n"){
                words++;
            }
        }
        console.log(`There are ${words+1} sentences in ${file}`);
      }
    });
  });

program.parse();


// i want to call it when i need it
// and why i can't run above libraries
