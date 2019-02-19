(function(){
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
        searchid.onmouseout= function () {
            var searchid=this;
            var inputid=this.firstElementChild;
            inputid.onblur=function(){
                searchid.style.display="none";
            }
        }
    }

}())