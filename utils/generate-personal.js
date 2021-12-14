const fs = require('fs');

const writePersonal = fileContent => {
return new Promise((resolve, reject) => {
 fs.writeFile('./dist/personal.html',fileContent, err => {
     if (err) {
         reject(err)
         return;
     }
     // if all went fantastic send info
     resolve({
         ok: true,
         message: 'File Created!'
      });
   });
 });
};

const copyPersonalCss = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if(err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'style sheet copied!'
            })
        })
    })
};

module.exports = {writePersonal, copyPersonalCss};