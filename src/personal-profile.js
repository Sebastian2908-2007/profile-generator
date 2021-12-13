//makes html for just personal info
const generateProfileHtml = personalInfo => {
  return ` 
  <header>
  <div class="container flex-row justify-space-between align-center py-3">
    <h1 class="page-title text-secondary bg-dark py-2 px-3">${personalInfo.name}</h1>
    <nav class="flex-row">
    <p class='text-secondary bg-dark'>Brief Me Summary: ${personalInfo.personalSummary}</p>
      </nav>
  </div>
 </header>
 
 <section class="my-3" id="about">
 <h2 class="text-dark bg-primary p-2 display-inline-block">My Intrests</h2>
 <div class='bg-primary text dark'>My Hobbies Include: ${personalInfo.hobbies}</div>
 <div class='bg-primary text dark'>My Favorite Foods Are: ${personalInfo.favFoods}</div>
 <div class='bg-primary text dark'>My Favorite Types of Music: ${personalInfo.favMusic}</div>
</section>
  `;
}

const generateDatingProfile = dating => {
  console.log(dating);
return `
 ${dating
.map(({intrestSummary,describeYourself,mOrF,heightPref,bodyPref,hairPref,eyePref}) => {
  return ` 
  <section class='my-3' id='portfolio'>
  <div class='flex-row justify-space-between'>
  <div class='col-12 mb-2 bg-dark text-light p-3'>What i'm looking for: ${intrestSummary}</div>
  <div  class='col-12 mb-2 bg-dark text-light p-3'>A bit about why i'm great for you: ${describeYourself}</div>
  <div  class='col-12 mb-2 bg-dark text-light p-3'>I am: ${mOrF}</div>
  <div class='col-12 mb-2 bg-dark text-light p-3'>My prefered Height: ${heightPref}</div>
  <div class='col-12 mb-2 bg-dark text-light p-3' >Body type I prefer: ${bodyPref}</div>
  <div class='col-12 mb-2 bg-dark text-light p-3'>Favorite hair Color: ${hairPref}</div>
  <div class='col-12 mb-2 bg-dark text-light p-3' >Eye's I really like: ${eyePref}</div>
  </div>
  </section>
  
  `;
})
}
`;
};

// checks to see if they want to add a dating profile if so run`generateDatingProfile()`
const checkIfDatingProfile = (personalInfo, datingInfo) => {
  //console.log(personalInfo);
 // console.log(datingInfo);
  if(personalInfo.confirmDateProfile) {
    return generateDatingProfile(datingInfo);
  }
  else{
    return false;
  }
};

module.exports = personalTemplate => {
  const {dating, ...personal} = personalTemplate;
    return` 
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="style.css">
    </head>
     <body>
      <main> 
    ${generateProfileHtml(personal)}
    ${checkIfDatingProfile(personal, dating)}
      </main>
     </body>
    </html>`;
};