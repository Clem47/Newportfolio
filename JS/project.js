const git = document.querySelector(".git");
const menu = document.querySelector(".menu a");
const haut = document.querySelector(".title");

window.addEventListener('scroll',()=>{
    if (window.scrollY>haut.clientHeight*1.285){
        git.src = "./picture/gitb.png";
    }
    else{
        git.src = "./picture/git.png";
    }
})