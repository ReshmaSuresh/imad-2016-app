var button=document.getElementById('likebutton');
var likebutton = 0;
button.onclick= function() {
    likebutton=likebutton + 1;
    var span=document.getElementById('likes');
    span.innerHTML = likebutton.toString();
};