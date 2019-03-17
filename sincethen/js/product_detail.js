$(function() {
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
        }
    }
})