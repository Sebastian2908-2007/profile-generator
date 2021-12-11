const inquirer = require('inquirer');

const profileType = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'whatTypeProfile',
            message: 'Wil this be a business or personal profile?',
            validate: typeChose => {
                if(!typeChose) {
                    console.log("you must pick a profile type");
                    return false;
                }else{
                    
                    return true;
                }
            }
        }
    ]).then(choice => {
        if (choice.whatTypeProfile === 'personal') {
            personalProfile();
        }else if (choice.whatTypeProfile === 'business') {
            businessProfile()
        }else {
            return false;
        }
    });
};

const personalProfile = () => {
  return inquirer.prompt([
      {
       type:'input',
       name: 'personalSummary',
       message: 'In some words describe whats cool about you',
       validate: summary => {
           if(!summary) {
               console.log('its not a profile without a summary give it another shot!');
               return false;
           }else {
               return true;
           }
       }
        
      },
      {
          type: 'checkbox',
          name: 'hobbies',
          message: 'what are some of your favorite hobbys?',
          choices: ['working out', 'video games', 'hunting', 'fishing', 'camping', 'hiking','cooking','cycling','rock climbing']
      },
      {
          type: 'checkbox',
          name: 'favFoods',
          message: 'which foods are your favorite',
          choices:['vegtables', 'meats', 'pizza', 'pasta','chocolate','ice cream', 'fruit']
      },
      {
          type: 'checkbox',
          name: 'favMusic',
          message: 'which music do you like best?',
          choices:['country', 'hip hop','pop','alternative','grunge','metal']
      },
  ]).then(profileQuestions => {
      console.log(profileQuestions);
  })
};

const businessProfile = () => {
    console.log('business profile chosen')
};

profileType()
