document.getElementByTagName("li").addEventListener("click", function(){
    if(this.parentNode.getAttribute("class")){
    this.parentNode.setAttribute("class","slideDown");
    }
    else {
    this.parentNode.removeAttribute("class");
    }
});