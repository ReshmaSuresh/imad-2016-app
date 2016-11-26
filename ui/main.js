   var button=document.getElementById('likebutton');
    button.onclick= function() {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status === 200){
                   var likebutton= request.responseText;
                   var span=document.getElementById('likes');
                   span.innerHTML = likebutton.toString();
                }
            }
            
        };
       request.open('GET','http://reshmasuresh.imad.hasura-app.io/counter',true);
       request.send(null);
        
    };

var submit = document.getElementById('submit');
submit.onclick= function(){
    var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status === 200){
                    var comments = request.responseText;
                    comments = JSON.parse(comments);
                    var list = '';
                    for(var i=0;i<comments.length;i++) {
                        list += '<li>' + comments[i] + '</li>';
                    }
                    var ul =  document.getElementById('commentslist');
                    ul.innerHTML=list;
                }
            }
            
        };
       var commentInput = document.getElementById('comment');
       var comment = commentInput.value;
       request.open('GET','http://reshmasuresh.imad.hasura-app.io/submit-comment?comment=' + comment,true);
       request.send(null);
  
};

var submit = document.getElementById('submit1');
submit.onclick= function(){
    var request = new XMLHttpRequest();
        request.onreadystatechange = function () {
            if(request.readyState===XMLHttpRequest.DONE){
                if(request.status === 200){
                   console.log('user logged!');
                   alert('Logged in Successfully!');
                }
                else if(request.status === 403){
                    alert('User Name/Password Incorrect');
                }
                else if (request.status === 500){
                    alert('Something Went Wrong! Please Try Again Later');
                }
            }
            
        };
       var username = document.getElementById('username').value;
       var password = document.getElementById('password').value;
       console.log('username');
       console.log('passord');
       request.open('POST','http://reshmasuresh.imad.hasura-app.io/login',true);
       request.setRequestHeader('Content-Type','application/json');
       request.send(JSON.stringify({username : username , password : password}));
  
};