var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var config = {
  host: 'db.imad.hasura-app.io',
  port:'5432',
  user: 'reshmasuresh',
  password: process.env.DB_PASSWORD,
  database: 'reshmasuresh',
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
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
                   <a href="/">
                    <b><button>Home</button></b>
                   </a>
               </div>
               <hr/>
               <div>
                   <h1><center>${heading}</center></h1>
               </div>
               <div class="container1" >
                     <div>
                        <p> ${date.toDateString()}</p>
                     </div>
                     <div>
                         ${content}
                     </div>
                     <div class="footer">
                        <button id="likebutton">Like</button><span id="likes"> 0 </span> Likes!
                     </div>
               </div>
           </div>
        <script type="text/javascript" src="/ui/main.js">
        </script>
       </body>
    </html>
    
     `;
     return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});
var pool= new Pool(config);
app.get('/test-db', function(req, res) {
    pool.query('SELECT * FROM test', function(err, result) {
        if(err){
            res.status(500).send(err.toString());
        } 
        else {
            res.send(JSON.stringify(result));
        }
    });
});
var counter=0;
app.get('/counter', function (req,res) {
   counter=counter+1;
   res.send(counter.toString());
});

app.post('/create-user', function(req,res){
    var username = req.body.username;
    var password = req.body.password;
    var salt = crypto.randomBytes(128).toString('hex');
    var dbString = hash(password , salt);
    pool.query('INSERT INTO "user" (username, password) VALUES ($1,$2)', [username,dbString], function(err, result){
         if(err){
            res.status(500).send(err.toString());
        } 
        else {
            res.send("User Successfully Created" +username);
        }
        
    });
});

app.get('/hash/:input', function(req,res){
    var hashedString = hash(req.params.input,'thiisisis-random');
    res.send(hashedString);
});

function hash(input,salt) {
     var hashed = crypto.pbkdf2Sync(input, salt, 10000, 512, 'sha512');
     return ["pdkdf", "10000", salt , hashed.toString('hex')].join('$');
}

app.get('/about', function(req,res) {
    res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});

app.get('/blogs/:blogNo', function(req, res) {
   // var blogNo= req.params.blogNo;
    pool.query("SELECT * FROM blogs WHERE title = $1" , [req.params.blogNo] , function(err,result) {
        if(err) {
            res.status(500).send(err.toString());
        }
        else {
            if (result.rows.length===0) {
                res.status(404).send("Article Not Found");
            }else {
                 var blogData = result.rows[0];
                 res.send(createTemplate(blogData));
            }
        }
    });
});
  
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
