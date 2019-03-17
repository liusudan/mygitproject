$(function(){
    var uname=sessionStorage.getItem("uname");
    var btn_login=document.getElementById("btn_login");
    var btn_login2=document.getElementById("btn_login2");
    if(uname){
        btn_login.innerHTML=`${uname}，<a class="ml-2" href="#">退出 </a>`
        btn_login2.innerHTML=`${uname}，<a class="ml-2" href="#">退出 </a>`
    }
    var loginout1=btn_login.firstElementChild;
    var loginout2=btn_login2.firstElementChild;
    loginout1.onclick=function(e){
        e.preventDefault();
        sessionStorage.removeItem("uname");
        btn_login.innerHTML=`<a href="login.html">登录</a>`;
        btn_login2.innerHTML=`<a class="mr-2" href="login.html"><img width="23px"src="img/index/login.png" alt=""/> </a>`
    }  
    loginout2.onclick=function(e){
        e.preventDefault();
        sessionStorage.removeItem("uname");
        btn_login2.innerHTML=`<a class="mr-2" href="login.html"><img width="23px"src="img/index/login.png" alt=""/> </a>`;
        btn_login.innerHTML=`<a href="login.html">登录</a>`;
    }    
})
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