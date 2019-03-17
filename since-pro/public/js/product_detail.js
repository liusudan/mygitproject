$(function() {
    var uname=sessionStorage.getItem("uname");
    var uid=sessionStorage.getItem("uid");
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
        sessionStorage.removeItem("uid");
        btn_login.innerHTML=`<a href="login.html">登录</a>`;
        btn_login2.innerHTML=`<a class="mr-2" href="login.html"><img width="23px"src="img/index/login.png" alt=""/> </a>`
    }  
    loginout2.onclick=function(e){
        e.preventDefault();
        sessionStorage.removeItem("uname");
        sessionStorage.removeItem("uid");
        btn_login2.innerHTML=`<a class="mr-2" href="login.html"><img width="23px"src="img/index/login.png" alt=""/> </a>`;
        btn_login.innerHTML=`<a href="login.html">登录</a>`;
    }  
    var search=location.search;
    if(search!==""){
        var pid=search.split("=")[1];
        var str=`pid=${pid}`;
        ajax({url:"http://localhost:3000/productdetail",data:str,type:"get"})
        .then(res=>{
            var result=JSON.parse(res)[0];
            var html=`<div><img src="${result.d_img0}" /></div>
            <div><img src="${result.d_img1}" /></div>
            <div><img src="${result.d_img2}" /></div>
            <div><img src="${result.d_img3}" /></div>
            <div><img src="${result.d_img4}" /></div>`
            var detail_img=document.getElementsByClassName("detail_img")[0];
            detail_img.innerHTML=html;
            var html2=`<h4 class="p_title">${result.title}</h4>
            <p class="p_price">￥${result.price.toFixed(2)}</p>
            <p class="p_chose">请选择合适的尺寸：</p>
            <div class="p_size">
                <a href="javascript:;" class="active">XS</a>
                <a href="javascript:;">S</a>
                <a href="javascript:;">M</a>
                <a href="javascript:;">L</a>
                <a href="javascript:;">XL</a>
            </div>
            <div><input type="button" value="加入购物车" class="p_btn"/></div>
            <div class="s_icon"><img src="img/product_detail/msg.png" alt=""/><span>在线顾问</span><span class="padding_l"> |</span><img src="img/product_detail/tel.png" alt=""/><span>选购咨询</span></div>
            <div class="s_icon"><span>分享：</span><img src="img/product_detail/wechat.png" alt=""/><img src="img/product_detail/weibo.png" alt=""/></div>
            <p class="p_last">选择标准配送，免运费</p>`
            var fix_cart=document.getElementsByClassName("fix_cart")[0];
            fix_cart.innerHTML=html2;
            var p_btn=document.getElementsByClassName("p_btn")[0];
            p_btn.onclick=function(){
                var str=`uid=${uid}&pid=${pid}`;
                ajax({url:"http://localhost:3000/addcart",data:str,type:"get"})
                .then(res=>{
                    var result=JSON.parse(res);
                    if(result.code==1){
                        alert("添加购物车成功");
                    }else if(result.code==-1){
                        location.href="login.html";
                    }
                }) 
            }
    var bool=false;
    var size=document.querySelectorAll(".p_size>a");
    for(var s_item of size){
        s_item.onclick=function(){
            var r_class=this.parentElement.children;
            for(var r_item of r_class){
                r_item.setAttribute("class","");
            }
            this.className="active";
        }
    }
    window.onresize = function () {
        var head_bg = document.getElementsByClassName("header-bg")[0];
        var item = document.getElementsByClassName("li_d");
        var fix_cart=document.getElementsByClassName("fix_cart")[0];
        if (document.documentElement.clientWidth >= 768) {
            head_bg.style.height = "100px";
            for (var i_bro of item)
            {
                i_bro.style.display = "block";
            }
        } else if (document.documentElement.clientWidth < 768) {
            head_bg.style.height = "60px";
            for (var i_bro of item)
            {
                i_bro.style.display = "none";
            }
        }
        if(document.documentElement.clientWidth < 992){
            bool=false;
            fix_cart.style.position="absolute";
        }else{
            bool=true;
        }
    }
    window.onscroll = function () {
        var scrollTop = document.documentElement.scrollTop||document.body.scrollTop;
        var detail_img = document.getElementsByClassName("detail_img")[0];
        var fix_cart=document.getElementsByClassName("fix_cart")[0];
        var x_width=this.innerWidth
        if (scrollTop >= 2500- window.innerHeight) {
            detail_img.style.position = "fixed";
            detail_img.style.top=-(2500- window.innerHeight)+"px";
        }else{
            detail_img.style.position="relative";
            detail_img.style.top=0;
        }
        if(scrollTop>=2500-100){
            fix_cart.style.position="absolute";
            fix_cart.style.top=100+"px";
        }else if(bool){
            fix_cart.style.position="fixed";
            fix_cart.style.top=200+"px";
        }else if(x_width>=991&&scrollTop<=2500-100&&!bool){
            fix_cart.style.position="fixed";                                                
            fix_cart.style.top=200+"px";
        }else{
            fix_cart.style.position="absolute";
            fix_cart.style.top=100+"px";
        }
    }
    })
    }
})