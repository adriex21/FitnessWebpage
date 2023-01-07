var imgBox = document.getElementById("imgBox");
var full = document.getElementById("full");

function openFullImg(pic){
    
    imgBox.style.display = "flex";
    full.src=pic;
}


function closeFullImg(){
    imgBox.style.display = "none";
}
