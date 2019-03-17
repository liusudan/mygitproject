$(function(){
    //发送登录请求
    var l_submit=document.getElementById("l_submit");
    l_submit.onclick=function(){
        var uname=document.getElementById("uname");
        var upwd=document.getElementById("upwd");
        var str=`uname=${uname.value}&upwd=${upwd.value}`;
        ajax({url:"http://localhost:3000/login",data:str,type:"get"})
        .then(res=>{
            var result=JSON.parse(res);
            if(result.code==1){
                sessionStorage.setItem("uname",uname.value);
                sessionStorage.setItem("uid",result.data[0].uid);
                location.href="http://localhost:3000/index.html";
            }else{
                var err_login=document.getElementById("err_login");
                err_login.style.display="block";
            }
        })
    }
    //发送注册请求
    var reg_btn=document.getElementById("reg_btn");
    reg_btn.onclick=function(){
        var reg_uname=document.getElementById("reg_uname");
        var reg_upwd=document.getElementById("reg_upwd");
        var reg_email=document.getElementById("reg_email");
        var reg_agree=document.getElementById("reg_agree");
        if(reg_agree.checked){
            var reg_str=`uname=${reg_uname.value}&upwd=${reg_upwd.value}&email=${reg_email.value}`;
            ajax({url:"http://localhost:3000/register",data:reg_str,type:"post"})
            .then(res=>{
                var result=JSON.parse(res);
                if(result.code==200){
                    var x_close=document.getElementById("close");
                    x_close.parentElement.parentElement.style.display="none";
                }
            })
        }
    }
    var com_color=document.getElementsByClassName("com-color");
    for(var item of com_color){
        item.onblur=function(){
            if(this.value==""){
                this.nextElementSibling.style.display="block";
            }else{
                this.nextElementSibling.style.display="none";
            }
        };
        item.onfocus=function(){
            var err_login=document.getElementById("err_login");
            err_login.style.display="none";
        };
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