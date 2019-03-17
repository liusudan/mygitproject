window.onload=function(){
    var img_to=document.getElementsByClassName("img_to");
    for(var item of img_to){
        item.onmouseover=function(){
            this.firstElementChild.style.transform="scale(1.2,1.2)";
        }
        item.onmouseout=function(){
            this.firstElementChild.style.transform="scale(1,1)";
        }
    }
}
window.onresize=function(){
    var head_bg=document.getElementsByClassName("header-bg")[0];
    var item=document.getElementsByClassName("li_d");
    if(document.documentElement.clientWidth>=768){
        head_bg.style.height="100px";
        for(var i_bro of item){
            i_bro.style.display="block";
        }
    }else if(document.documentElement.clientWidth<768){
        head_bg.style.height="60px";
        for(var i_bro of item){
            i_bro.style.display="none";
        }
    }
}