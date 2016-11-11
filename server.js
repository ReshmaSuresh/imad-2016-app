var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));
var articles = {
 article-one : {
     title : 'Blog 1 | Reshma Suresh',
     heading : 'Defeating Dimensions',
     date: 'November 1,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
              </p>
              <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>`
 },
 article-two : {
     title : 'Blog 2 | Reshma Suresh',
     heading : 'Eternal Love',
     date: 'November 5,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
              </p>
              <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>`
 },
 article-three : {
    title : 'Blog 3 | Reshma Suresh',
     heading : 'Get Back Up!',
     date: 'November 10,2016',
     content :` 
             <p>  Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here 
              </p>
              <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>
               <p> Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here  Content HerevContent Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v Content Here Content Here Content Here Content Here Content Here Content Here Content Here v v v Content Here
              </p>` 
 }
};
 function createTemplate (data){
     var title= data.title;
     var heading= data.heading;
     var date= data.date;
     var content= data.content;
     var htmlTemplate = `
     <html>
      <head>
        <title>
           ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
        </head>
       <body bgcolor=PINK>
         
           <div class="container">
               <div>
                   <a href="/"><b>Home</b></a>
               </div>
               <hr/>
               <div>
                   <h1><center>${heading}</center></h1>
               </div>
               <div class="container1" >
                     <div>
                        <p> ${date}</p>
                     </div>
                     <div>
                         ${content}
                     </div>
                
               </div>
           </div>
       </body>
    </html>
    
     `;
     return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function(req, res) {
    res.send(createTemplate(article-one));
});
app.get('/article-two', function(req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});
app.get('/article-three', function(req, res) {
    res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/10954684_1184277164919250_247758682_n.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '10954684_1184277164919250_247758682_n.jpg'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
