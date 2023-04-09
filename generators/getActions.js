
export default function getActions(directory,name)
{
  const equalsTemplate = ['component', 'page'];
  const verifyDirectory = equalsTemplate.some(element => element === directory);
  const folderName = verifyDirectory? name[0].toUpperCase() + name.slice(1).toLowerCase() : name[0].toLowerCase() + name.slice(1); 

  const component = [{
     type: 'add',
     path: `../src/${directory}s/${folderName}/index.tsx`,
     templateFile: 'templates/component/index.tsx.hbs',
   },
   {
     type: 'add',
     path: `../src/${directory}s/${folderName}/styles.ts`,
     templateFile: 'templates/component/styles.ts.hbs',
   } 
  ];
    
  const actions = { 
   component,
   page: component,
   hook:[
    {
      type: 'add',
      path: `../src/${directory}s/${folderName}/index.ts`,
      templateFile: 'templates/hook/index.ts.hbs',
    }
   ]
  }

  return actions[directory]

}