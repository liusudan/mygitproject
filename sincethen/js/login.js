$(function(){
    var com_color=document.getElementsByClassName("com-color");
    for(var item of com_color){
        item.onblur=function(){
            if(this.value==""){
                console.log("ÃÜÂëÎª¿Õ")
                this.nextElementSibling.style.display="block";
            }else{
                this.nextElementSibling.style.display="none";
            }
        }
    }
    var btn_cre=document.getElementsByClassName("btn-cre")[0];
    btn_cre.onclick=function(){
        var space_sign=document.getElementsByClassName("space-sign")[0];
        space_sign.style.display="block";
    }
    var x_close=document.getElementById("close");
    x_close.onclick=function(){
        this.parentElement.parentElement.style.display="none";
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
})