
let container=document.getElementById("s");
let sub=document.getElementById("submit");
let result=document.getElementById("a");
let res=document.getElementById("b")
let r=document.getElementById("c")
const xhr = new XMLHttpRequest();
sub.onclick=function(){
    xhr.open("GET",`http://www.omdbapi.com/?t=${container.value}&apikey=d4602129`)
    xhr.send();
    xhr.onloadend=function(){
        if (xhr.status === 200) {
            let response = JSON.parse(xhr.responseText);
            let title=response["Title"]
            let director=response["Director"]
            let year=response["Year"]
            result.innerHTML="TITLE   :"+title
            res.innerHTML="DIRECTOR   :"+director
            r.innerHTML="YEAR      :"+year
        }else {
            result[0].innerHTML = "responce is not found.";
         }
    }; 
}



