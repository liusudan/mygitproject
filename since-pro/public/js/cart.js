$(function(){
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
    var str=`uid=${uid}`;
    ajax({url:"http://localhost:3000/getaddlist",data:str,type:"get"})
    .then(res=>{
        var result=JSON.parse(res);
        if(result.data.length>=1){
            var none_show=document.getElementsByClassName("none_show")[0];
            none_show.style.display="none";
            var show_t=document.getElementsByClassName("show_t")[0];
            show_t.style.display="block";
            var html=`<p><input type="checkbox" id="checkall"> 全选</p>`;
            for(var cart_item of result.data){
                html+=`<div class="cart_border">
                <div class="d-flex justify-content-left">
                    <input type="checkbox" class="cart_check" data-set="${cart_item.price}">
                    <div class="cart_img"><img src="${cart_item.l_img}" alt=""></div>
                    <div class="cart_detail">
                        <h5>${cart_item.title.slice(12,25)}</h5>
                        <p class="pt-2 pb-2 size">尺码：S</p>
                        <p>有货</p>
                        <p>预计发货后2-4个工作日送达</p>
                        <div class="mt-md-4 mt-ld-4 mt-1 cart_btn"><button class="btn_dec_count">-</button><span class="cart_count">${cart_item.count}</span><button class="btn_add_count">+</button></div>
                    </div>
                </div>
                <div>
                    <a href="javascript:;" id="${cart_item.id}" class="cart_del">移除</a>
                </div>
                <div>
                    <span>￥${cart_item.price.toFixed(2)}</span>
                </div>
            </div>`;
            }
            var has_show=document.getElementsByClassName("has_show")[0];
            has_show.innerHTML=html;   
            //全选框与单选框的绑定
            var checkall=document.getElementById("checkall");
            checkall.onclick=function(){
                if(checkall.checked){
                    var cart_check=document.getElementsByClassName("cart_check");
                    for(var check_item of cart_check){
                        check_item.checked=true;
                    }
                }else{
                    var cart_check=document.getElementsByClassName("cart_check");
                    for(var check_item of cart_check){
                        check_item.checked=false;
                    }
                }
                cartSum();       
            }
            var cart_check=document.getElementsByClassName("cart_check");
            for(var check_item of cart_check){
                var bool=true;
                check_item.onclick=function(e){
                    this.checked=e.target.checked;
                    if(!e.target.checked){
                        checkall.checked=false;
                    }else{
                        for(var cart_item_i of cart_check){
                            if(!cart_item_i.checked){
                                bool=false;
                                break;
                            }
                            bool=true;
                        }
                        checkall.checked=bool;
                    }
                    cartSum();
                }
            } 
           //删除购物车中的商品
           var cart_del=document.getElementsByClassName("cart_del");
           for(var item_del_l of cart_del){
               item_del_l.onclick=function(){
                   var id=this.id;
                   var str=`id=${id}`;
                   ajax({url:"http://localhost:3000/deletecart",data:str,type:"get"})
                   .then(res=>{
                       var result=JSON.parse(res);
                       if(result.code==1){
                           console.log(111);
                           console.log(this.parentElement.parentElement);
                          this.parentElement.parentElement.style.display="none";
                       }
                   })
               }
           }
           //数量加减绑定
           var btn_dec_count=document.getElementsByClassName("btn_dec_count");
           var btn_add_count=document.getElementsByClassName("btn_add_count");
           for(var btn_dec_item of btn_dec_count){
                btn_dec_item.onclick=function(){
                    var num=this.nextElementSibling.innerHTML;
                    if(num>1){
                        num--;
                    }
                    this.nextElementSibling.innerHTML=num;
                    var id=this.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.id;
                    var str=`id=${id}&count=${num}`;
                    ajax({url:"http://localhost:3000/changecart",data:str,type:"get"})
                    .then(res=>{
                        cartSum();
                    })
                }
           }
           for(var btn_add_item of btn_add_count){
               btn_add_item.onclick=function(){
                   var num=this.previousElementSibling.innerHTML;
                   num++;
                   this.previousElementSibling.innerHTML=num;
                   var id=this.parentElement.parentElement.parentElement.nextElementSibling.firstElementChild.id;
                    var str=`id=${id}&count=${num}`;
                    ajax({url:"http://localhost:3000/changecart",data:str,type:"get"})
                    .then(res=>{
                       cartSum();
                    })
               }
           }
        }
        
     
    }) 
    
})
//购物车总计
function cartSum(){
    var total=0; 
    var cart_check=document.getElementsByClassName("cart_check");  
    var totalmoney=document.getElementsByClassName("totalmoney");         
    for(var item of cart_check){
       if(item.checked){
           var count=item.parentElement.lastElementChild.lastElementChild.firstElementChild.nextElementSibling.innerHTML;
          total+=parseInt(item.getAttribute("data-set")*count);
       }
    }
    for(var money of totalmoney){
        money.innerHTML=`￥${total.toFixed(2)}`;
    }   
}
window.onload=function(){
    var cart_title=document.getElementsByClassName("cart_title");
    for(var cart_item of cart_title){
        var i=true;
        cart_item.onclick=function(){
            if(i){
                this.nextElementSibling.style.display="block";
                this.firstElementChild.firstElementChild.src="img/cart/dec.png";
                i=!i;
            }else{
                this.nextElementSibling.style.display="none";
                this.firstElementChild.firstElementChild.src="img/cart/plus.png";
                i=!i;
            }

        }
    }
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