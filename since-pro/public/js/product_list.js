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
    var search=location.search;
    if(search!==""){
        var lid=search.split("=")[1];
        var str=`lid=${lid}`;
        ajax({url:"http://localhost:3000/productlist",data:str,type:"get"})
        .then(res=>{
            var result=JSON.parse(res);
            var rows=document.getElementById("rows_list");
            var html="";
            for(var item of result){
                 html+=`<div class="col-lg-3 col-md-3 col-6 p-0">
                 <a class="d-block m_list_a" href="product_detail.html?pid=${item.pid}"><img class="m_list_img" l_img="${item.l_img}" m_img="${item.c_img}" src="${item.l_img}" alt=""/></a>
                     <div class="m_list_hidden">
                         <p class="pr-3 pl-3 p_title"><span>${item.title}</span><span class="float-right p_price">￥${item.price.toFixed(2)}</span></p>
                     </div>
             </div>`
            }
            rows.innerHTML=html;
            var list_a=document.getElementsByClassName("m_list_a");
            for(var item of list_a){
                item.onmouseover=function(){
                    var item_bro=this.nextElementSibling;
                    var item_child=this.firstElementChild;
                    var m_img=item_child.getAttribute("m_img");
                    item_child.src=m_img;
                    item_bro.style.display="block";
        
                }
                item.onmouseout=function(){
                    var item_bro=this.nextElementSibling;
                    var item_child=this.firstElementChild;
                    var l_img=item_child.getAttribute("l_img");
                    item_child.src=l_img;
                    item_bro.style.display="none";
                }
            }
            
        })
    }
})

window.onresize=function(){
    var head_bg=document.getElementsByClassName("header-bg")[0];
    var item=document.getElementsByClassName("li_d");
    var m_list_hidden=document.getElementsByClassName("m_list_hidden");
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