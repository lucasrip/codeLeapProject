
import getActions from './getActions.js';

export default function(plop)
{
  plop.setGenerator('generator', {
    description: 'generetor templates',
    
    prompts: [
      {
        type: 'list',
        name: 'directory',
        message: 'what do you want create',
        choices: ['component','page','hook']
      },
      {
        type: 'input',
        name: 'name',
        message: 'What is your name ?'
      },
    ],
    actions: ({directory,name}) => getActions(directory,name),
     
  });

}