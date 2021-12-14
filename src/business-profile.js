module.exports = businessTemplate => {
    const {businessType,businessActions,busBenifits,email,phone,website} = businessTemplate
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
        <link rel="stylesheet" href="business.css">
      </head>
       <body>
        <main> 
        <header>
        <div class="container flex-row justify-space-between align-center py-3">
          <h1 class="page-title text-secondary bg-dark py-2 px-3">${businessType}</h1>
          <nav class="flex-row">
            <a class="ml-2 my-1 px-2 py-1 bg-secondary text-dark" href="https://${website}">Company Website</a>
          </nav>
        </div>
       </header>
       <div class="col-12 col-md-6 mb-2 bg-dark text-light p-3 flex-column">
       <p class="portfolio-languages" >What We Do:  ${businessActions}</p>
       <p class="portfolio-languages" >Some Benifits Include:  ${busBenifits}</p>
       </div>
       <footer classs="container text-center py-3">
       <h3 class="text-dark">&copy; ${new Date().getFullYear()} </h3>
       <div class="col-12 mb-2 bg-dark text-light p-3">EMAIL Us @:  <a href="mailto:${email}">${email}</a></div>
       <div class="col-12 mb-2 bg-dark text-light p-3">Call us Today @: ${phone} </div>
     </footer>
        </main>
       </body>
      </html>`;
  };