const inquirer = require('inquirer');


// ask user which type profile they want to do
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

// questions for personal profile
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
      {
          type:'confirm',
          name: 'confirmDateProfile',
          message: 'if you are single, would you like to create a dating profile?',
          default: true
      }
  ]).then(profileQuestions => {
      // checking to see if user wants to make a dating profile if so run `dateProfile()`
      if(profileQuestions.confirmDateProfile) {
          dateProfile(profileQuestions);
      }
  })
};

const businessProfile = () => {
    console.log('business profile chosen')
};

const dateProfile = personalInfo => {
    personalInfo.dating = [];
     console.log(`
     ================================
     make your dating profile!
     ==================================
     ===================================
     `);
     return inquirer.prompt([ 
         {
             type: 'input',
             name: 'intrestSummary',
             message: 'in some words describe what you are looking for in a mate'
         },
         {
             type: 'input',
             name:'describeYourself',
             message:'in some words describe the benifits of dating you.'
         },
         {
             type: 'checkbox',
             name:'mOrF',
             message: 'are you female or male or is it more complex?',
             choices:['straight female', 'straight male','gay man','gay female','trans man','trans female','non binary']
         },
         {
             type: 'input',
             name:'heightPref',
             message: 'Do you have any height preferences for a partner? If so please do share'
         },
         {
             type: 'checkbox',
             name: 'bodyPref',
             message: 'which body type do you like check all that apply',
             choices:['athletic','petite','a little extra','average','dont care']
         },
         {
             type: 'input',
             name: 'hairPref',
             message: 'Is there a certain hair color you prefer? if so write it down'
         },
         {
             type:'checkbox',
             name:'eyePref',
             message:'What eye color do you prefer in a partner?',
             choices:['blue','brown','green','hazell','dont care']
         }

        ]).then(datingData => {
            personalInfo.dating.push(datingData)
            console.log(personalInfo.dating[0].bodyPref);
        })
     
};

profileType()
