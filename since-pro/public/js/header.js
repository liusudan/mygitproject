$(function(){
    //ËÑË÷¿ò¶¯»­
    var search=document.getElementsByClassName("search")[0]
    search.onmouseover=function(){
        var search=this;
        var searchid=document.getElementById("search");
        searchid.style.display="block";
        searchid.onmouseover=function(){
            var searchid=this;
            searchid.style.display="block";
         }
        searchid.onmouseleave= function () {
            var searchid=this;
            var inputid=this.firstElementChild;
            inputid.onblur=function(){
                searchid.style.display="none";
            }
        }
    }
    //²Ëµ¥À¸¶¯»­
    var item_col=document.getElementById("item_col");
    var bool=false;
    var item_show=document.getElementById("item_show");
    var head_bg=document.getElementsByClassName("header-bg")[0];
    item_col.onmouseover=function(){
            head_bg.style.height="300px";
            item_show.style.height="300px";
            head_bg.style.transitionDelay="0s"
    }
    item_col.onmouseleave=function(){
            head_bg.style.height="60px";
            item_show.style.height="0px";
            head_bg.style.transitionDelay="0.1s";
    }


})
