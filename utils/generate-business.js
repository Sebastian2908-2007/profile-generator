const fs = require('fs');

const writeBusiness = fileContent => {
return new Promise((resolve, reject) => {
 fs.writeFile('./dist/business.html',fileContent, err => {
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

const copyBusinessCss = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/business.css', './dist/business.css', err => {
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

module.exports = {writeBusiness, copyBusinessCss};