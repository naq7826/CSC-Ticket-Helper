document.getElementById("About").onclick = function(){
    document.getElementById("AboutText").removeAttribute("hidden");
    document.getElementById("show").style.display = "";
    document.getElementById("hdsdText").setAttribute("hidden", true);
    document.getElementById("ins").style.display = "none";
};

document.getElementById("hdsd").onclick = function(){
    document.getElementById("AboutText").setAttribute("hidden", true);
    document.getElementById("show").style.display = "none";
    document.getElementById("hdsdText").removeAttribute("hidden");
    document.getElementById("ins").style.display = "";
}