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
