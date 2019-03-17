$(function(){
    var obj=document.getElementsByClassName("li_title");
    for(var item of obj){
        item.onclick= function () {
            var item_bro=this.parentElement.getElementsByClassName("li_d");
            var item_fir=this.parentElement.firstElementChild.nextElementSibling;
            if(item_bro[0].style.display=="none"){
                for(var i_bro of item_bro){
                    i_bro.style.display="block";
            }}else{
                for(var i_bro of item_bro){
                i_bro.style.display="none";
                }
            }
        }

    /* 网页版点击功能
        item.onclick= function () {
            var item_bro=this.parentElement.children;
            var item_fir=this.parentElement.firstElementChild.nextElementSibling;
            if(!item_fir.style.display){
                for(var i_bro of item_bro){
                    i_bro.style.display="block";
                }
            }else if(item_fir.style.display=="block"){
                for(var i_bro of item_bro){
                    i_bro.style.display="none";
                }
                this.parentElement.firstElementChild.style.display="block";
            }
        }*/
    }
})

