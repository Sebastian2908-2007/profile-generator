const inquirer = require('inquirer');
const generatePersonal = require('./src/personal-profile');
const generateBusiness = require('./src/business-profile');
const {writePersonal, copyPersonalCss} = require('./utils/generate-personal');
const {writeBusiness,copyBusinessCss} = require('./utils/generate-business');



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
            return  profileType();
        }
    });
};

// questions for personal profile
const personalProfile = () => {
  return inquirer.prompt([
      {
          type:'input',
          name:'name',
          message:'what is your name?',
          validate: name => {
              if(!name) {
                  console.log('people want to know your name! Try again')
                  return false;
              }else{
                  return true;
              }
          }
      },
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
        throw  dateProfile(profileQuestions);
        
        
      }else {
         return generatePersonal(profileQuestions)
      }
  }).then(pagehtml => {
    return writePersonal(pagehtml);
 }).then(writeFileResponse => {
    console.log(writeFileResponse);
    return copyPersonalCss();
}).then(cssResponse => {
    console.log(cssResponse);
})
 .catch(err => {
    console.log(err);
});
};


// this runs when user decides to add a dating profile
const dateProfile = personalInfo => {
    personalInfo.dating = [];
     console.log(`
     ================================
     make your dating profile!
     (ignore <pending> on first question and just start typing your response:)
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
           return  generatePersonal(personalInfo);
        }).then(pagehtml => {
            return writePersonal(pagehtml);
         }).then(writeFileResponse => {
            console.log(writeFileResponse);
            return copyPersonalCss();
        }).then(copyResponse => {
            console.log(copyResponse);
        })
         .catch(err => {
             console.log(err);
         })
     
};

// this runs when user wants to create a business profile
const businessProfile = () => {
    return inquirer.prompt([
       { 
            type:'checkbox',
            name: 'businessType',
            message:'What kind of business is this?',
            choices:['tech','food service', 'entertainment','building/construction','manafacturing','internet sales','physical sales']
       },
       {
           type:'input',
           name:'businessActions',
           message: 'in some words describe what your business does',
           validate: actions => {
               if(!actions) {
                   console.log('You gotta let people know what you do! Try again');
                   return false;
               }else {
                   return true;
               }
           }
       },
       {
           type:'input',
           name:'busBenifits',
           message: 'in some words describe how your business can benifit a customer today',
           validate: benifits => {
               if(!benifits) {
                   console.log('you gotta tell people the benifts to make a sell! try again');
                   return false;
               }else{
                   return true;
               }
           }
       },
       {
           type:'input',
           name:'email',
           message:'what is your company email?',
           validate: email => {
             if(!email) {
                 console.log('you gotta tell people your email try again');
                 return false;
             }else{
                 return true;
             }
         }
       },
       {
           type:'input',
           name:'phone',
           message:'what is your company phone number?',
           validate: phone => {
             if(!phone) {
                 console.log('you gotta tell people your phone number try again');
                 return false;
             }else{
                 return true;
             }
         } 
       },
       {
           type:'input',
           name:'website',
           message: 'what is your company website?',
           validate: website => {
             if(!website) {
                 console.log('you gotta tell people your website try again');
                 return false;
             }else{
                 return true;
             }
         }
       }
    ]).then(businessInfo => {
     // return  generateBusiness(businessInfo);
     return generateBusiness(businessInfo);
    })
    .then(businessHtml => {
        return writeBusiness(businessHtml);
    })
    .then(writeResponse => {
        console.log(writeResponse);
        return copyBusinessCss();
    })
    .then(businessCssResponse => {
        console.log(businessCssResponse);
    })
    .catch(err => {
        console.log(err);
    })
 };
 

profileType()
