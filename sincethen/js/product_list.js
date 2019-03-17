window.onload=function(){
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
}
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